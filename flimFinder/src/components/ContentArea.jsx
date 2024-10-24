import { useNavigate } from "react-router-dom";

const ContentArea = (props) => {
  const navigate = useNavigate();

  const showMovieInfo = (movie) => {
    navigate("/details", { state: { movie } });
  };
  return (
    <>
      <div className="h- mx-4 grid flex-1 grid-cols-2 gap-3 p-5 sm:grid-cols-4 lg:grid-cols-6">
        {props.movies.map((movie) => (
          <div key={movie.imdbID} onClick={() => showMovieInfo(movie)}>
            <div className="grid cursor-pointer border-4 border-white transition-colors duration-300 ease-in-out hover:border-Blazing-Yellow">
              <img
                src={movie.Poster}
                className="h-72 w-full object-cover"
                alt={movie.Title}
              ></img>
            </div>
            <h1 className="mt-1 cursor-pointer p-2 text-left text-lg text-white hover:text-[#919191]">
              {movie.Title}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentArea;
