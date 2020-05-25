import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import LoaderComponent from '../Components/LoaderComponent'

const BASEURL="https://hn.algolia.com/api/v1/";

let REQUEST_COUNT =0;

const axiosInstance = axios.create({
    baseURL: BASEURL,
    timeout: 1000,
    headers: {'Content-Type': 'application/json',}
  });


  axiosInstance.interceptors.request.use( (config)=> {
    REQUEST_COUNT++;
    ReactDOM.render (<LoaderComponent isLoader={true}></LoaderComponent> , document.getElementById('portal'));
    return config;
  },  (error)=> {
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use( (response) =>{
  REQUEST_COUNT--;
  if(REQUEST_COUNT===0){
    ReactDOM.render (<LoaderComponent isLoader={false}></LoaderComponent> , document.getElementById('portal'));
  }
    return response;
  },  (error)=> {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    REQUEST_COUNT =0;
    ReactDOM.render (<LoaderComponent isLoader={false}></LoaderComponent> , document.getElementById('portal'));
    return Promise.reject(error);
  });

export default axiosInstance;