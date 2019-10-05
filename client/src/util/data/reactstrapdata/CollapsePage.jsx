/* eslint import/no-webpack-loader-syntax: off */

import CollapseExample from "components/reactStrap/Collapse";
import UncontrolledCollapseExample from "components/reactStrap/CollapseUncontrolled";
import CollapseEventsExample from "components/reactStrap/CollapseEvents";

const CollapseExampleSource = require("!!raw-loader!components/reactStrap/Collapse");
const CollapseEventsExampleSource = require("!!raw-loader!components/reactStrap/CollapseEvents");
const UncontrolledCollapseExampleSource = require("!!raw-loader!components/reactStrap/CollapseUncontrolled");

export const collapsePageData = [
    {
        title: "Demo",
        example: CollapseExample,
        code: CollapseExampleSource
    },
    {
        title: "Events",
        example: CollapseEventsExample,
        code: CollapseEventsExampleSource
    },
    {
        title: "Uncontrolled Collapse",
        example: UncontrolledCollapseExample,
        code: UncontrolledCollapseExampleSource
    },
    {
        title: "Properties",
        example: null,
        code: `Collapse.propTypes = {
            ...Transition.propTypes, // see note below
            isOpen: PropTypes.bool,
            children: PropTypes.oneOfType([
              PropTypes.arrayOf(PropTypes.node),
              PropTypes.node
            ]),
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.node,
            navbar: PropTypes.bool,
            cssModule: PropTypes.object,
            innerRef: PropTypes.object,
        };`
    }
];
