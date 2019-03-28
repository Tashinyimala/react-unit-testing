import { GET_POSTS } from './types';
import axios from 'axios';

export const fetchPosts = () => async dispatch => {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
  await axios
    .get(url)
    .then(response => {
      dispatch({
        type: GET_POSTS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};
