import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./components/Child";
import ChildToParent from "./components/ChildToParent";

function App() {
  const [count, setCount] = useState(0);

  const displayMessage = (message) => {
    console.log(message);
  };

  return (
    <>
      <h1>Child to Parent</h1>
      <div className="card">
        <Child count={count} setCount={setCount} />
        <ChildToParent callback={displayMessage} />
      </div>
    </>
  );
}

export default App;
