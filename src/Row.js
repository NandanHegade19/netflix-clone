import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const poster_imageURL = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchURL, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    const [movieTrailerURL, setMovieTrailerURL] = useState("");

    //load movie list info for each catagories from TMDB using API
    useEffect(() => {

        async function fetchData(){
            const request = await axios.get(fetchURL); //baseUrl+fetchURL
            //console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURL]); //run once for different URL for each row loads. fetchURL is coming from props.

    //youtube player "options"
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const getTrailerURL = (eachMovie) => {
        
        if(movieTrailerURL){ //if already open
            console.log("Inside if")
            setMovieTrailerURL("");
        }else{
            console.log("eachMovie?.name: ",eachMovie)
            movieTrailer(eachMovie?.original_title || eachMovie?.name || "")
                .then((url) => {
                    console.log("hello then url",url)
                    const urlParams = new URLSearchParams(new URL(url).search); //new URL gets everything after ? in video url
                    //console.log("url prams:",urlParams);
                    setMovieTrailerURL(urlParams.get("v")); //gets things after "v" in url
                })
                .catch((error) => console.log("req error:",error));
        }
    };

    return (
        <div className = "row" >
            <h2>{title}</h2>
            {/**Container to show movie list */}
            <div className = "row__movielist" >
                {movies.map(eachMovie => (
                    <img key={eachMovie.id} onClick = {() => getTrailerURL(eachMovie)} 
                    src = {`${poster_imageURL}${isLargeRow ? eachMovie.poster_path : eachMovie.backdrop_path}`} alt={eachMovie.name} 
                    className = {`row__movieposter ${isLargeRow && "row__movieposter_large"}`}/>
                ))}
            </div>
            { movieTrailerURL && <YouTube videoId = {movieTrailerURL} opts = {opts}/>}
        </div>
    )
}

export default Row;