export const PROTOCOL = 'http';

export const API = `${PROTOCOL}://hindi.theviralpages.com/wp-json/wp/v2`;

export const GET_POSTS = `${API}/posts`;

export const GET_CATEGORIES = `${API}/categories?per_page=100`;  //MAX: 100 categories can be fetched.

export const GET_TAGS = `${API}/tags?per_page=25`;  //MAX: 25 tags can be fetched.


