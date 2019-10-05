/* eslint import/no-webpack-loader-syntax: off */

import ButtonExample from "components/reactStrap/Button";
import ButtonOutline from "components/reactStrap/ButtonOutline";
import ButtonStateful from "components/reactStrap/ButtonStateful";
import ButtonSizes from "components/reactStrap/ButtonSizes";
import ButtonDisableState from "components/reactStrap/ButtonDisableState";
import ButtonActiveState from "components/reactStrap/ButtonActiveState";

const ButtonExampleSource = require("!!raw-loader!components/reactStrap/Button");
const ButtonSizesSource = require("!!raw-loader!components/reactStrap/ButtonSizes");
const ButtonDisableStateSource = require("!!raw-loader!components/reactStrap/ButtonDisableState");
const ButtonActiveStateSource = require("!!raw-loader!components/reactStrap/ButtonActiveState");
const ButtonOutlineSource = require("!!raw-loader!components/reactStrap/ButtonOutline");
const ButtonStatefulSource = require("!!raw-loader!components/reactStrap/ButtonStateful");

export const buttonPageData = [
    {
        title: "Demo",
        example: ButtonExample,
        code: ButtonExampleSource
    },
    {
        title: "Outline Buttons",
        example: ButtonOutline,
        code: ButtonOutlineSource
    },
    {
        title: "Sizes",
        example: ButtonSizes,
        code: ButtonSizesSource
    },
    {
        title: "Active State",
        example: ButtonActiveState,
        code: ButtonActiveStateSource
    },
    {
        title: "Disabled State",
        example: ButtonDisableState,
        code: ButtonDisableStateSource
    },
    {
        title: "Checkbox and Radio Buttons (Stateful Buttons)",
        example: ButtonStateful,
        code: ButtonStatefulSource
    },
    {
        title: "Properties",
        example: null,
        code: `Button.propTypes = {
            active: PropTypes.bool,
            block: PropTypes.bool,
            color: PropTypes.string, // default: 'secondary'
            disabled: PropTypes.bool,
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            onClick: PropTypes.func,
            size: PropTypes.string,
            close: PropTypes.bool,
          }`
    }
];
