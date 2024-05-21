import axios from "axios";
import {apiKey} from '../constants'

// endpoints
const apiBaseURl = 'https://api.themoviedb.org/3'
const trendingEndpoints = `${apiBaseURl}/trending/all/day?api_key=${apiKey}`
const upcommingEndpoints = `${apiBaseURl}/movie/upcoming?api_key=${apiKey}`
const topratedEndpoints = `${apiBaseURl}/movie/top_rated?api_key=${apiKey}`

const apicall = async (endpoint, params) => {
    const options = {
        method : 'GET',
        url : endpoint,
        params : params? params: {}
    }

    try{
        const response = await axios.request(options)
        return response.data;

    }catch(error){
        console.log('error',error)
        return {}
    }
}

export const fetchtrendingdata = () => {
    return apicall(trendingEndpoints)
}
export const fetchupcommingdata = () => {
    return apicall(upcommingEndpoints)
}
export const fetchtoprateddata = () => {
    return apicall(topratedEndpoints)
}

