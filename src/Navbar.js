import React, { useEffect, useState } from 'react';
import './Navbar.css';


function Navbar() {

    const [show, setShow] = useState(false);

    //black nav abr on scroll of 100px
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400){
                setShow(true);
            }else{
                setShow(false);
            }
        });
        return() => {
            window.removeEventListener("scroll", ()=>{});
        };
    }, []);

    return (
        <div className = {`navbar ${show && "navbar__black"}`}> 
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
            alt = "Netflix logo" className = "navbar__netflixlogo"/>
            <img src = "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
            alt = "user avatar" className = "navbar__useravatar"/>
        </div>
    )
}

export default Navbar;
