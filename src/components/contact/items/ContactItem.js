import React from 'react';

function ContactItem({icon, text, text1, title}) {
    return (
        <>

            <div className="ContactItem">
                <div className="contact">
                    <img src={icon} alt="Contact Icons"/>
                    <div className="right-items">
                        <h6>{title}</h6>
                        <p>{text}</p>
                        <p>{text1}</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ContactItem;