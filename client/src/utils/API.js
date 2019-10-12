const axios = require('axios');

const API = {
    getBooksExternal: query => {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '&maxResults=40');
    },

    addToCollection: book => {
        return axios.post(`${window.location.origin}/api/new`, book)
    },

    removeFromCollection: id => {
        return axios.post(`${window.location.origin}/api/delete/${id}`);
    },

    getCollection: () => {
        return axios.get(`${window.location.origin}/api/`)
    }
}

export default API;