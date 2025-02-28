import React from "react";

interface Props {
    src: string,
    alt: string,
}
const Photo: React.FC<Props> = (props: Props) => {
    return <section className="flex_item">
        <img src={props.src} alt={props.alt}></img>
    </section>;
}

export { Photo };