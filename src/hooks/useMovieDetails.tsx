import { useEffect, useState } from "react";
import { FullMovieDetails } from "../interfaces/movieDBInterface";
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails {
  isLoading: boolean;
  fullMovie?: FullMovieDetails;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullMovie: undefined,
    cast: [],
  })

  const getMovieDetails = async () => {
    const movieDetailPromise = await movieDB.get<FullMovieDetails>(`/${movieId}?api_key=2cb2c1b00291c5b9629da2d6f5e624c0&language=es-ES&page=1`)
    const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits?api_key=2cb2c1b00291c5b9629da2d6f5e624c0&language=es-ES&page=1`)
    const [movieDetailPromiseRes, castPromiseRes] = await Promise.all([movieDetailPromise, castPromise]);

    setState({
      isLoading: false,
      fullMovie: movieDetailPromiseRes.data,
      cast: castPromiseRes.data.cast,
    })
  }

  useEffect(() => {
    getMovieDetails()
  }, [])


  return {
    ...state
  }
}

export default useMovieDetails