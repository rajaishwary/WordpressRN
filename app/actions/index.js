import { 
    GET_AVAILABLE_SPORTS
} from '../constants/API';
import { getFetch, postFetch, deleteFetch } from '../utils/APIutils';

export const RECEIVE_AVAILABLE_SPORTS = 'RECEIVE_AVAILABLE_SPORTS';

export function fetchAvailableSports() {
    return (dispatch, getState) => {
        return getFetch(`${GET_AVAILABLE_SPORTS}`)
            .then(response => { 
                    dispatch(receiveAvailableSports(response));
                })
                .catch(err => {
                    console.log(err);
                });
            }
    };

export function receiveAvailableSports(data) {
    return {
        type: RECEIVE_AVAILABLE_SPORTS,
        data,
    }
}    