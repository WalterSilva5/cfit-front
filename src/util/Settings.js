// localhost
//export const serverAddress = 'http://localhost/api-v1/';

// remote host

let url = ""

if (process.env.NODE_ENV === 'production') {
    url = 'https://carvalhosfit-api.herokuapp.com/api-v1/'
} else {
    url = 'http://localhost/api-v1/'
}

export const serverAddress = url;

//export const serverAddress = 'https://carvalhosfit-api.herokuapp.com/api-v1/'
