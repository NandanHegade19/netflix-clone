import React, {useState, useEffect} from 'react';
import './WelcomePage.css';
import {useHistory} from 'react-router-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function WelcomePage() {

    const history = useHistory();
    const [show, setShow] = useState(false);

    const signIn = (e) => {
        e.preventDefault();
        history.push('/homepage')
    }
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
        <div className = "welcomepage">
            <div className = {`navbar ${show && "navbar__black"}`}> 
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
                alt = "Netflix logo" className = "navbar__netflixlogo"/>
                <button onClick = {signIn} className = "signInbtn">Sign In</button>
            </div>
            
            <header className = "loginbanner" style = {{
                backgroundSize: "auto%",
                backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/2af1c55a-fdb6-4f2e-8e5b-63fd1c52f0b4/US-en-20201019-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
                backgroundPosition: "center center",
                height: "100"
                
            }}>
            <div className = "loginbanner__contents">
                <h1 className = "loginbanner__movietitle">Unlimited movies, TV shows, and more.</h1>
                <h1>Watch anywhere. Cancel anytime.</h1>
                <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
                <div className = "loginbanner__input">
                    <input type = "text" placeholder = "Email address" className = "email_input"/>
                    <button className = "emailbtn">Get Started</button>
                </div>
                <h1 className = "login_hint" >(Click on Sign In button) </h1>
            </div>
            <h1 className = "login__fadebotton"></h1>
        </header>
            <hr/>
                <div className = "second">
                    <div className = "second_left">
                        <h1>Enjoy on your TV.</h1>
                        <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                    </div>
                    <div className = "second_right">
                        <img className = "second_image" src = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt = "image2"/>
                    </div>
                
                </div>
                <hr/>
                <div className = "third">
                    <div className = "third_left">
                        <img className = "third_image" src = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt = "image2"/>
                    </div>
                    <div className = "third_right">
                        <h1>Enjoy on your TV.</h1>
                        <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                    </div>
                    
                
                </div>
                <hr/>
                <div className = "fourth">
                    <div className = "fourth_left">
                        <h1>Watch everywhere.</h1>
                        <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h3>
                    </div>
                    <div className = "fourth_right">
                        <img className = "fourth_image" src = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt = "image2"/>
                    </div>
                
                </div>
                <hr/>
                <div className = "faq">
                    <h1>Frequently Asked Questions</h1>
                    <div className = "accordians">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography >What is Netflix?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography className="">How much does Netflix cost?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography className= "">Where can I watch?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                        >
                        <Typography className="">How do I cancel?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                        >
                        <Typography className="">What can I watch on Netflix?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                    <div className = "loginbanner__contents2">
                        
                        <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
                        <div className = "loginbanner__input">
                            <input type = "text" placeholder = "Email address" className = "email_input"/>
                            <button className = "emailbtn">Get Started</button>
                        </div>
                        <h1 className = "login_hint" >(Click on Sign In button) </h1>
                    </div>
                </div>
        </div>
            
        
    )
}

export default WelcomePage
