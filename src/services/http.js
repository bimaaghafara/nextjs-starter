import axios from "axios";
// import { encrypt, decrypt } from "src/helpers/crypto";
// import Router from 'next/router'

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json"
  }
});

http.interceptors.request.use(config => {
  // console.log(config)
  // const token = localStorage.getItem('token');
  // if (token) {
  //   // add token to request headersif exist
  //   config.headers['Authorization'] = `Bearer ${decrypt(token)}`;
  // }
  return config;
});

http.interceptors.response.use(
  // Do something with response success
  function (response) {
    // save token if exist
    // if (
    //   response &&
    //   response.data &&
    //   response.data.data &&
    //   response.data.data.token
    // ) {
    //   localStorage.setItem('token', encrypt(response.data.data.token));
    // }
    return response.data;
  },
  // Do something with response error
  function (error) {
    // if (window && window.growl) {
    //   // see primereact growl for documentations
    //   // https://primefaces.org/primereact/showcase/#/growl
    //   const errorData = error && error.response && error.response.data;
    //   const errorCode = errorData && errorData.code;
    //   const errorMessage = errorData && errorData.message;
    //   window.growl.current.show({
    //     life: 6000,
    //     severity: 'error',
    //     summary: `Error: ${errorCode}`,
    //     detail: <div>{errorMessage}</div>
    //   });
    // }
    // const errorCode = error && error.response && error.response.data && error.response.data.code;
    // if (errorCode == 401) {
    //   Router.push('/signin');
    // }
    console.error(error.response);  
    return Promise.reject(error.response);
  }
);

export default http;

