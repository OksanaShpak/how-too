import { useState } from "react";
import realRecord from "../assets/audio/Harbar - Summer Wind.mp3";
import pauseIcon from "../assets/img/pause_black_24dp.svg";
import playIcon from "../assets/img/play-button.svg";

function Player() {
  const [isPlay, setIsPlay] = useState(false);
  const [record] = useState(new Audio(realRecord));

  const handleClick = () => {
    setIsPlay(!isPlay);
    if (isPlay) {
      record.play();
    } else {
      record.pause();
    }
  };

  return (
    <div>
      <div className="player">
        <div className="player__content">
          <div onClick={handleClick} className="play-button">
            <img src={isPlay ? pauseIcon : playIcon} alt="control icons" />
          </div>
          <div className="progress-line"></div>
          <div className="volume-button">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.3465V8.6565C0 9.11163 0.375 9.484 0.833333 9.484H3.33333L6.075 12.2065C6.6 12.7278 7.5 12.3554 7.5 11.619V2.37577C7.5 1.6393 6.6 1.26692 6.075 1.78825L3.33333 4.519H0.833333C0.375 4.519 0 4.89137 0 5.3465ZM11.25 7.0015C11.25 5.53682 10.4 4.27902 9.16667 3.66667V10.3281C10.4 9.72398 11.25 8.46618 11.25 7.0015ZM9.16667 0.753872V0.919372C9.16667 1.23382 9.375 1.5069 9.66667 1.62275C11.8167 2.47507 13.3333 4.56865 13.3333 7.0015C13.3333 9.43435 11.8167 11.5279 9.66667 12.3803C9.36667 12.4961 9.16667 12.7692 9.16667 13.0836V13.2491C9.16667 13.7705 9.69167 14.1346 10.175 13.9525C13 12.885 15 10.1791 15 7.0015C15 3.8239 13 1.11797 10.175 0.0504961C9.69167 -0.139829 9.16667 0.232546 9.16667 0.753872Z"
                fill="#08395B"
              />
            </svg>
          </div>
          <p className="transcript">Transcript</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
