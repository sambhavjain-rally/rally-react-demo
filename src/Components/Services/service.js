import axios from 'axios';

const baseUrl = 'http://localhost:9000/scala/';

export function loginUser(userId) {
    return axios.get(baseUrl + 'login/' + userId).then(response => response.data).catch((error) => {
        alert("You are not authorized!")
    });
}

export function getDetails() {
    return axios.get(baseUrl + 'details').then(response => response.data).catch((error) => {
        alert("You are not authorized!")
    });
}

