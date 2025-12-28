
interface Craft {
    name: string,
    body: string,
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

These files were made with [Blender](https://blender.org) and [Pepakura Designer](https://pepakura.tamasoft.co.jp). Feel free to download and modify the source files in the Google Drive folder link provided, but distribution must be done under the license.\n
`

let papercraft_instructions_generic = `
# Instructions

Materials
* Cardstock paper or regular paper
* Scissors (slower) or a craft knife with a cutting mat (faster)
* Aleene's Tacky Glue or Elmer's Glue
* Toothpick for applying glue (optional)
* Ruler for creasing (optional)

Steps

1. Cut each piece on the solid lines.

2. Crease each part on their interior lines. **Dashed lines** are convex mountain folds. **Dashed lines with dots** are concave valley folds. I recommend creasing by folding against a sharp ruler to get the straightest lines.

3. Apply glue to the tabs and stick them inside the edge with a matching number. Using the right amount of glue is necessary to make a strong connection in just a few seconds, and I've found toothpicks work the best.

4. Follow the specific instructions below for this pattern, which tell you the optimal order to cut the pieces and glue tabs.

5. Enjoy your papercrafting!

If you would like visual instructions [this video](https://www.youtube.com/watch?v=1ZiFKaXUcZo) from ThePapercraftsman gives a quick, but thorough overview.
`;

const crafts_list: { [key: string]: Craft } = {
    "ferris-papercraft": {
        name: "Ferris Papercraft",
        feature_images: ["/crafts/ferris_instagram.webp", "/crafts/ferris_complete.jpg"],
        spiel: `This papercraft is inspired by Ferris the Crab, the official mascot of the [Rust programming language](https://rust-lang.org/), but he's also a cute little crab perfect for any beach!`,
        page_description: "Free papercraft pattern for Ferris the Crab inspired by the Rust Programming Language mascot",
        body: papercraft_choosing_a_file + `

# Quick Info

**Time estimate**: 2 hours

**Dimensions (inches)**: **5.5** wide x **3** deep x **2.5** tall

**Pages**: 2

**Pieces**: 17

` + papercraft_instructions_generic + `

## Body

Cut and crease the spikes (parts 1 and 2) and glue together like a zipper.

![Front half and back half of spikes are attached in zipper order](/crafts/ferris_spikes.jpg)

Cut and crease pieces 3 and 4. Attach the front piece 3 first. The object may curve in the wrong direction, as pictured below, but don't worry because it will correct itself when you attach the back half.

![Front half attached to spikes](/crafts/ferris_front_half.jpg)

Now, attach piece 4 to finish the back half.

![Ferris body without bottom](/crafts/ferris_no_bottom.jpg)

Finally, glue the bottom tabs one at a time to attach the bottom (piece 5). Be sure to line up the bottom symetrically because it is easy to misalign.

## Claws

Cut out and crease the right knuckles (piece 6) and the fingers (piece 7). The thicker side of the knuckles should be facing the tip of the fingers. Use the numbered tabs if you get lost.

![Ferris fingers and knuckles](/crafts/ferris_knuckles.jpg)

Then attach the thumb (piece 8), making sure the glue holds strong (this is the easiest part to come undone).

![Ferris thumb](/crafts/ferris_thumbs.jpg)

Attach the forearm (piece 9) to the thumb before glueing any other tabs.

![Claw finished](/crafts/ferris_claw.jpg)

Glue the rest of the tabs closed and repeat this section for the left claw (pieces 12 through 15).

## Legs

Each leg is a separate piece (10, 11, 16, and 17). Cut, crease, and glue! The front legs are thinner and longer; the back legs are thicker and shorter.

![Appendages done](/crafts/ferris_appendages.jpg)

## Final steps

Finally, glue the platform of each appendage that attaches to the body. The final crab should look like this!

![Ferris complete](/crafts/ferris_complete.jpg)
`+ papercraft_modification_statement + copyright_statement("2025-12-06"),
        publish_date: "2025-12-06",
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
                name: "Google Drive Folder",
                filetype: "folder",
                drive: "https://drive.google.com/drive/folders/17skFW0W7yH-rhLOaAn-5YC0JD_WniXhV?usp=sharing",
            }
        ]

    },
    "hornet-papercraft": {
        name: "Hornet Papercraft",
        page_description: "Free papercraft pattern for Hornet from Hollow Knight: Silksong",
        body: papercraft_choosing_a_file + `
        
# Quick Info

**Time estimate**: 90 minutes

**Dimensions (inches)**: **3.5** width x **3.5** length x **4.5** height

**Pages**: 2

**Pieces**: 13

` + papercraft_instructions_generic + `

## Cloak

Cut and crease the cloak (1 through 4), then glue the top halves to the bottom halves (matching does not matter).

![Two halves of Hornet's cloak before glueing](/crafts/hornet_cloak_halves.webp)

Glue the left half and the right half of the cloak to each other.

## Base
Cut and crease pieces 5 and 6. Glue piece 6 to the center column of piece 5 like the picture below. Then glue piece 7 to pieces 5 and 6 starting with the center tabs and then the outside tabs one-at-a-time.

![Base to hold hornet standing up](/crafts/hornet_base.webp)

## Head
Cut and crease the upper head (pieces 8 and 9), and glue to each other. Cut and crease the bottom of the mask (piece 10). The tabs on each horn are too long, so cut both of them shorter like the image below. Glue the horns shut, then glue the bottom to the top in a zipper order.

![Diagram showing how to cut the tab for her horns short](/crafts/hornet_extra_cut.png)

![Partially completed hornets head](/crafts/hornet_head_partial.webp)

## Body

Cut and crease the body piece (12) and inner legs (11). Glue the inner legs one at a time to prevent it from slipping in the wrong direction.

![Hornet body partially complete](/crafts/hornet_body_partial.webp)

Glue sections of the final flap one at a time. I recommend starting with the legs, then the arm flap, then the head.

## Needle

Cut out the needle (piece 13) and glue each half together so the texture is on the outside. If you are using the double sided pattern, I recommend cutting on the side with texture in case the printer is misaligned.

## Assembly

![Hornet pieces](/crafts/hornet_pieces.webp)
![Hornet pieces being assembled](/crafts/hornet_assembly.webp)

Insert Hornet's body into the base and put her cloak around the neck. Put a dab of glue on the top of the neck and stick the head on. Glue the needle to the underside of the cloak so it sticks out (you can place it wherever you like). Congrats, your Hornet Papercraft is now done!

![Hornet completed](/crafts/hornet_complete.webp)

`+ papercraft_modification_statement + copyright_statement("2025-12-09"),
        spiel: "This nimble bug from Hollow Knight: Silksong is the perfect addition to a figurine collection. Her sharp needle and drifting cloak will let her take on any enemy. Follow this free papercraft pattern to make one of your own.",
        feature_images: ["/crafts/hornet_post.webp", "/crafts/hornet_complete.webp"],
        files: [
            {
                name: "Letter-size Two-sided Print",
                filetype: "pdf",
                drive: "https://drive.google.com/file/d/1OoQpWFmoiyH8Q4LUhSbsy8OIiZKd0XQW/view?usp=drive_link",
            },
            {
                name: "Letter-size One-sided Print",
                filetype: "pdf",
                drive: "https://drive.google.com/file/d/10-m2Ez7sLR9XQv-wYqZD9_xq6VN-heDx/view?usp=drive_link",
            },
            {
                name: "A4-size Two-sided Print",
                filetype: "pdf",
                drive: "https://drive.google.com/file/d/1LdsmqHgMaguJy-7DAMvWGquGTSyflZ36/view?usp=drive_link",
            },
            {
                name: "A4-size One-sided Print",
                filetype: "pdf",
                drive: "https://drive.google.com/file/d/11lEX439yW2aLIlIDYwtLWOHBTCOd7piX/view?usp=drive_link",
            },
            {
                name: "Google Drive Folder",
                filetype: "folder",
                drive: "https://drive.google.com/drive/folders/1lcwKcsKN4auE5vUBgV9j047qKfRMUVpL?usp=sharing",
            }
        ],
        publish_date: "2025-12-09",

    },

};


export { crafts_list };