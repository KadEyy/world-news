const constants = require('./constants.json');

const API = {
    url: process.env.NODE_ENV === 'development' ? constants.API_DEV : constants.API_BULID
}

export default API;