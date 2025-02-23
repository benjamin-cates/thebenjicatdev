import React from "react";

interface Props {
    github?: string,
    try?: string,
    other?: [string, string][],
}

const Links: React.FC<Props> = (props: Props) => {
    return <section className="flex_item">
        <h2 className="item_title">Links</h2>
        <p className="project_links">
            {props.other && props.other.map(v => <a key={v[0]} href={v[1]} target="_blank">{v[0]}</a>)}
            {props.try && <a href={props.try} target="_blank">Try it now</a>}
            {props.github && <a href={props.github} target="_blank">View source code on GitHub</a>}
        </p>
    </section>
}

export { Links };