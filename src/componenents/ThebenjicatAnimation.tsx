import React, { useEffect, useState } from "react";

const full_text = "thebenjicat.dev";
const do_spacing = [92, 78, 160, 160, 160, 240, 40, 100, 100, 170, 260, 200, 200, 200, 150, 1000];
const undo_spacing = [1000, 200, 175, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];

const ThebenjicatAnimation: React.FC<{}> = (_props: {}) => {
    const [index, set_index] = useState(0);
    const [up, set_up] = useState(true);

    useEffect(() => {
        let timeout = setTimeout(() => {
            if (up && index == full_text.length) {
                set_up(false);
                set_index(index);
            }
            else if (!up && index == 0) {
                set_up(true);
                set_index(index);
            }
            else if (up) {
                set_index(index + 1);
            }
            else {
                set_index(index - 1);
            }
        }, (up ? do_spacing : undo_spacing)[index])
        return () => clearTimeout(timeout);
    }, [index, up]);

    return <span id="title_text_wrapper">
        <span id="title_text">{full_text.slice(0, index)}</span>
        <span id="title_cursor">_</span>
    </span>;
}

export { ThebenjicatAnimation };