import Button from "../components/Button";
import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  function handleClickAdd() {
    setCount(() => count + 1);
  }

  function handleClickReset() {
    setCount(0);
  }

  const handleClickSub = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div id="container">
        <h1 className="header">Counter</h1>
        <h2 id="display">{count}</h2>
        <Button value="Subtract" onClick={handleClickSub} />
        <Button value="Reset" onClick={handleClickReset} />
        <Button value="Add" onClick={handleClickAdd} />
      </div>
    </>
  );
}

export default App;
