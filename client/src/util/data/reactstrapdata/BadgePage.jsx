/* eslint import/no-webpack-loader-syntax: off */

import BadgeExample from "components/reactStrap/Badge";
import BadgeButtonExample from "components/reactStrap/BadgeButton";
import BadgePillsExample from "components/reactStrap/BadgePills";
import BadgeVariationsExample from "components/reactStrap/BadgeVariations";
import BadgeLinksExample from "components/reactStrap/BadgeLinks";

const BadgePillsExampleSource = require("!!raw-loader!components/reactStrap/BadgePills");
const BadgeButtonExampleSource = require("!!raw-loader!components/reactStrap/BadgeButton");
const BadgeExampleSource = require("!!raw-loader!components/reactStrap/Badge");
const BadgeVariationsExampleSource = require("!!raw-loader!components/reactStrap/BadgeVariations");
const BadgeLinksExampleSource = require("!!raw-loader!components/reactStrap/BadgeLinks");

export const badgePageData = [
    {
        title: "Demo",
        example: BadgeExample,
        code: BadgeExampleSource
    },
    {
        title: "Badge Button",
        example: BadgeButtonExample,
        code: BadgeButtonExampleSource
    },
    {
        title: "Contextual variations",
        example: BadgeVariationsExample,
        code: BadgeVariationsExampleSource
    },
    {
        title: "Pills",
        example: BadgePillsExample,
        code: BadgePillsExampleSource
    },
    {
        title: "Links",
        example: BadgeLinksExample,
        code: BadgeLinksExampleSource
    }
];
