import List from "./List";
import { useRef, useState } from "react";

function App() {
  const [inputText, setText] = useState("");
  const [inputArr, setInputArr] = useState([]);
  const inputRef = useRef(null);

  const hendleKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputArr((prev) => [...prev, inputText]);
    }
  };
  const handleFocus = () => {
    inputRef.current.focus();
  };
  let usersArr = [
    {
      id: 111,
      name: "Ivan",
      age: 22,
    },
    {
      id: 222,
      name: "Pavel",
      age: 33,
    },
    {
      id: 333,
      name: "Alex",
      age: 44,
    },
  ];
  return (
    <>
      <input
        ref={inputRef}
        onKeyDown={hendleKeyDown}
        onChange={(e) => setText(e.target.value)}
        value={inputText}
      ></input>

      {inputArr.map((item) => (
        <li key={item}>{item}</li>
      ))}

      <button onClick={handleFocus}> focus input </button>

      <List users={usersArr} />
    </>
  );
}

export default App;
