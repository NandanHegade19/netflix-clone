import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';
function Banner() {

    const [ bannerMovie, setBannerMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            //select movies from netflix originals
            const request = await axios.get(requests.fetchNetflixOriginals);
            //select one movie randomly from above array and set in banner
            setBannerMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);

    return (
        <header className = "banner" style = {{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className = "banner__contents">
                <h1 className = "banner__movietitle">{bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}</h1>
                <div className = "banner__buttons">
                    <button className = "banner__button">Play</button>
                    <button className = "banner__button">My List</button>
                </div>
                <h1 className = "banner__moviedescription" >{bannerMovie?.overview}</h1>
            </div>
            <h1 className = "banner__fadebotton"></h1>
        </header>
    )
}

export default Banner;
