import "../style/index.css";
import React from "react";
import { logos } from "../componenents/Logos";
import { ThebenjicatAnimation } from "../componenents/ThebenjicatAnimation";
import { Header } from "../componenents/Header";

interface ProjectProps {
    title: string,
    image: string,
    alt: string,
    spiel: string,
    link: string,
}

const HomeElement: React.FC<ProjectProps> = (props: ProjectProps) => {
    return <div className="experience">
        <div className="experience_title">{props.title}</div>
        <div className="experience_image"><img src={props.image} alt={props.alt} /></div>
        <div className="experience_spiel">{props.spiel}</div>
        <div className="experience_see_more"><a href={"project/" + props.link}>See more...</a></div>
    </div>

}

const Home: React.FC = (_props: {}) => {
    return <>
        <Header></Header>
        <div id="title">
            <div id="title_inner">
                <ThebenjicatAnimation></ThebenjicatAnimation>
                <div id="title_description">Hi! I am a software developer with a passion for web development</div>
            </div>
            <div id="contact_info">
                <div id="github">
                    <a href="https://github.com/benjamin-cates/">{logos.github} Github</a>
                </div>
                <div id="linkedin">
                    <a href="https://www.linkedin.com/in/the-benji-cat/">{logos.linkedin} LinkedIn</a>
                </div>
                <div id="youtube">
                    <a href="https://www.youtube.com/channel/UCWGv2wRpcYeKC7-0XTRW5_A">{logos.youtube} YouTube</a>
                </div>
            </div>
        </div>
        <div id="experience_wrapper"> <div id="experience">
            <HomeElement
                title="AntLogic"
                alt="Anteater with logic gates background"
                image="/images/ant_logic.webp"
                link="ant_logic"
                spiel="Educational tool for learning logic gates built at IrvineHacks 2024"
            ></HomeElement>
            <HomeElement
                title="PyHa Analyzer"
                alt="Screaming Piha"
                image="/images/piha.jpg"
                link="pyha_analyzer"
                spiel="PyTorch machine learning on bird audio. Developed on a team of four at a research lab at UC San Diego over summer 2023"
            ></HomeElement>
            <HomeElement
                title="Matrix Assistant"
                alt="Matrix entry interface"
                image="/images/matrix_assistant.jpg"
                link="matrix_assistant"
                spiel="React app to help students learn matrix row reduction in linear algebra"
            ></HomeElement>
            <HomeElement
                title="Topographic Sand Map"
                alt="Topographic sand map"
                image="/images/topo_map.webp"
                link="topographic_sand_map"
                spiel="Real-time topographic table made with a depth sensor and a projector"
            ></HomeElement>
            <HomeElement
                title="Interactive EM"
                alt="Electric field visualization"
                image="/images/interactive_em.webp"
                link="interactive_em"
                spiel="Web application used to visually simulate the electric field for education"
            ></HomeElement>
            <HomeElement
                title="Advent of Code"
                alt="advent of code logo"
                image="/images/advent_of_code.jpeg"
                link="aoc"
                spiel="Completed 25 days of complex coding problems in Rust"
            ></HomeElement>
        </div>
        </div>
    </>;

};

export { Home };