import { useEffect, useState } from "react";
import { atom, useAtom } from "jotai";
import Link from "next/link";
import { useHydrateAtoms } from "jotai/utils";

const state = atom("Hello");

function Page2() {
  useEffect(() => {
    console.log("Page 2 called!");

    return () => {
      setNewState("Hello");
    };
  }, [setNewState]);

  const [input, setInput] = useState("");
  const [newState, setNewState] = useAtom(state);

  return (
    <div>
      <h1>Page 2</h1>

      <Link href="/">
        <a>Home</a>
      </Link>

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

export default Page2;
