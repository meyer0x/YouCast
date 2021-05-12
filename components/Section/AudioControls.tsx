/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface IAudioControlsProps {
  isPlaying?: boolean;
  onPlayPauseClick?: any;
  onPrevClick?: any;
  onNextClick?: any;
}
export default function AudioControls(props: IAudioControlsProps): JSX.Element {
  return (
    <div className="flex flex-row justify-center items-center">
      <button
        type="button"
        className=""
        aria-label="Previous"
        onClick={props.onPrevClick}
      >
        <img src={"/Back.svg"} />
      </button>

      {props.isPlaying ? (
        <button
          type="button"
          className="mx-4"
          onClick={(): void => props.onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <img src={"/Pause.svg"} />
        </button>
      ) : (
        <button
          type="button"
          className="mx-4"
          onClick={(): void => props.onPlayPauseClick(true)}
          aria-label="Play"
        >
          <img src={"/Play.svg"} />
        </button>
      )}
      <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={props.onNextClick}
      >
        <img src={"/Next.svg"} />
      </button>
    </div>
  );
}
