import "./App.css";
import React from "react";
import DrumMachine from "./DrumMachine";

function App() {
  const drumpPads = [
    {
      id: "Heater 1",
      keyTrigger: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      clipName: "Heater 1",
    },
    {
      id: "Heater 2",
      keyTrigger: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      clipName: "Heater 2",
    },
    {
      id: "Heater 3",
      keyTrigger: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      clipName: "Heater 3",
    },
    {
      id: "Heater 4",
      keyTrigger: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      clipName: "Heater 4",
    },
    {
      id: "Clap",
      keyTrigger: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      clipName: "Clap",
    },
    {
      id: "Open-HH",
      keyTrigger: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      clipName: "Clap",
    },
    {
      id: "Kick-n'-Hat",
      keyTrigger: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      clipName: "Kick-n'-Hat",
    },
    {
      id: "Kick",
      keyTrigger: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      clipName: "Kick",
    },
    {
      id: "Closed-HH",
      keyTrigger: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      clipName: "Closed-HH",
    },
  ];

  return (
    <div className="App">
      <h1>Drump Machine by Nikita Obergan </h1>
      <DrumMachine pads={drumpPads} />
    </div>
  );
}

export default App;
