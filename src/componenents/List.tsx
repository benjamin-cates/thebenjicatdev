import React from "react";

interface Props {
    type: string,
    list: string[],
}

const List: React.FC<Props> = (props: Props) => {
    return <section className="flex_item">
        <h2 className="item_title">{props.type}</h2>
        <ul>
            {props.list.map((v, i) => (<li key={i.toString()}>{v}</li>))}
        </ul>
    </section>
}

export { List };