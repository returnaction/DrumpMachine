// DrumPad.js
import React, { useEffect, useRef } from "react";

const DrumPad = ({ id, keyTrigger, src, playSound, setAudioRef }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedData = () => {
      setAudioRef(audio);
    };

    audio.addEventListener("loadeddata", handleLoadedData);

    return () => {
      audio.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [setAudioRef]);

  const handleClick = () => {
    playSound(id);
  };

  const handleKeyDown = (event) => {
    if (event.key.toUpperCase() === keyTrigger) {
      playSound(id);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [id, keyTrigger]);

  return (
    <div className="drum-pad" id={id} onClick={handleClick}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} ref={audioRef} src={src}></audio>
    </div>
  );
};

export default DrumPad;
