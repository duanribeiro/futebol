/* eslint import/no-webpack-loader-syntax: off */

import ButtonGroupExample from "components/reactStrap/ButtonGroup";
import ButtonToolbarExample from "components/reactStrap/ButtonToolbar";
import ButtonGoupSizingExample from "components/reactStrap/ButtonGoupSizing";
import ButtonGroupNestingExample from "components/reactStrap/ButtonGroupNesting";
import ButtonGroupVerticalvariationExample from "components/reactStrap/ButtonGroupVerticalvariation";

const ButtonGroupExampleSource = require("!!raw-loader!components/reactStrap/ButtonGroup");
const ButtonToolbarExampleSource = require("!!raw-loader!components/reactStrap/ButtonToolbar");
const BButtonGoupSizingExampleSource = require("!!raw-loader!components/reactStrap/ButtonGoupSizing");
const ButtonGroupNestingExampleSource = require("!!raw-loader!components/reactStrap/ButtonGroupNesting");
const ButtonGroupVerticalvariationExampleSource = require("!!raw-loader!components/reactStrap/ButtonGroupVerticalvariation");

export const buttonGroupPageData = [
    {
        title: "Demo",
        example: ButtonGroupExample,
        code: ButtonGroupExampleSource
    },
    {
        title: "Button Toolbar",
        example: ButtonToolbarExample,
        code: ButtonToolbarExampleSource
    },
    {
        title: "Sizing",
        example: ButtonGoupSizingExample,
        code: BButtonGoupSizingExampleSource
    },
    {
        title: "Nesting",
        example: ButtonGroupNestingExample,
        code: ButtonGroupNestingExampleSource
    },
    {
        title: "Vertical variation",
        example: ButtonGroupVerticalvariationExample,
        code: ButtonGroupVerticalvariationExampleSource
    },
    {
        title: "Properties",
        example: null,
        code: `ButtonGroup.propTypes = {
            ariaLabel: PropTypes.string,
            className: PropTypes.string,
            role: PropTypes.string,
            size: PropTypes.string,
            vertical: PropTypes.bool
        };`
    }
];
