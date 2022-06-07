import { API_BASE_URL } from '../api-config';

const call = async (api, method, request) => {
  let options = {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }

  const response = await fetch(options.url, options);
  response.json().then((json) => {
    // 정상 응답이 아니면 reject Promise
    if (!response.ok) {
      Promise.reject(json);
    }
    return json;
  });
};

export default call;
