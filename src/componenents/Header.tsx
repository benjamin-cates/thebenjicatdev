import React from "react";
import { Link } from "react-router";

const Header: React.FC = (_props: {}) => {
    return <header>
        <div id="header_name">
            <img id="pfp" src="/images/pfp.jpg" alt="Profile picture" />
            <span>
                <span id="name">Benjamin Cates</span>
                <span id="pronouns">he/him</span>
                <span id="location">Anaheim, CA</span>
            </span>
        </div>
        <div className="switcher">
            <Link to="/crafts">🧶 Crafts</Link>
            <Link to="/">🧑‍💻 Code</Link>
        </div>
    </header>;
}

export { Header };