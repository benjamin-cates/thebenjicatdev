import React from "react";
import { Link, useLocation } from "react-router";
import { logos } from "./Logos";

const Header: React.FC = (_props: {}) => {
    let location = useLocation();
    if (location.pathname.includes("crafts")) {
        return <header>
            <div id="header_name">
                <a href="/crafts">
                    <img id="craft_pfp" src="/images/thebenjicraft.png" alt="The Benji Crafts profile picture" />
                </a>
                <span>
                    <span id="name">The Benji Crafts</span>
                    <span id="pronouns"><a href="https://instagram.com/the.benji.crafts">Instagram</a></span>
                </span>
            </div>
            <div className="switcher">
                {location.pathname == "/crafts" &&
                    <>
                        <Link to="/">🧑‍💻 Code</Link>
                    </>
                    || <>
                        <Link to="/crafts">{logos.home}</Link>
                    </>
                }
            </div>
        </header>;
    }
    else {
        return <header>
            <div id="header_name">
                <img id="portrait_pfp" src="/images/pfp.jpg" alt="Profile picture" />
                <span>
                    <span id="name">Benjamin Cates</span>
                    <span id="pronouns">he/him</span>
                    <span id="location">Anaheim, CA</span>
                </span>
            </div>
            <div className="switcher">
                {location.pathname == "/" &&
                    <>
                        <Link to="/crafts">🧶 Crafts</Link>
                    </>
                    || <>
                        <Link to="/">{logos.home}</Link>
                    </>
                }
            </div>
        </header>;
    }
}

export { Header };