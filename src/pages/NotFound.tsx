import React from "react";
import { Header } from "../componenents/Header";

const NotFound: React.FC = (_props: {}) => {
    return <>
        <Header></Header>
        <p>404: URL not found</p>
        <p><a href="/sitemap">View the sitemap</a></p>
    </>;
}

export { NotFound };