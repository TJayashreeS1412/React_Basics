import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Rendering...");

  const prime = useMemo(() => {
    console.log("calculate prime numebr of... ", text);
    return findNthPrime(text);
  }, [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black bg-amber-50 " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></input>
      </div>
      <h2 className="mt-4 font-bold text-xl">nth Prime: {prime}</h2>
    </div>
  );
};

export default Demo;
