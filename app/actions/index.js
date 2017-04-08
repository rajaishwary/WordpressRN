import { 
    GET_CATEGORIES,
    GET_POSTS,
    GET_TAGS,
    GET_RECENT_POSTS,
} from '../constants/API';
import { getFetch, postFetch, deleteFetch } from '../utils/APIutils';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_RECENT_POSTS = 'RECEIVE_RECENT_POSTS';

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

export function fetchTags() {
    return (dispatch, getState) => {
        return getFetch(`${GET_TAGS}`)
            .then(response => { 
                    dispatch(receiveTags(response));
                })
                .catch(err => {
                    console.log(err);
                });
            }
    };

export function fetchRecentPosts() {
    return (dispatch, getState) => {
        return getFetch(`${GET_RECENT_POSTS}`)
            .then(response => { 
                    dispatch(receiveRecentPosts(response));
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

export function receivePosts(data) {
    return {
        type: RECEIVE_POSTS,
        data,
    }
}   

export function receiveTags(data) {
    return {
        type: RECEIVE_TAGS,
        data,
    }
}   

export function receiveRecentPosts(data) {
    return {
        type: RECEIVE_RECENT_POSTS,
        data,
    }
}   

