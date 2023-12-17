// DrumMachine.js
import React, { useEffect, useRef, useState } from "react";
import DrumPad from "./DrumPad";

const DrumMachine = ({ pads }) => {
  const [displayText, setDisplayText] = useState("");

  const playSound = (id, displayText) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplayText(displayText);
    }
  };

  const audioRefs = useRef({});

  const handleKeyPress = (event) => {
    const pressedKey = event.key.toUpperCase();
    const pad = pads.find((p) => p.keyTrigger === pressedKey);

    if (pad) {
      playSound(pad.id, pad.clipName);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [pads]);

  return (
    <div id="drum-machine">
      {pads.map((pad) => (
        <DrumPad
          key={pad.id}
          id={pad.id}
          keyTrigger={pad.keyTrigger}
          src={pad.src}
          playSound={() => playSound(pad.id, pad.clipName)}
          setAudioRef={(ref) => (audioRefs.current[pad.id] = ref)}
        />
      ))}
      <div id="display">{displayText}</div>
    </div>
  );
};

export default DrumMachine;
