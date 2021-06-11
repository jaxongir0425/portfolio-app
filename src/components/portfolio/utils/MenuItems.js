import React from 'react';

function MenuItems({menuItems}) {
    return (
        <>

            <div className="MenuItems">
                {
                    menuItems.map((item) => {
                        return <div className="portfolio" key={item.id}>
                            <div className="image-data">
                                <img src={item.image} alt="Portfolio Image"/>
                                <ul className="hover-items">
                                    <li>
                                        <a target={"_blank"} className={"link"} href={item.link1}>{item.icon1}</a>
                                        <a target={"_blank"} className={"link"} href={item.link2}>{item.icon2}</a>
                                    </li>
                                </ul>
                            </div>
                            <h5>{item.title}</h5>
                            <p>Placeholder paragraph</p>
                        </div>
                    })
                }
            </div>

        </>
    );
}

export default MenuItems;