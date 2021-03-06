import { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";
import Link from "next/link";
import { useHydrateAtoms } from "jotai/utils";

const state = atom("Hello");

function Page1() {
  const [input, setInput] = useState("");
  const [newState, setNewState] = useAtom(state);

  useEffect(() => {
    console.log("Index Page called!");

    return () => {
      setNewState("Hello");
    };
  }, [setNewState]);

  return (
    <div>
      <Link href="/page2">
        <a>Goto Page 2</a>
      </Link>

      <br></br>
      <br></br>

      <input
        placeholder="value of new state"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setNewState(input)}>Click to chanage state</button>
      <h3>{newState}</h3>
    </div>
  );
}

export default Page1;
