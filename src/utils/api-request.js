import axios from "axios";

export const Img_Base_Url = "https://image.tmdb.org/t/p/w500";
export const Base_Url = "https://api.themoviedb.org/3";

export const Requests = {
    Popular:`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    Top_Rated: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    Upcoming: `/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    Now_Playing: `/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    discover_tv: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    discover_movie: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    // discover_movie: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    // discover_movie: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
}
 

export const getContent = async(REQUEST) => {
    try{
        const response = await axios.get(`${Base_Url}${REQUEST}`)
        return response?.data
    }catch (error) {
        console.log(error);
        throw error;
    }
    
   

}