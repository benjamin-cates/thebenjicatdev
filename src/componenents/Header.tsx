import React from "react";

const Header: React.FC = (_props: {}) => {
    return <header>
        <div id="header_name">
            <img id="pfp" src="/images/pfp.jpg" alt="Profile picture" />
            <span>
                <span id="name">Benjamin Cates</span>
                <span id="pronouns">he/him</span>
                <span id="location">Pomona, CA</span>
            </span>
        </div>
        <div>
            <a href="/sitemap">/sitemap</a>
        </div>
    </header>;
}

export { Header };