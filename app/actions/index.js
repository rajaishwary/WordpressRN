import { 
    GET_CATEGORIES,
    GET_POSTS,
} from '../constants/API';
import { getFetch, postFetch, deleteFetch } from '../utils/APIutils';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function fetchCategories() {
    return (dispatch, getState) => {
        return getFetch(`${GET_CATEGORIES}`)
            .then(response => { 
                    dispatch(receiveCategories(response));
                })
                .catch(err => {
                    console.log(err);
                });
            }
    };

export function receiveCategories(data) {
    return {
        type: RECEIVE_CATEGORIES,
        data,
    }
}   

export function fetchPosts(pageId) {
    return (dispatch, getState) => {
        return getFetch(`${GET_POSTS}?page=${pageId}`)
            .then(response => { 
                    dispatch(receivePosts(response));
                })
                .catch(err => {
                    console.log(err);
                });
            }
    };

export function receivePosts(data) {
    return {
        type: RECEIVE_POSTS,
        data,
    }
}     