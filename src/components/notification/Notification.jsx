import sound from "../../assets/sound/message.mp3";
import React, { useEffect, useState } from "react";

export default function Notification() {
  const data = [{ time: "" }];
  const [value, setValue] = useState(1);
  useEffect(() => {
    if (value % 2 === 0) play();
  }, [value]);
  function play() {
    new Audio(sound).play();
  }
  return (
    <div>
      <button onClick={() => setValue(value + 1)}>play sound</button>
    </div>
  );
}
