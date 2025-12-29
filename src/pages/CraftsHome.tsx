import type React from "react";
import { Link } from "react-router";
import { Header } from "../componenents/Header";

import "../style/crafts.css";
import { crafts_list } from "./crafts";

const CraftsHome: React.FC<{}> = (_props: {}) => {
    let list = [];
    for (let key in crafts_list) {
        list.push({ link: key, ...crafts_list[key] });
    }
    list.sort((a, b) => a.publish_date < b.publish_date ? 1 : -1);
    return <>
        <Header></Header>
        <div className="craft_page_list">
            {
                list.map(({ link, feature_images, name }) => {
                    return <div key={link} className="craft_page_card">
                        <Link to={"/crafts/" + link}>
                            <img className="craft_home_img" alt={name} src={feature_images[0]}></img>
                        </Link>
                    </div>;
                })
            }
        </div>
    </>;
};

export { CraftsHome };