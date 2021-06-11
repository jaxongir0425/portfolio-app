import React, {useState} from 'react';
import "./PortfolioStyle.css";
import Title from "../Title";
import Categories from "./utils/Categories";
import MenuItems from "./utils/MenuItems";
import portfolios from "./items/allPortfolios";

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function Portfolio() {

    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if (category === "All") {
            setMenuItems(portfolios);
            return;
        }
        const filterData = portfolios.filter((item) => {
            return item.category === category;
        });
        setMenuItems(filterData);
    }

    return (
        <>

            <div className="PortfolioPage">
                <div className="title">
                    <Title title={"Portfolios"} span={"Portfolios"}/>
                </div>
                <div className="portfolios-data">
                    <Categories filter={filter} categories={categories}/>
                    <MenuItems menuItems={menuItems}/>
                </div>
            </div>

        </>
    );
}

export default Portfolio;