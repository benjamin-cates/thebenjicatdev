import React from "react";

interface Props {
    src_list: string[],
    name_list: string[],
    alts_list: string[],
}
const Carousel: React.FC<Props> = (props: Props) => {
    return <section className="flex_item project_photos">
        <h2 className="item_title">Photos</h2>
        <div className="photo_carousel">
            {props.src_list.map((src, i) => (
                <div className="photo" key={i}>
                    <img src={src} alt={props.alts_list[i]} /><br />
                    {props.name_list[i]}
                </div>))}
        </div>
        <div className="carousel_markers">
            {props.src_list.map((_, i) => (<span key={i}></span>))}
        </div>
    </section>;
}

export { Carousel };