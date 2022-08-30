import axios from "axios";

// const BASE_URL = "http://localhost:3005/api/";
const BASE_URL = "https://dream-interior-admin.herokuapp.com/api/"

// const user = JSON.parse(localStorage.getItem("persist:root")).user;
const user = JSON.parse(localStorage.getItem("persist:root")) !== null && JSON.parse(localStorage.getItem("persist:root")).loggedUser;
// console.log(`user ${JSON.parse(user).accessToken}`)

// const currUser = JSON.parse(user).loggedUser;
const TOKEN = JSON.parse(user)?.accessToken;
// const TOKEN = currUser?.accessToken;

console.log(`Token: ${TOKEN}`)

export const pubReq = axios.create({
    baseURL: BASE_URL,
})

export const userReq = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})