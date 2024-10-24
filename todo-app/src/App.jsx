import Button from "../components/Button";
import Input from "../components/Input";
import List from "../components/List";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({ name: "", done: false });
  const [list, setList] = useState([]);

  function handleInputChange(e) {
    setInputValue({ name: e.target.value, done: false }); // update the state with input value
  }

  function handleSubmit() {
    if (inputValue.name.trim()) {
      setList([...list, inputValue]);
      setInputValue({ name: "", done: false });
    }
  }

  return (
    <>
      <div className="main-container">
        <h1>TODO</h1>
        <Input value={inputValue} onInputChange={handleInputChange} />
        <Button onclick={handleSubmit} />
        {list.map((item) => (
          <List item={item} key={item.name} list={list} setList={setList} />
        ))}
      </div>
    </>
  );
}

export default App;
