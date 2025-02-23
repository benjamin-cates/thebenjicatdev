import "../style/project.css";
import React from "react";
import { useParams } from "react-router";
import { Section } from "../componenents/Section";
import { Video } from "../componenents/Video";
import { List } from "../componenents/List";
import { Carousel } from "../componenents/Carousel";
import { Links } from "../componenents/Links";
import { Header } from "../componenents/Header";

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

const AntLogic: React.FC = (_props: {}) => {
    return <TwoColumn
        title="Ant Logic"
        id="ant_logic"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    AntLogic is a complex logic gate puzzle game built to
                    enhance students' understanding of boolean logic.

                    Example puzzles include simple puzzles that teach
                    concepts like DeMorgan's law and functional completeness,
                    to intricate puzzles that require more advanced knowledge
                    of boolean functions.
                    Collaborated on this project at IrvineHacks 2024 with <a href="https://github.com/YKawesome">Yousef Khan</a> and <a href="https://github.com/Podskio">Jackson Podgorski</a>.
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
            <List key={3} type="My Contributions"
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
                    During my time in Linear Algebra, I found it was easy to make mistakes while
                    reducing matrices. I wanted to create a tool that would help others learn
                    the algorithm for row reducing a matrix and help catch mistakes. The result is Matrix Assistant.
                    It's a web app that assists you in solving a matrix with different
                    difficulty levels. It was my first project built with TypeScript and React,
                    so it was also a big learning experience.
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
                    Group project made at Friday Night Lab to simulate charges and conductors in the electric field. Wrote a
                    document in LaTeX describing all of the math necessary, such as derivations of voltage formulae from
                    integrating Coulomb's Law, Linear Algebra-based solution to create an efficient conductor simulation, and
                    calculations of torque. Special thanks to Dr. Quinn MacPherson for helping with the theory.

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
                    Completed all 25 days of <a href="https://adventofcode.com/2023">Advent of Code 2023</a>
                    in order to build skills in the Rust programming language and
                    algorithmic thinking. All solutions are my own work and were done
                    on the day the problem was released or the day after.
                    Used my own library <a href="https://github.com/benjamin-cates/astro_nalgebra">astro_nalgebra</a>
                    to solve day 24 using arbitrary precision arithmetic and linear algebra to narrow down an exact solution
                    without floating point errors.
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

const PyhaAnalyzer: React.FC = (_props: {}) => {
    return <TwoColumn
        title="Pyha Analyzer"
        id="pyha_analyzer"
        left={[
            <Section key={1} type="Description" content={
                <p className="project_spiel">
                    PyHa Analyzer is a bird call classification system that I helped develop at UC San Diego
                    as a part of the Engineers for Exploration research cohort of Summer 2023.
                    It uses multiple different convolutional neural networks on audio spectrograms to
                    classify bird calls by species. Project is in collaboration with the San Diego Zoo
                    Wildlife Alliance.
                </p>
            }></Section>,
            <List key={2} type="Contributions"
                list={[
                    "Documented and set up three AWS EC2 instances to train ML models",
                    "Implemented pseudo-labeling to fix domain shift problem",
                    "Wrote CSV formatting code to standardize varying file formats",
                    "Compare different techniques to chunk long audio data into short clips",
                    "Developed testing procedures to compare different preprocessing techniques",
                    "Wrote utilty to visually compare augmentation techniques",
                ]}
            ></List>,
        ]}
        right={[
            <Video key={3} title="2023 E4E Summer Projects Webcast" url="https://www.youtube.com/embed/SlNWh68qTh0?start=4043"></Video>,
            <List key={4} type="Technologies Used"
                list={["Python", "PyTorch", "Pands, Numpy, and Matplotlib", "Amazon Web Services", "Anaconda"]}
            ></List>,
            <Links key={5} github="https://github.com/UCSD-E4E/acoustic-multiclass-training" try="https://benjamin-cates.github.io/matrix_assistant" other={[["UCSD Engineers for Exploration", "https://e4e.ucsd.edu/news-and-updates/2023-summer-research-students"]]}></Links>
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
                    The topographic sand map is a real-time interactive demonstration of topography lines.
                    The table uses the Microsoft Kinect viewer to create a height map of the sand 30 times per
                    second, which is then sent through processing filters that create a layered topographic map.
                    I displayed it at the <b>Geomatics Engineering Conference</b> in Fresno.
                    I started on the project when another team had been working on it for two years.
                    The mechanism was ready but there was no code to run it.
                    I adopted the project by myself and wrote a working Unity program within 5 months.
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
                    "Features of Calculus",
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
        <Header></Header>
        <div>
            {name == "ant_logic" && <AntLogic></AntLogic>}
            {name == "aoc" && <AOC></AOC>}
            {name == "ball_blitz" && <BallBlitz></BallBlitz>}
            {name == "interactive_em" && <InteractiveEM></InteractiveEM>}
            {name == "pyha_analyzer" && <PyhaAnalyzer></PyhaAnalyzer>}
            {name == "topographic_sand_map" && <TopographicSandMap></TopographicSandMap>}
            {name == "matrix_assistant" && <MatrixAssistant></MatrixAssistant>}
            {name == "xprt_calc" && <XprtCalc></XprtCalc>}
        </div>
    </>;
};


export { Project };