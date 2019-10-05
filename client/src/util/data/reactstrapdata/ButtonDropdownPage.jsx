/* eslint import/no-webpack-loader-syntax: off */

// import Example from 'components/reactStrap/ButtonDropdownMulti';
// import ExampleSplit from 'components/reactStrap/ButtonDropdownMultiSplit';
import ButtonDropdownExample from "components/reactStrap/ButtonDropdown";
import SingleButtonDownExample from "components/reactStrap/SingleButtonDropDown";
import SplitButtonDropDownExample from "components/reactStrap/SplitButtonDropDown";
import ButtonDropDownSizingExample from "components/reactStrap/ButtonDropDownSizing";
import ButtonDropdownUncontrolledExample from "components/reactStrap/ButtonDropdownUncontrolled";
import ButtonDropDownDirectionVarientExample from "components/reactStrap/ButtonDropDownDirectionVarient";

const ButtonDropdownExampleSource = require("!!raw-loader!components/reactStrap/ButtonDropdown");
const SingleButtonDropDownExampleSource = require("!!raw-loader!components/reactStrap/SingleButtonDropDown");
const SplitButtonDropDownExampleSource = require("!!raw-loader!components/reactStrap/SplitButtonDropDown");
const ButtonDropDownSizingExampleSource = require("!!raw-loader!components/reactStrap/ButtonDropDownSizing");
const ButtonDropdownUncontrolledExampleSource = require("!!raw-loader!components/reactStrap/ButtonDropdownUncontrolled");
const ButtonDropDownDirectionVarientExampleSource = require("!!raw-loader!components/reactStrap/ButtonDropDownDirectionVarient");

export const buttonDropdownPageData = [
    {
        title: "Demo",
        example: ButtonDropdownExample,
        code: ButtonDropdownExampleSource
    },
    {
        title: "Single button dropdowns",
        example: SingleButtonDownExample,
        code: SingleButtonDropDownExampleSource
    },
    {
        title: "Split button dropdowns",
        example: SplitButtonDropDownExample,
        code: SplitButtonDropDownExampleSource
    },
    {
        title: "Sizing",
        example: ButtonDropDownSizingExample,
        code: ButtonDropDownSizingExampleSource
    },
    {
        title: "Uncontrolled Dropdown",
        example: ButtonDropdownUncontrolledExample,
        code: ButtonDropdownUncontrolledExampleSource
    },
    {
        title: "Drop direction variations",
        example: ButtonDropDownDirectionVarientExample,
        code: ButtonDropDownDirectionVarientExampleSource
    },
    {
        title: "Properties",
        example: null,
        code: `ButtonDropdown.propTypes = {
            disabled: PropTypes.bool,
            direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
            group: PropTypes.bool,
            isOpen: PropTypes.bool,
            tag: PropTypes.string,
            toggle: PropTypes.func
          };
          
          DropdownToggle.propTypes = {
            caret: PropTypes.bool,
            color: PropTypes.string,
            disabled: PropTypes.bool,
            onClick: PropTypes.func,
            'data-toggle': PropTypes.string,
            'aria-haspopup': PropTypes.bool
        };`
    }
];
