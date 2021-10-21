import axios, { AxiosResponse } from 'axios';

// const baseUrl = process.env.REACT_APP_API_BASE_URL;
// console.log('baseUrl', baseUrl);

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),

  post: (url: string, body: object) =>
    instance.post(url, body).then(responseBody),

  patch: (url: string, body: object) =>
    instance.patch(url, body).then(responseBody),

  delete: (url: string) => instance.delete(url).then(responseBody),
};

export default requests;

// export const post = (url: string, body: Object) => {
//   return instance
//     .post(url, body)
//     .then((response: AxiosResponse) => response.data.data);
// };

// export const patch = (url: string, body: Object) => {
//   return instance
//     .patch(url, body)
//     .then((response: AxiosResponse) => response.data.data);
// };

// export const _delete = (url: string) => {
//   return instance
//     .delete(url)
//     .then((response: AxiosResponse) => response.data.data);
// };
