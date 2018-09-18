import find from 'lodash/find';
import { trimStart } from '../utilities/stringUtils';

const getCookieValue = (cookieString) => cookieString.replace(/^[^=]*=(.*)/, '$1');

export const getCookie = (cookieName) => {

  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieCollection = decodedCookie.split(';');

  const cookiesFound = cookieCollection
    .map(cookie => trimStart(cookie));

  const foundCookie = find(cookiesFound, (cookie) => (cookie.indexOf(name) === 0 ));

  if (foundCookie) {
    return getCookieValue(foundCookie);
  }

  return "";

};

export const setCookie = (cookieName, cookieValue, expiryDate) => {
  const cookieStr = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)};`
    + `expires=${expiryDate.toUTCString()}; domain=.realestate.com.au; path=/`;

  document.cookie = cookieStr;
};
