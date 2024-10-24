import { useEffect, useState } from "react";
import getRandomQuotes from "./quotes.service";
import "./app.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);
  async function getQuotes() {
    const res = await getRandomQuotes();
    // console.log(res);
    setQuote(res.data.content);
    setAuthor(res.data.author);
  }

  return (
    <>
      <div className="container">
        <div className="data">
          <div className="quote">{quote}</div>
          <div className="author">- {author}</div>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={getQuotes} className="btn">
          Random Quote
        </button>
      </div>
    </>
  );
}

export default App;
