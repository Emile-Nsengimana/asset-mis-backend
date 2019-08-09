import "@babel/polyfill";

const baseUrl = 'https://ch-iii.herokuapp.com';
export const consume = async (url, method, body, token) => {
  const request = new Request(baseUrl + url, {
    method,
    mode: 'cors',
    cache: 'reload',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      token: token || '',
    },
    body: JSON.stringify(body),
  });
  try {
    const response = await fetch(request);
    const res = await response.json();
    return res;
  } catch (error) {
    return error;
  }
};

export const consumeGet = async (url, method, token) => {
  const request = new Request(baseUrl + url, {
    method,
    mode: 'cors',
    cache: 'reload',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      token: token || '',
    },
  });
  try {
    const response = await fetch(request);
    const res = await response.json();
    return res;
  } catch (error) {
    return error;
  }
};
