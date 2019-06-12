const _isDev = window.location.port.indexOf('4300') > -1;
const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};

const apiURI = _isDev ?  '/api' : 'http://carelinenigeria.herokuapp.com/api';

// console.log('inside const');

// console.log(getHost());

export const ENV = {
  BASE_URI: getHost(),
  BASE_API: apiURI
};
