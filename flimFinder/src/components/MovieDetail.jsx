import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieDetails } from "../movie-data.service";
import { ClipLoader } from "react-spinners";

const MovieDetail = () => {
  const location = useLocation();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movie } = location.state || {};

  useEffect(() => {
    getMovieDetail(movie.imdbID);
  }, [movie.imdbID]);

  async function getMovieDetail(id) {
    setLoading(true);
    const res = await MovieDetails(id);
    setDetails(res.data);
    setLoading(false);
  }
  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <ClipLoader color="#fff" size={50} />
        </div>
      ) : (
        <div className="m-7 box-border flex-1 border border-white p-4 font-mono text-white">
          <div className="flex-row sm:flex">
            <div className="flex-col items-center justify-center p-2 text-center sm:flex md:flex">
              <img
                className="rounded-md border-4 border-white hover:border-Blazing-Yellow"
                src={details.Poster}
                alt={details.Title}
              ></img>
              <div className="p-2 text-4xl">{details.Title}</div>
              <div className="p-2">IMDB Rating : {details.imdbRating}</div>
            </div>
            <div className="m-2 p-2">
              <div className="m-1 box-border border border-white p-2 text-lg">
                Plot : {details.Plot}
              </div>
              <div className="m-1 p-2 italic">Actors: {details.Actors}</div>
              <hr></hr>
              <div className="m-1 p-2 italic">
                Directors: {details.Director}
              </div>
              <hr></hr>
              <div className="m-1 p-2 italic">Genre : {details.Genre}</div>
              <hr></hr>
              <div className="m-1 p-2 italic">
                Language : {details.Language}
              </div>
              <hr></hr>
              <div className="m-1 p-2 italic">RunTime; {details.Runtime}</div>
              <hr></hr>
              <div className="m-1 p-2 italic">
                Released Date :{details.Released}
              </div>
            </div>
          </div>
        </div>
      )}{" "}
      m-1
    </>
  );
};

export default MovieDetail;
