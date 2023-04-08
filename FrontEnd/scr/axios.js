import axios, * as others from 'axios';
const instance = axios.create({
    baseURL: "https://salman-datingapp.herokuapp.com"
})
export default instance
