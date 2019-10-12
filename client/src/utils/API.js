const axios = require('axios');

const API = {
    getBooksExternal: query => {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query);
    }
}

export default API;