import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
async function movieData(search) {
  try {
    return await axios.get(
      `http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`,
    );
  } catch (e) {
    return e;
  }
}

async function MovieDetails(id) {
    try {
      return  await  axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`,
      );
    } catch (e) {
      return e;
    }
}

export {
  movieData,
  MovieDetails
};
