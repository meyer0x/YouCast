/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useProfilContext } from "../../contexts/profil/profil.context";
import { getAllPodcast } from "../../networks/podcast.network";
import AudioControls from "./AudioControls";
import { ISideBarProps } from "./SideBar";

interface IPlayerBarProps {
  children: ReactNode;
  tracks?: any;
}
export default function PlayerBar(props: IPlayerBarProps): JSX.Element {
  const tracks = props.tracks;
  // UseState
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);

  // Tracks

  const { name, artist, link, image } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(typeof Audio !== "undefined" && new Audio(link));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const startTimer = (): void => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value): void => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = (): void => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = (): void => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = (): void => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const { subState, userInfo } = useProfilContext();
  // Handles cleanup and setup when changing tracks

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(link);
    audioRef.current.volume = volume / 100;
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return (): void => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #63B1DD), color-stop(${currentPercentage}, #A4AAB3))
`;
  const currentVolume = volume + "%";
  const trackVolume = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentVolume}, #63B1DD), color-stop(${currentVolume}, #A4AAB3))
`;

  return (
    <div className="relative right-0 w-full flex-col flex justify-between h-full">
      <div
        className="absolute bottom-0 w-full bg-youcast-mediumblue py-5 px-5 lg:px-12 flex flex-row items-center justify-center"
        style={{ height: "14%" }}
      >
        <div className="flex flex-row justify-center items-center w-full">
          <div className="flex flex-row md:flex-row  items-center transition-all delay-700 h-3/4 min-h-full">
            <img
              src={image}
              alt=""
              className="mr-5 w-24 rounded-xl transition-all delay-700"
            />
            <div className="transition-all delay-700 hidden lg:block">
              <p className="text-youcast-white font-semibold transition-all delay-700">
                {name}
              </p>
              <p className="text-youcast-lightgrey text-sm font-light tracking-wide transition-all delay-700">
                {artist}
              </p>
            </div>
          </div>
          <div className="flex flex-grow flex-col justify-center items-center">
            <AudioControls
              isPlaying={isPlaying}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
              onPlayPauseClick={setIsPlaying}
            />
            <div className=" hidden lg:flex w-full flex-row justify-center items-center mt-3">
              <p className="text-youcast-lightgrey font-normal tracking-wider">
                {formatTime(audioRef.current.currentTime)}
              </p>
              <input
                type="range"
                value={trackProgress}
                step="1"
                min="0"
                max={duration ? duration : `${duration}`}
                className="mx-4 w-7/12 bg-youcast-lightgrey appearance-none rounded-full h-2 "
                onChange={(e): void => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
                style={{ background: trackStyling }}
              />
              <p className="text-youcast-lightgrey font-normal tracking-wider">
                {formatTime(
                  audioRef.current.duration - audioRef.current.currentTime
                )}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex flew-row justify-center items-center">
            <img src="/Sound.svg" alt="" className="w-5" />
            <input
              id="volumeslider"
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e): void => setVolume(parseInt(e.target.value))}
              step="1"
              className="mx-4 w-100 bg-youcast-lightgrey appearance-none rounded-full h-2"
              style={{ background: trackVolume }}
            />
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}

function formatTime(seconds: number): string {
  let minutes: any = Math.floor(seconds / 60);
  let secs: any = Math.floor(seconds % 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (secs < 10) {
    secs = "0" + secs;
  }

  return minutes + ":" + secs;
}
