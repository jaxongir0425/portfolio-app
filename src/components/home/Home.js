import React, {Component} from 'react';
import "./HomeStyle.css"
import {faFacebook, faGithub, faInstagram, faTelegram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <>

                <div className="HomePage">
                    <header className="hero">
                        <h1 className="hero-text">
                            Hi, I am <span>Jaxongir Abdusalomov</span>
                        </h1>
                        <p className="h-sub-text">
                            I was admitted to Tashkent University of Information and Technology in 2018 and my first
                            step in programming started here and I am still programming, now I am a Full Stack
                            Programmer, in 2020 I learned programming in PDP, now HTML, CSS, JS, I learned to React JS,
                            Java, Spring Boot and other technologies, I created small and big projects! You can see my
                            projects at https://github.com/jaxongir0425/. My goal is to work in large, friendly teams
                            and to present myself as a personal firm in the future.
                        </p>
                        <div className="icons">
                            <a className="icon-holder" href="https://github.com/jaxongir0425/" target={"_blank"}>
                                <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                            </a>
                            <a className="icon-holder" href="https://youtube.com/" target={"_blank"}>
                                <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                            </a>
                            <a className="icon-holder" href="https://www.facebook.com/jaxongir0102/" target={"_blank"}>
                                <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                            </a>
                            <a className="icon-holder" href="https://www.instagram.com/jaxongir_0102/" target={"_blank"}>
                                <FontAwesomeIcon icon={faInstagram} className="icon insta"/>
                            </a>
                            <a className=" icon-holder" href="https://t.me/SuperGrand/" target={"_blank"}>
                                <FontAwesomeIcon icon={faTelegram} className="icon tg"/>
                            </a>
                        </div>
                    </header>
                </div>

            </>
        );
    }
}

export default Home;