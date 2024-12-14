const BASE_URL = 'https://www.swiggy.com/dapi';

const CDN_URL = 'https://media-assets.swiggy.com/swiggy';

export const IMG_CDN_URL =
  CDN_URL + '/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

export const API_URL =
  BASE_URL +
  '/restaurants/list/v5?lat=19.137675&lng=72.864102&collection=83631&type=rcv2&offset=0';

export const RESTAURANT_MENU_URL =
  BASE_URL +
  '/menu/pl?page-type=REGULAR_MENU&lat=19.137675&lng=72.864102&restaurantId=';
