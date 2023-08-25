import { getRequest, postRequest } from '.';

export const login = () => getRequest('/login');
export const logOut = () => postRequest('/logout', {});
