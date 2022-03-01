import { useEffect, useState, useRef } from "react";

function UseRefHook() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    console.log("old: ", prevName.current);
    prevName.current = name;
    console.log("new: ", prevName.current);
  }, [name]);

  return (
    <div className="App">
      <input onChange={(e) => setName(e.target.value)} />
      <h2>
        My name is {name} and it used to be {prevName.current}{" "}
      </h2>
    </div>
  );
}

export default UseRefHook;
