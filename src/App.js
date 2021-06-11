import React, {useState} from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

function App() {

    const [navToggle, setNavToggle] = useState(false);

    const navClick = () => {
        setNavToggle(!navToggle);
    };

    return (
        <>

            <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
                <Navbar/>
            </div>
            <div className="nav-btn" onClick={navClick}>
                <div className="lines-1"/>
                <div className="lines-2"/>
                <div className="lines-3"/>
            </div>
            <div className="main-content">
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/portfolios" component={Portfolio}/>
                        <Route exact path="/blogs" component={Blog}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </div>

        </>
    );
}

export default App;
