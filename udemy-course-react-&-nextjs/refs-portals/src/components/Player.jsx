import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(); //useRef is ALWAYS a JS object

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value); //and always and only has a .current property
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ?? "unknown entity"} {/* ?? if true, the left side is showing, if not, then the right*/}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
