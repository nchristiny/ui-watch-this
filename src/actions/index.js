import axios from 'axios';

export const FETCH_RECOMMENDATIONS = 'FETCH_RECOMMENDATIONS';
export const CREATE_RECOMMENDATION = 'CREATE_RECOMMENDATION';
export const FETCH_RECOMMENDATION = 'FETCH_RECOMMENDATION';
export const DELETE_RECOMMENDATION = 'DELETE_RECOMMENDATION';
export const FETCH_FILM = 'FETCH_FILM';
export const FETCH_FILMS = 'FETCH_FILMS';

const ROOT_URL = 'http://localhost:3000/api';

export function fetchRecommendations() {
  const request = axios.get(`${ROOT_URL}/recommendations`);
  return {
    type: FETCH_RECOMMENDATIONS,
    payload: request
  };
}

export function createRecommendation(props) {
  const request = axios.post(`${ROOT_URL}/recommendations`, props);

  return {
    type: CREATE_RECOMMENDATION,
    payload: request
  };
}

export function fetchRecommendation(id) {
  const request = axios.get(`${ROOT_URL}/recommendations/${id}`);

  return {
    type: FETCH_RECOMMENDATION,
    payload: request
  };
}

export function deleteRecommendation(id) {
  const request = axios.delete(`${ROOT_URL}/recommendations/${id}`);

  return {
    type: DELETE_RECOMMENDATION,
    payload: request
  };
}

export function fetchFilms() {
  const request = axios.get(`${ROOT_URL}/films`);

  return {
    type: FETCH_FILMS,
    payload: request
  };
}

export function fetchFilm(id) {
  const request = axios.get(`${ROOT_URL}/films/${id}`);

  return {
    type: FETCH_FILM,
    payload: request
  };
}
