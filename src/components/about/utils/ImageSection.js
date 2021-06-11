import React from 'react';
import about from "../../../img/about1.png"

function ImageSection() {
    return (
        <>

            <div className="ImageSection">
                <div className="img">
                    <img src={about} alt="About Image"/>
                </div>
                <div className="about-info">
                    <h4>I am <span>Jaxongir Abdusalomov</span></h4>
                    <h6 className="about-text">
                        I am Abdusalomov Jaxongir, 21 years old, my interest in programming started at the age of 14
                        in Pascal programming language. I am mainly interested in data structure and algorithms, my
                        goals are self-study and big projects using new technologies. At the current time, I am
                        Spring Boot vs ReactJS Web Full Stack developer!!!
                    </h6>
                    <div className="about-details">
                        <div className="left-section">
                            <h6>Full Name</h6>
                            <h6>Age</h6>
                            <h6>Languages</h6>
                            <h6>Address</h6>
                            <h6>Country</h6>
                        </div>
                        <div className="right-section">
                            <h6> : Jaxongir Abdusalomov</h6>
                            <h6> : 21 </h6>
                            <h6> : English, Uzbek, Russian</h6>
                            <h6> : Tashkent</h6>
                            <h6> : Uzbekistan</h6>
                        </div>
                    </div>
                    <button className="btn"><h5>
                        <a className={"resume-link"} target={"_blank"}
                           href={"https://github.com/jaxongir0425/portfolio-app/blob/main/Jaxongir's%20RESUME.pdf"}>
                            My CV is on github</a></h5></button>
                </div>
            </div>

        </>
    );
}

export default ImageSection;