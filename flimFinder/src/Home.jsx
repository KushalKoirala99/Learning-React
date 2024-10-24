import ContentArea from "./components/ContentArea";
import { movieData } from "./movie-data.service";
import { useEffect, useState } from "react";

const Main = () => {
  const trending = ["star wars", "avengers", "john wick", "Harry Potter"];
  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  async function getTrending() {
    const res = await movieData(
      trending[Math.floor(Math.random() * trending.length)],
    );
    setMovieArr(res.data.Search);
  }
  return (
    <>
      <ContentArea movies={movieArr} />
    </>
  );
};

export default Main;
