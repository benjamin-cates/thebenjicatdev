
interface Craft {
    name: string,
    description: string,
    spiel: string,
    publish_date: string,
    page_description: string,
    feature_images: string[],
    files: { name: string, drive: string, filetype: string, desc?: string }[],
}

let papercraft_choosing_a_file = `
# Choosing a file

One-sided: Fold lines on the same side as the texture. Easier to make, but doesn't look as good.

Two-sided: Fold lines on the opposite side of the texture. Requires double-sided printing. Harder to make, but looks better.

Letter: Paper size of 8.5 by 11 inches.

A4: Paper size of 210 by 297 millimeters.
`;
const copyright_statement = (publish_date: string): string => {
    return "## License\n\nThis pattern was released on " + publish_date + "\n\nAll files in this project are licensed under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0), so proper credit must be given if modified or redistributed. \n\n© " + publish_date.split("-")[0] + " Benjamin Cates\n\n";
}
let papercraft_modification_statement = `
# Modification

These files were made with [Blender](https://blender.org) and [Pepakura Designer](https://pepakura.tamasoft.co.jp). Feel free to download and modify the source files, but distribution must be done under the license.\n
`

const crafts_list: { [key: string]: Craft } = {
    "ferris-papercraft": {
        name: "Ferris Papercraft",
        feature_images: ["/crafts/ferris_instagram.jpg", "/crafts/ferris_complete.jpg"],
        spiel: `This papercraft is inspired by Ferris the Crab, the official mascot of the [Rust programming language](https://rust-lang.org/), but he's also a cute little crab perfect for any beach!`,
        page_description: "Free papercraft pattern for Ferris the Crab inspired by the Rust Programming Language mascot",
        description: papercraft_choosing_a_file + `

# Pattern instructions

This pattern consists of 7 individual pieces: 1 body, two claws, and four legs.

## Body

First, start out by cutting the spikes (parts 1 and 2) out of the pattern. Cut only the solid black lines. I recommend using an exacto knife or a box cutter. Then, prepare the folds by pressing them against a ruler or sharp straight edge. Dashed lines are mountain folds (like the edges of a cube) and dashed lines with dots are valley folds (like the crevices between Ferris' spikes). The direction of the folds depends on whether you have the two-sided or one-sided pattern.

Attach the front and back half of the spikes like they are a zipper. I recommend using elmer's glue and using a toothpick to spread it onto the tabs. See the image below as a reference for this step.

![Front half and back half of spikes are attached in zipper order](/crafts/ferris_spikes.jpg)

Now, cut out pieces 3 and 4. Attach the front half first. The object may curve in the wrong direction, as pictured below, but don't worry because it will correct itself when you attach the back half.

![Front half attached to spikes](/crafts/ferris_front_half.jpg)

Now, attach piece 4 to finish the back half. Glue every tab that doesn't face the bottom side.

![Ferris body without bottom](/crafts/ferris_no_bottom.jpg)

Finally, glue the bottom tabs one at a time to attach the bottom. It is tricky to line up the bottom symmetrically, so be careful.

## Claws

To make the claws, you'll have to cut 6-9 for the right claw and 12-15 for the left claw. On the two-sided version, the claw sides will be reversed, but it shouldn't be confusing. Start by cutting out and prefolding the knuckles and fingers. Glue each to themselves and then glue them to each other. The thicker side of the knuckles should be facing the tip of the fingers. Use the numbered tabs if you get lost.

![Ferris fingers and knuckles](/crafts/ferris_knuckles.jpg)

Then attach the thumb, making sure the glue holds strong (this is the easiest part to come undone).

![Ferris thumb](/crafts/ferris_thumbs.jpg)

Finally, attach the forearm piece before you glue the forearm to itself. If you attach the forearm to the thumb before anything else, it will be much easier.

![Claw finished](/crafts/ferris_claw.jpg)

## Legs

Each leg is a separate piece. Cut them out, prefold, and glue them to themselves.

![Appendages done](/crafts/ferris_appendages.jpg)

## Final steps

Finally, glue the platform of each appendage that attaches to the body. The final crab should look like this!

![Ferris complete](/crafts/ferris_complete.jpg)
`+ papercraft_modification_statement + copyright_statement("2025-12-06"),
        publish_date: "2025-12-1",
        files: [
            {
                name: "Letter-size Two-sided Print",
                filetype: "pdf",
                drive: "https://drive.google.com/file/d/1BS9InXc_utzrxa1AzKib2iHf4ib_RC7Y/view?usp=drive_link",
            },
            {
                name: "Letter-size One-sided Print",
                filetype: "pdf",
                drive: "https://drive.google.com/file/d/1Fr0wLqbvcfujWr8Abv4PcbWOxWH6EqgK/view?usp=drive_link",
            },
            {
                name: "A4-size Two-sided Print",
                filetype: "pdf",
                drive: "https://drive.google.com/file/d/1SCxdf6euyORSRVpdkS2VuRqKJgv0Ysk1/view?usp=drive_link",
            },
            {
                name: "A4-size One-sided Print",
                filetype: "pdf",
                drive: "https://drive.google.com/file/d/17zc2aMDfn3xbkw19fFBfxBLed46ZTeGr/view?usp=drive_link",
            },
            {
                name: "3D Model",
                filetype: "obj",
                drive: "https://drive.google.com/file/d/1qSXG7wSEM6xN2abhwLg_QT5O56GVk10u/view?usp=drive_link"
            },
            {
                name: "Blender Model",
                filetype: "blend",
                drive: "https://drive.google.com/file/d/1KL7GGShQNAodFFLqiX8TJrO9bvp3Cebs/view?usp=drive_link",
            },
            {
                name: "Pepakura Designer File",
                filetype: "pdo",
                drive: "https://drive.google.com/file/d/1UPtC7kf38MQ3PvbLDgNKvkVEwppvXBsJ/view?usp=drive_link",
            },
            {
                name: "Google Drive Folder",
                filetype: "folder",
                drive: "https://drive.google.com/drive/folders/17skFW0W7yH-rhLOaAn-5YC0JD_WniXhV?usp=sharing",
            }
        ]

    },
    //"hornet-papercraft": {
    //    name: "Hornet Papercraft",
    //    description: "",
    //    spiel: "",
    //    feature_images: [""],
    //    files: [],
    //    publish_date: "2025-12-05",

    //},

};


export { crafts_list };