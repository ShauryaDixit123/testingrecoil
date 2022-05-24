import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { atom } from "recoil";
import Link from "next/link";

const state = atom({
  key: "state1",
  default: "Hello",
});

function Page1() {
  useEffect(() => {
    console.log("Page 1 called!");
  });
  const [input, setInput] = useState("");
  const [newState, setNewState] = useRecoilState(state);

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
