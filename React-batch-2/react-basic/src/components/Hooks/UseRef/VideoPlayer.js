import React, { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);
  const inputRef = useRef(null);

  const playVideo = () => {
    console.log(videoRef.current);
    videoRef.current.play();
  };
  const pauseVideo = () => {
    console.log(videoRef);
    videoRef.current.pause();
  };
  const focusInput = () => {
    inputRef.current.focus();
  }
  return (
    <>
      <video
        ref={videoRef}
        controls
        style={{ width: 400, height: 400 }}
        src="https://videos.pexels.com/video-files/852352/852352-hd_1920_1080_30fps.mp4"
      ></video>
      <br />
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>

      <br />
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

export default VideoPlayer;
