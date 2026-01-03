import "../style/project.css";
import React from "react";
import { useParams } from "react-router";
import { Section } from "../componenents/Section";
import { Video } from "../componenents/Video";
import { List } from "../componenents/List";
import { Carousel } from "../componenents/Carousel";
import { Links } from "../componenents/Links";
import { Header } from "../componenents/Header";
import { Photo } from "../componenents/Photo";

interface TwoColumnProps {
    title: string,
    id: string,
    left: React.ReactElement[],
    right: React.ReactElement[],
};

const TwoColumn: React.FC<TwoColumnProps> = (props: TwoColumnProps) => {
    return <>
        <h1 className="project_title">{props.title}</h1>
        <article id={props.id} className="project">
            <div className="flex_column">
                {props.left}
            </div>
            <div className="flex_column">
                {props.right}
            </div>
        </article>
    </>;
};

const PickyKitty: React.FC = (_props: {}) => {
    return <TwoColumn
        title="Picky Kitty"
        id="picky_kitty"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    The first cool morning of autumn has stripped Toby  of his motivation to get out of bed. Can you help him find it? But be careful—he's a PICKY KITTY!<br /><br />

                    Picky Kitty is a short, grid-based puzzle game where the objective is to satisfy a demanding
                    cat. <br /><br />

                    Developed in 72 hours, Picky Kitty earned #6 in Creativity and #12 in Enjoyment out of 141 entries in the <a href="https://itch.io/jam/cozy-fall-jam-2025">Cozy Fall Jam 2025</a> on Itch.
                </p>}></Section>,
            <Photo key={2} src="/images/picky_kitty.png" alt="Picky Kitty promotional image"></Photo>,
            <List key={3} type="Technologies Used" list={["KAPLAY", "TypeScript"]}></List>
        ]}
        right={[
            <Carousel key={1}
                src_list={[
                    "/project/pickykitty001.png",
                    "/project/pickykitty002.png",
                    "/project/pickykitty003.png",
                    "/project/pickykitty004.png",
                ]}
                name_list={["First level", "Toby's demands", "Kitchen", "Level 9"]}
                alts_list={["", "", "", ""]}
            ></Carousel>,
            <Links key={2} try="https://thebenjicat.itch.io/picky-kitty" other={[["View Cozy Fall Jam 2025 Submission", "https://itch.io/jam/cozy-fall-jam-2025/rate/3985432"]]}></Links>
        ]}
    ></TwoColumn>
};

const AntLogic: React.FC = (_props: {}) => {
    return <TwoColumn
        title="Ant Logic"
        id="ant_logic"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    AntLogic is a complex logic gate puzzle game built to
                    enhance understanding of boolean logic.<br />
                    Puzzles range from simple lessons on Demorgan's law to challenges
                    testing true understanding of boolean functions.

                    Developed at IrvineHacks 2024 with <a href="https://github.com/YKawesome">Yousef Khan</a> and <a href="https://github.com/Podskio">Jackson Podgorski</a> in 48 hours.
                </p>
            }></Section>,
            <Video key={2} title="AntLogic (IrvineHacks 2024)" url="https://www.youtube.com/embed/cO8FiEcALbw"></Video>,
            <List key={3} type="Technologies Used"
                list={["Rust (Actix HTTP Server)", "TypeScript", "React", "React Spring", "React Flow", "Figma", "Firebase auth"]}
            ></List>,
        ]}
        right={[
            <Carousel key={1}
                src_list={[
                    "/project/antlogic000.webp",
                    "/project/antlogic001.webp",
                    "/project/antlogic002.webp",
                    "/project/antlogic003.webp",
                    "/project/antlogic004.webp",
                ]}
                alts_list={[
                    "Circuit solution for XOR v2",
                    "Front page",
                    "Puzzles list",
                    "Library page for XOR gate",
                    "Sign up page"
                ]} name_list={["", "", "", "", ""]}></Carousel>,
            <List key={2} type="Features"
                list={["Leaderboard", "User authentication system", "Logic gate library", "Animated components"]}
            ></List>,
            <List key={3} type="My Contribution"
                list={["Backend auth and leaderboard", "SVG component designs", "Circuit evaluation algorithm", "Puzzle prompts", "Page styling"]}
            ></List>,
            <Links key={4} github="https://github.com/benjamin-cates/ant_logic" try="https://ant-logic.thebenjicat.dev" other={[["View IrvineHacks 2024 Submission", "https://devpost.com/software/antlogic"]]}></Links>
        ]}
    ></TwoColumn>
};

const MatrixAssistant: React.FC = (_props: {}) => {
    return <TwoColumn
        title="MatrixAssistant"
        id="matrix_assistant"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    Inspired by my frustrations with minor arithmetic mistakes in linear algebra,
                    I developed Matrix Assistant to guide the row reduction process with error correction.
                    As my first foray using TypeScript and React, the development of Matrix Assistant taught me many of the technologies I use today.
                </p>
            }></Section>,
            <List key={2} type="Features"
                list={[
                    "Basic row operations",
                    "Dynamic matrix size",
                    "Fraction handling",
                    "Error detection and correction modes"
                ]}
            ></List>,
        ]}
        right={[
            <Video key={3} title="Matrix Assistant" url="https://www.youtube.com/embed/eI-OEsAi4yo"></Video>,
            <List key={4} type="Technologies Used"
                list={["TypeScript", "React"]}
            ></List>,
            <Links key={5} github="https://github.com/benjamin-cates/matrix_assistant/" try="https://benjamin-cates.github.io/matrix_assistant"></Links>
        ]}
    ></TwoColumn>
};


const InteractiveEM: React.FC = (_props: {}) => {
    return <TwoColumn
        title="Interactive EM"
        id="interactive_em"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    Developed at College of the Sequoias' <a href="https://fnlhub.com/">Friday Night Lab</a> with peers, Interactive EM solves complex equipotential diagrams and electric field vectors using a complete 2-dimensional simulation.<br />
                    We wrote the math behind Interactive EM in a LaTeX document to show how to optimize simulation with pre-solved complex integrals of Coulomb's Law. Realistic simulation of conductors uses a linear algebra based solution to solve for induced charges.<br />
                    Special thanks to Dr. Quinn MacPherson for helping with the theory.
                </p>
            }></Section>,
            <List key={2} type="Features"
                list={["Various charge and conductor shapes", "Live properties editor", "Equipotential lines", "Force and torque based physics engine"]}
            ></List>,
            <List key={3} type="Technologies Used"
                list={["TypeScript", "LaTeX", "HTML, CSS, and WebGL"]}
            ></List>,
        ]}
        right={[
            <Carousel key={4}
                src_list={[
                    "/images/interactive_em.webp",
                    "/project/interactive_em_001.webp",
                    "/project/interactive_em_003.webp",
                ]}
                alts_list={[
                    "Visualization of ring conductor with two dipole planes",
                    "Visualization of a ring conductor in a dipole plane",
                    "Visualization of two oppositely charged lines"
                ]}
                name_list={[
                    "Ring conductor within two dipole planes",
                    "Ring conductor in a dipole plane",
                    "Two oppositely charged lines"
                ]}></Carousel>,
            <Links key={5} github="https://github.com/benjamin-cates/Interactive-EM" try="https://benjamin-cates.github.io/Interactive-EM"></Links>
        ]}
    ></TwoColumn>
};

const AOC: React.FC = (_props: {}) => {
    return <TwoColumn
        title="Advent of Code"
        id="aoc"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    Solved all 25 daily mathematical challenges of both <a href="https://adventofcode.com/2023">Advent of Code 2023</a> and <a href="https://adventofcode.com/2024">2024</a> with efficient algorithms written in the Rust programming language. <br />

                    For day 24 of 2023, I wrote a Rust library to bind the arbitrary precision library <a href="https://docs.rs/astro-float/latest/astro_float/">astro_float</a> with the linear algebra library <a href="https://nalgebra.org/">nalgebra</a> by implementing the Float trait, solving the linear algebra problem with an exact solution beyond the precision of 64-bit floating point numbers.
                </p>
            }></Section>,
            <List key={2} type="Algorithms used"
                list={[
                    "Dijkstra's SSSP algorithm",
                    "Graph search algorithms",
                    "Dynamic programming",
                    "Memoization",
                ]}
            ></List>,
            <Links key={3} github="https://github.com/benjamin-cates/aoc/"></Links>
        ]}
        right={[
            <Section key={4} type="Personal Times" content={
                <table className="personal_times" style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "1rem",
                    padding: "1rem",
                    margin: "1rem",
                    borderCollapse: "collapse",
                }}>
                    <tr><th aria-hidden="true"></th><td colSpan={2}>Part1</td><td colSpan={2}>Part2</td><td></td></tr>
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Time</th>
                        <th scope="col">Rank</th>
                        <th scope="col">Time</th>
                        <th scope="col">Rank</th>
                        <th scope="col">Start time</th>
                    </tr>
                    <tr><td>25</td><td>02:58</td><td>3081</td><td>02:59</td><td>2572</td><td>00:00</td></tr>
                    <tr><td>24</td><td>00:31</td><td>480</td><td>02:15</td><td>964</td><td>00:00</td></tr>
                    <tr><td>23</td><td>01:17</td><td>2888</td><td>02:25</td><td>1740</td><td>00:54</td></tr>
                    <tr><td>22</td><td>02:05</td><td>2775</td><td>02:15</td><td>2217</td><td>00:40</td></tr>
                    <tr><td>21</td><td>00:12</td><td>1109</td><td>03:47</td><td>1807</td><td>00:00</td></tr>
                    <tr><td>20</td><td>01:37</td><td>2944</td><td>24hr+</td><td>12876</td><td>00:30</td></tr>
                    <tr><td>19</td><td>00:44</td><td>3017</td><td>01:19</td><td>1462</td><td>00:00</td></tr>
                    <tr><td>18</td><td>00:27</td><td>1429</td><td>03:09</td><td>3759</td><td>00:00</td></tr>
                    <tr><td>17</td><td>01:40</td><td>2343</td><td>02:15</td><td>2407</td><td>00:30</td></tr>
                    <tr><td>16</td><td>00:27</td><td>1358</td><td>00:33</td><td>1191</td><td>00:00</td></tr>
                    <tr><td>15</td><td>00:07</td><td>2449</td><td>00:31</td><td>2315</td><td>00:00</td></tr>
                    <tr><td>14</td><td>00:08</td><td>829</td><td>00:48</td><td>1732</td><td>00:00</td></tr>
                    <tr><td>13</td><td>01:38</td><td>6401</td><td>01:45</td><td>4673</td><td>00:00</td></tr>
                    <tr><td>12</td><td>01:51</td><td>6588</td><td>04:04</td><td>4039</td><td>00:00</td></tr>
                    <tr><td>11</td><td>16:43</td><td>35983</td><td>16:56</td><td>33954</td><td>16:28</td></tr>
                    <tr><td>10</td><td>00:45</td><td>2840</td><td>01:29</td><td>1516</td><td>00:00</td></tr>
                    <tr><td>09</td><td>02:13</td><td>12488</td><td>02:21</td><td>12147</td><td>01:53</td></tr>
                    <tr><td>08</td><td>00:11</td><td>2697</td><td>01:14</td><td>5930</td><td>00:00</td></tr>
                    <tr><td>07</td><td>00:48</td><td>5283</td><td>01:49</td><td>7686</td><td>00:00</td></tr>
                    <tr><td>06</td><td>01:12</td><td>13564</td><td>01:19</td><td>13019</td><td>00:45</td></tr>
                    <tr><td>05</td><td>00:19</td><td>1232</td><td>01:31</td><td>2992</td><td>00:00</td></tr>
                    <tr><td>04</td><td>01:42</td><td>18398</td><td>01:53</td><td>14031</td><td>01:26</td></tr>
                    <tr><td>03</td><td>14:12</td><td>60208</td><td>14:29</td><td>50082</td><td>13:55</td></tr>
                    <tr><td>02</td><td>16:34</td><td>85233</td><td>16:40</td><td>80910</td><td>15:58</td></tr>
                    <tr><td>01</td><td>13:17</td><td>104479</td><td>14:00</td><td>71691</td><td>12:48</td></tr>
                </table>
            }></Section>,
        ]}
    ></TwoColumn>
};

const BallBlitz: React.FC = (_props: {}) => {
    return <TwoColumn
        title="Ball Blitz"
        id="ball_blitz"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                </p>
            }></Section>,
        ]}
        right={[
            <Links key={2} github="https://github.com/benjamin-cates/ball_blitz"></Links>
        ]}
    ></TwoColumn>
};

//const TubeTastic: React.FC = (_props: {}) => {
//    return <TwoColumn
//        title="TubeTasTic"
//        id="tubetastic"
//        left={[
//            <Section key={1} type="Description" content={
//                <p className="project_spiel">
//                </p>
//            }></Section>,
//        ]}
//        right={[
//            <Links key={2} github="https://github.com/benjamin-cates/tubetastic"></Links>
//        ]}
//    ></TwoColumn>
//};

const SummerCampBrowser: React.FC = (_props: {}) => {
    return <TwoColumn
        title="Summer Camp Browser"
        id="summer_camp_browser"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    Built to help my students discover and apply to high school summer camps, Summer Camp Browser shows all the requirements and descriptions in a unified interface.
                </p>
            }></Section>,
            <List key={2} type="Features" list={[
                "Short summary of all essay requirements",
                "Unified interface of camp descriptions",
                "Collapsible track descriptions",
            ]}></List>
        ]}
        right={[
            <Photo key={3} alt="Summer Camp Browser interface" src="/public/project/summer_camp_browser.png"></Photo>,
            <Links key={4} github="https://github.com/benjamin-cates/summer_camp_browser/" try="https://benjamin-cates.github.io/summer_camp_browser/"></Links>
        ]}
    ></TwoColumn>
};

const ResumeExpress: React.FC = (_props: {}) => {
    return <TwoColumn
        title="ResumeExpress"
        id="resume_express"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    Quick, dyanamic resume editor with export to JSON and LaTeX.
                </p>
            }></Section>,
            <List key={2} type="Features" list={[
                "Short summary of all essay requirements",
                "Unified interface of camp descriptions",
                "Collapsible track descriptions",
            ]}></List>
        ]}
        right={[
            <Photo key={3} alt="Resume express example image" src="/public/project/resume_express.png"></Photo>,
            <Links key={4} github="https://github.com/benjamin-cates/resume_express" try="https://benjamin-cates.github.io/resume_express/"></Links>
        ]}
    ></TwoColumn>
};

const PyhaAnalyzer: React.FC = (_props: {}) => {
    return <TwoColumn
        title="Pyha Analyzer"
        id="pyha_analyzer"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    PyHa Analyzer is a bird call classification system under the University of California San Diego Engineers for Exploration research cohort.
                    In summer 2023, I worked at an NSF Research Experience for Undergraduates to accelerate development of PyHa analyzer. After 2 months of full-time research, our team of four presented our advancements to the San Diego Zoo Wildlife Alliance and the public.
                </p>
            }></Section>,
            <List key={2} type="My Contributions"
                list={[
                    "Documented and set up three AWS EC2 instances to train ML models",
                    "Implemented pseudo-labeling to fix domain shift problem",
                    "Wrote CSV formatting code to standardize varying file formats",
                    "Compared different techniques to chunk long audio into uniform length clips",
                    "Developed testing procedures to compare different preprocessing techniques",
                    "Wrote utilty to visually compare augmentation techniques",
                ]}
            ></List>,
        ]}
        right={[
            <Video key={3} title="2023 E4E Summer Projects Webcast" url="https://www.youtube.com/embed/SlNWh68qTh0?start=4043"></Video>,
            <List key={4} type="Technologies Used"
                list={["Python", "PyTorch", "Pandas, Numpy, and Matplotlib", "Amazon Web Services", "Anaconda", "Weights and Biases"]}
            ></List>,
            <Links key={5} github="https://github.com/UCSD-E4E/acoustic-multiclass-training" other={[["UCSD Engineers for Exploration", "https://e4e.ucsd.edu/news-and-updates/2023-summer-research-students"]]}></Links>
        ]}
    ></TwoColumn>
};

const TopographicSandMap: React.FC = (_props: {}) => {
    return <TwoColumn
        title="Topographic Sand Map"
        id="topographic_sand_map"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    After the previous team gave up on the project, I single-handedly developed the Topographic Sand Map at College of the Sequoias' <a href="https://fnlhub.com/">Friday Night Lab</a> to create a real-time interactive demonstration of topography lines. Using the Microsoft Kinect device, depth of each element on the table is calculated 30 times per second and processed through C# code and shaders to create a real time map.<br />

                    I displayed this project at California State University, Fresno's Geomatics Engineering Conference to both professionals and undergraduate students.
                </p>
            }></Section>,
            <List key={2} type="Technologies Used"
                list={["Unity with C#", "Shaderlab", "Microsoft Kinect"]}
            ></List>,
        ]}
        right={[
            <Carousel key={3}
                src_list={[
                    "/project/topo_000.webp",
                    "/project/topo_002.webp",
                    "/project/topo_001.webp",
                    "/project/topo_003.webp",
                    "/project/topo_004.webp",
                    "/project/topo_005.webp",
                ]}
                alts_list={[
                    "Table at Geomatics and Engineering Conference at CSU Fresno",
                    "Topographic sand map at the Tulare County Expand Your Horizons youth conference",
                    "Geographical designs on the table",
                    "Table in the dark",
                    "Mountains and lakes on the table",
                    "Dr. Ahn of CSU Freson using the table",
                ]}
                name_list={[
                    "Table at Geomatics and Engineering Conference at CSU Fresno",
                    "Table at the Expand Your Horizons youth conference",
                    "Geographical designs on the table",
                    "Table in the dark",
                    "Dr. Ahn of CSU Freson using the table",
                ]}></Carousel>,
            <List key={4} type="Features"
                list={["Alignment control system", "Different themes", "Contour lines"]}
            ></List>,
            <Links key={5} github="https://github.com/fnlHub/topographic-sand-map"></Links>
        ]}
    ></TwoColumn>
};

const XprtCalc: React.FC = (_props: {}) => {
    return <TwoColumn
        title="XprtCalc"
        id="xprt_calc"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    Advanced caculator designed for Calculus students. Supports parallel processing,
                    unit analysis, and complex numbers.
                </p>
            }></Section>,
            <List key={2} type="Features"
                list={["Basic row operations", "Dynamic matrix size", "Fraction handling", "Error detection and correction modes"]}
            ></List>,
            <List key={2} type="Features"
                list={[
                    "Wide array of built-in functions",
                    "Unit analysis",
                    "Complex numbers",
                    "Lambda functions",
                    "Vectors",
                    "Variable and function declaration",
                    "Syntax highlighting",
                    "100% Client-side",
                ]}
            ></List>,
        ]}
        right={[
            <Video key={2} title="Matrix Assistant" url="https://www.youtube.com/embed/eI-OEsAi4yo"></Video>,
            <List key={3} type="Technologies Used"
                list={[
                    "C++",
                    "JavaScript",
                    "WebAssembly",
                    "CMake",
                    "HTML/CSS",
                    "GNU Multi-Precision Library (GMP)",
                    "Linux terminal API",
                ]}
            ></List>,
            <Links key={4} github="https://github.com/benjamin-cates/XprtCalc" try="https://benjamin-cates.github.io/XprtCalc"></Links>
        ]}
    ></TwoColumn>
};

const Project: React.FC = (_props: {}) => {
    const params = useParams();
    const name = params.project_name;
    return <>
        <title>{"thebenjicat.dev | " + name}</title>
        <Header></Header>
        <div>
            {name == "ant_logic" && <AntLogic></AntLogic>}
            {name == "aoc" && <AOC></AOC>}
            {name == "ball_blitz" && <BallBlitz></BallBlitz>}
            {name == "interactive_em" && <InteractiveEM></InteractiveEM>}
            {name == "pyha_analyzer" && <PyhaAnalyzer></PyhaAnalyzer>}
            {name == "topographic_sand_map" && <TopographicSandMap></TopographicSandMap>}
            {name == "summer_camp_browser" && <SummerCampBrowser></SummerCampBrowser>}
            {name == "resume_express" && <ResumeExpress></ResumeExpress>}
            {name == "picky_kitty" && <PickyKitty></PickyKitty>}
            {name == "matrix_assistant" && <MatrixAssistant></MatrixAssistant>}
            {name == "xprt_calc" && <XprtCalc></XprtCalc>}
        </div>
    </>;
};


export { Project };