import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);

  console.log("rendering...");

  useEffect(() => {
    console.log("initialising ", ref.current);
  }, []);

  return (
    <div className="m-4 p-2 bg-amber-50 border border-black w-96 h-96">
      <div className="flex">
        <button
          className="bg-green-600 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase X
        </button>
        <h2 className="p-2 m-4 font-bold text-xl">Let = {x}</h2>
      </div>
      <div className="flex">
        <button
          className="bg-green-600 p-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <h2 className="p-2 m-4 font-bold text-xl">State = {y}</h2>
      </div>
      <div className="flex">
        <button
          className="bg-green-600 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=" + ref.current);
          }}
        >
          Increase Y
        </button>
        <h2 className="p-2 m-4 font-bold text-xl">Ref = {ref.current}</h2>
      </div>
    </div>
  );
};

export default Demo2;
