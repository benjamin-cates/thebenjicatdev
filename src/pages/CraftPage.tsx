import React, { ReactElement } from "react";
import { useParams } from "react-router";
import { crafts_list } from "./crafts";
import { NotFound } from "./NotFound";
import { Header } from "../componenents/Header";
import ReactMarkdown from 'react-markdown';

const file_logos: { [key: string]: ReactElement } = {
    blend: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-181 240-296q-19-11-29.5-29T200-365v-230q0-22 10.5-40t29.5-29l200-115q19-11 40-11t40 11l200 115q19 11 29.5 29t10.5 40v230q0 22-10.5 40T720-296L520-181q-19 11-40 11t-40-11Zm0-92v-184l-160-93v185l160 92Zm80 0 160-92v-185l-160 93v184ZM80-680v-120q0-33 23.5-56.5T160-880h120v80H160v120H80ZM280-80H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm400 0v-80h120v-120h80v120q0 33-23.5 56.5T800-80H680Zm120-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80ZM480-526l158-93-158-91-158 91 158 93Zm0 45Zm0-45Zm40 69Zm-80 0Z" /></svg>,
    pdo: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360Zm120 320H200h280Zm0 80H240q-50 0-85-35t-35-85v-120h120v-560h600v361q-20-2-40.5 1.5T760-505v-295H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80Zm80 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" /></svg>,
    pdf: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" /></svg>,
    obj: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z" /></svg>,
    folder: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" /></svg>,
}

const CraftPage: React.FC = () => {
    const params = useParams();
    const link = params.craft_name;
    let craft = crafts_list[link!];
    if (typeof craft === 'undefined') {
        return <NotFound></NotFound>
    }
    return <>
        <title>{craft.name}</title>
        <Header></Header>
        <div className="craft_page">
            <h1>{craft.name}</h1>
            <div className="craft_images">
                {craft.feature_images.map((img, idx) => (
                    <img className="feature_image" src={img} key={idx}></img>

                ))}
            </div>
            <ReactMarkdown>{craft.spiel}</ReactMarkdown>
            <h1>Downloads</h1>
            <div className="downloads_list">
                {craft.files.map(({ name, drive, filetype, desc }) => {
                    return <div className="download_item" key={name}>
                        <div className="horizontal_flex">
                            <div>
                                <div className="file_name">{name}</div>
                                <div className="file_type">{filetype}</div>
                            </div>
                            <a className="download_button" href={drive}>{file_logos[filetype]}{filetype == "folder" ? "View" : "Download"}</a>
                        </div>
                        <ReactMarkdown>{desc}</ReactMarkdown>
                    </div>;
                })}
            </div>
            <ReactMarkdown>{craft.description}</ReactMarkdown>

        </div>
    </>;
};

export { CraftPage };