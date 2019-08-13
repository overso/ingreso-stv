import {
    ADD_MOVIES_STARTED,
    ADD_MOVIES_FETCHED,
    ADD_MOVIES_ERROR,
    FILTERED_MOVIES,
    DETAIL_MOVIE_STARTED,
    DETAIL_MOVIE,
    DETAIL_MOVIE_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
    filteredMovies: [],
    selectedMovie: null,
    error: null,
    fetchingMovies: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MOVIES_STARTED:
            return { ...state, fetchingMovies: true };
        case ADD_MOVIES_FETCHED:
            return { ...state, data: action.payload, filteredMovies: action.payload, fetchingMovies: false };
        case ADD_MOVIES_ERROR:
            return { ...state, data: [], filteredMovies: [], selectedMovie: null, fetchingMovies: false, error: action.payload };
        case FILTERED_MOVIES:
            return { ...state, filteredMovies: action.payload };
        case DETAIL_MOVIE_STARTED:
            return { ...state, fetchingMovies: true };
        case DETAIL_MOVIE:
            return { ...state, selectedMovie: action.payload };
        case DETAIL_MOVIE_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};