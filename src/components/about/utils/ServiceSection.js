import React, {useState} from 'react';
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ServiceSection({image, title, text, utils}) {

    const [status, setStatus] = useState(true);

    const accordion = () => {
        setStatus(!status);
    };

    return (
        <>

            <div className="ServiceSection">
                <div className="service">
                    <div className="service-content">
                        <img src={image} alt="Design"/>
                        <h5 className="s-title">{title}</h5>

                        <button className="accordion1" onClick={accordion}>
                            <h2>{utils} <FontAwesomeIcon icon={faAngleDown}/></h2>
                        </button>
                        <p style={{display: status ? "none" : "block"}} className="s-text">{text}</p>

                    </div>
                </div>
            </div>

        </>
    )
        ;
}

export default ServiceSection;