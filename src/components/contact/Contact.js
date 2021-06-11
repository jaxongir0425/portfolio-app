import React, {Component} from 'react';
import "./ContactStyle.css";
import ContactItem from "./items/ContactItem";
import Title from "../Title";
import phone from "../../img/phone.svg";
import email from "../../img/emailme.svg";
import location from "../../img/location.svg";

class Contact extends Component {
    render() {
        return (
            <>

                <div className="title">
                    <Title title={"Contact"} span={"Contact"}/>
                </div>
                <div className="ContactPage">
                    <div className="map-sect">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2448.8650908763925!2d69.21501723394798!3d41.29707195472028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1622211975868!5m2!1suz!2s"
                            width={"500"} height={"500"} style={{border: 0}}
                            frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"
                        />
                    </div>
                    <div className="contact-sect">
                        <ContactItem icon={phone} text={"+998 99 721 34 66"}
                                     text1={"+998 95 001 01 84"} title={"Phone Number "}
                        />
                        <ContactItem icon={email} text1={"github.com/jaxongir0425"} text={"t.me/SuperGrand"} title={"Telegram and Github "}/>
                        <ContactItem icon={location} text={"Tashkent"} title={"Address "}/>
                    </div>
                </div>

            </>
        );
    }
}

export default Contact;