import {
    ADD_MOVIES_STARTED,
    ADD_MOVIES_FETCHED,
    ADD_MOVIES_ERROR,
    FILTERED_MOVIES,
    DETAIL_MOVIE_STARTED,
    DETAIL_MOVIE,
    DETAIL_MOVIE_ERROR
} from './types';

const ENDPOINT_LIST = "https://mfwkweb-api.clarovideo.net/services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexico&api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52";

export const fetchMovies = () => async dispatch => {
    dispatch({ type: ADD_MOVIES_STARTED });
    try {
        const response = await fetch(ENDPOINT_LIST, { method: 'GET' });
        const resp = await response.json();
        if (resp.msg === 'OK') {
            dispatch({ type: ADD_MOVIES_FETCHED, payload: resp.response.groups });
        }
    } catch (err) {
        dispatch({ type: ADD_MOVIES_ERROR, payload: err });
    }
};

export const filterMovie  = (movies, searchText, maxResults) => async dispatch => {
    const data = movies.filter(movie => {
      if (movie.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    }).slice(0, maxResults);
    dispatch({ type: FILTERED_MOVIES, payload: data });
};

export const detailMovie  = (id) => async dispatch => {
    dispatch({ type: DETAIL_MOVIE_STARTED });
    const url = `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${id}`;
    try {
        const response = await fetch(url, { method: 'GET' });
        const resp = await response.json();
        if (resp.msg === 'OK') {
            dispatch({ type: DETAIL_MOVIE, payload: resp.response.group.common });
        }
    } catch (err) {
        dispatch({ type: DETAIL_MOVIE_ERROR, payload: err });
    }
};