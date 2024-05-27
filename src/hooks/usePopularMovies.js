import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice';


const usePopularMovies = () => {
    //Fetch data from TMDB API and add to store.
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=2', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopularMovies;