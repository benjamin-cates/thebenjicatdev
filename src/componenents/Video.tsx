import React from "react";

interface Props {
    title: string,
    url: string,
}

const Video: React.FC<Props> = (props: Props) => {
    return <iframe className="flex_item project_video" width="560" height="315" style={{ border: "none" }}
        src={props.url} title={props.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>;
}

export { Video };