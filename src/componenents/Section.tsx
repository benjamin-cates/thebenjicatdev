import React from "react";

interface Props {
    type: string,
    content: React.ReactElement,
}

const Section: React.FC<Props> = (props: Props) => {
    return <section className="flex_item">
        <h2 className="item_title">{props.type}</h2>
        {props.content}
    </section>
}

export { Section };