import Header from "./components/Header";
import ContentArea from "./components/ContentArea";
import Footer from "./components/Footer";
import { movieData } from "./movie-data.service";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import MovieDetail from "./components/MovieDetail";
import Main from "./Home";

function App() {
  const [movies, setMovies] = useState([]);
  const [seachValue, setSearchValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      getData(seachValue);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [seachValue]);

  async function getData(value) {
    const res = await movieData(value);
    if (res.data.Search) {
      setMovies(res.data.Search);
    }
  }

  return (
    <>
      <div className="box-border flex min-h-screen flex-col">
        <Header searchValue={seachValue} setSearchValue={setSearchValue} />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<ContentArea movies={movies} />} />
          <Route path="/details" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
