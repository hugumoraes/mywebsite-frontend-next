import axios from 'axios';

const strapi = axios.create({
  baseURL: 'https://mywebsite-strapi-backend.herokuapp.com/',
});

export default strapi;
