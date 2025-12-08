import React, { useEffect } from "react";
import { Header } from "../componenents/Header";

const NotFound: React.FC = (_props: {}) => {
    useEffect(() => {
        const metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        metaRobots.content = 'noindex';
        document.head.appendChild(metaRobots);
        return () => metaRobots.remove();
    })
    return <>
        <Header></Header>
        <p>404: URL not found</p>
        <p><a href="/sitemap">View the sitemap</a></p>
    </>;
}

export { NotFound };