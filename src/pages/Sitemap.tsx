import React from "react";
import { Header } from "../componenents/Header";


const STYLE = {
    link: {
        minWidth: "10em",
        display: "inline-block",
    },
}

const Sitemap: React.FC = (_props: {}) => {
    return <>
        <Header></Header>
        <div className="page">
            <h1><a href='/'>thebenjicat.dev</a> sitemap</h1>
            <ul>
                <li><a href='/' style={STYLE.link}>/home</a></li>
                <li><a href='/sitemap' style={STYLE.link}>/sitemap</a></li>
                <li><span style={STYLE.link}>/project</span></li>
                <ul style={{ paddingTop: "0" }}>
                    <li> <a href='/project/ant_logic' style={STYLE.link}>/project/ant_logic</a> </li>
                    <li> <a href='/project/aoc' style={STYLE.link}>/project/aoc</a> </li>
                    <li> <a href='/project/ball_blitz' style={STYLE.link}>/project/ball_blitz</a> </li>
                    <li> <a href='/project/interactive_em' style={STYLE.link}>/project/interactive_em</a> </li>
                    <li> <a href='/project/matrix_assistant' style={STYLE.link}>/project/matrix_assistant</a> </li>
                    <li> <a href='/project/pyha_analyzer' style={STYLE.link}>/project/pyha_analyzer</a> </li>
                    <li> <a href='/project/topographic_sand_map' style={STYLE.link}>/project/topographic_sand_map</a> </li>
                </ul>
            </ul>
            <h1>Other Endpoints</h1>
            <ul>
                <li><a href="https://ant-logic.thebenjicat.dev" style={{ ...STYLE.link, minWidth: "20em" }}>ant-logic.thebenjicat.dev</a><span className="desc">AntLogic</span></li>
            </ul>

        </div>
    </>;
}

export { Sitemap };