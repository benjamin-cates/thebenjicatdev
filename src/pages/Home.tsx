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
    link?: string,
    try?: string,
}

const HomeElement: React.FC<ProjectProps> = (props: ProjectProps) => {
    return <div className="experience">
        <div className="experience_title"><span>{props.title}</span>{props.try && <a className="try_button" href={props.try}>{"Try"}</a>}</div>
        <div className="experience_image"><img src={props.image} alt={props.alt} /></div>
        <div className="experience_spiel">{props.spiel}</div>
        {props.link && <div className="experience_see_more"><a href={"project/" + props.link}>See more...</a></div>}
    </div>

}

const Home: React.FC = (_props: {}) => {
    return <>
        <Header></Header>
        <div id="title">
            <div id="title_inner">
                <ThebenjicatAnimation></ThebenjicatAnimation>
                <div id="title_description">Hi! I am a hobbyist coder and professional college consultant</div>
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
                <div id="itch">
                    <a href="https://thebenjicat.itch.io">{logos.itch} itch.io</a>
                </div>
            </div>
        </div>
        <div id="experience_wrapper">
            <div className="experience_column">
                <HomeElement
                    title="Picky Kitty"
                    alt="Picky Kitty promotional logo"
                    image="/images/picky_kitty.png"
                    link="picky_kitty"
                    try="https://thebenjicat.itch.io/picky-kitty"
                    spiel="Toby lost his motivation to get out of bed. Developed in 72 hours for the Cozy Fall Jam 2025 on itch.io. Earned #6 in Creativity and #12 in Enjoyment out of 141 projects."
                ></HomeElement>
                <HomeElement
                    title="AntLogic"
                    alt="Anteater with logic gates background"
                    image="/images/ant_logic.webp"
                    link="ant_logic"
                    try="https://ant-logic.thebenjicat.dev"
                    spiel="AntLogic is a complex logic gate puzzle game built to enhance understanding of boolean logic. Puzzles range from simple lessons on Demorgan's law to challenges testing true understanding of boolean functions. Developed at IrvineHacks 2024 with Yousef Khan and Jackson Podgorski in 48 hours."
                ></HomeElement>
                <HomeElement
                    title="Summer Camp Browser"
                    alt="Summer camp browser interface with UCI COSMOS"
                    image="/project/summer_camp_browser.png"
                    link="summer_camp_browser"
                    try="https://benjamin-cates.github.io/summer_camp_browser"
                    spiel="Built to help my students discover and apply to high school summer camps, Summer Camp Browser shows all the requirements and descriptions in a unified interface."
                ></HomeElement>
                <HomeElement
                    title="Resume Express"
                    alt="Resume express example image"
                    image="/project/resume_express.png"
                    link="resume_express"
                    try="https://benjamin-cates.github.io/resume_express"
                    spiel="Quick, dyanamic resume editor with export to JSON and LaTeX."
                ></HomeElement>
                <HomeElement
                    title="PyHa Analyzer"
                    alt="Screaming Piha"
                    image="/images/piha.jpg"
                    link="pyha_analyzer"
                    spiel="A PyTorch-powered bird call classification system from the University of California San Diego Engineers For Exploration research cohort. In summer 2023, I worked at an NSF Research Experience for Undergraduates to accelerate development of PyHa Analyzer. After 2 months of full-time research, our team of four presented our advancements to the San Diego Zoo Wildlife Alliance and the public."
                ></HomeElement>
            </div>
            <div className="experience_column">
                <HomeElement
                    title="Interactive EM"
                    alt="Electric field visualization"
                    image="/images/interactive_em.webp"
                    link="interactive_em"
                    try="https://benjamin-cates.github.io/Interactive-EM"
                    spiel="Developed at Friday Night Lab with peers, Interactive EM solves complex equipotential diagrams and electric field vectors using a complete 2-dimensional simulation."
                ></HomeElement>
                <HomeElement
                    title="Rogue Snacks"
                    alt="Rogue Snacks promotional logo"
                    image="/images/roguesnacks.png"
                    try="https://thebenjicat.itch.io/rogue-snacks"
                    spiel="Fight endless waves of corrupted ballgame food. Developed in 72 hours for the ScoreSpace Jam #35 on itch.io."
                ></HomeElement>
                <HomeElement
                    title="Matrix Assistant"
                    alt="Matrix entry interface"
                    image="/images/matrix_assistant.png"
                    link="matrix_assistant"
                    spiel="Inspired by my frustrations with minor arithmetic mistakes in linear algebra, I developed Matrix Assistant to guide the row reduction process with error correction."
                    try="https://benjamin-cates.github.io/matrix_assistant"
                ></HomeElement>
                <HomeElement
                    title="Topographic Sand Map"
                    alt="Topographic sand map"
                    image="/images/topo_map.webp"
                    link="topographic_sand_map"
                    spiel="After the previous team abandonded this project, I single-handedly developed the Topographic Sand Map at College of the Sequoias' Friday Night Lab to create a real-time interactive demonstration of topography lines. Using the Microsoft Kinect device, depth of each element on the table is calculated 30 times per second and processed through C# code and shaders to create a real time map."
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