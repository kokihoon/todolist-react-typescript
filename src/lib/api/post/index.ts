import axios from 'axios';

const API_URL = 'https://yts.mx/api/v2/list_movies.json?limit=50'

export const SendUrl = async(url:string, method:'GET')=> {
    let re;

    try {
        re = await axios({
            method,
            url,
        });
    } catch (err) {
        console.log(err);
    }

    return re;
}

export const getMovieList = async () => {
    const re = await SendUrl(`${API_URL}`, 'GET');
  
    return re;
  };
  