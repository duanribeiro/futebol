/* eslint import/no-webpack-loader-syntax: off */

import BreadcrumbExample from "components/reactStrap/Breadcrumb";
import BreadcrumbNoListExample from "components/reactStrap/BreadcrumbNoList";

const BreadcrumbExampleSource = require("!!raw-loader!components/reactStrap/Breadcrumb");
const BreadcrumbNoListExampleSource = require("!!raw-loader!components/reactStrap/BreadcrumbNoList");

export const breadcrumbsPageData = [
    {
        title: "Demo",
        example: BreadcrumbExample,
        code: BreadcrumbExampleSource
    },
    {
        title: "No list",
        example: BreadcrumbNoListExample,
        code: BreadcrumbNoListExampleSource
    },
    {
        title: "Properties",
        example: null,
        code: `Breadcrumb.propTypes = {
          tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
          listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
          className: PropTypes.string,
          listClassName: PropTypes.string,
          cssModule: PropTypes.object,
          children: PropTypes.node,
          'aria-label': PropTypes.string
        };
        BreadcrumbItem.propTypes = {
          tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
          active: PropTypes.bool,
          className: PropTypes.string,
          cssModule: PropTypes.object,
        };`
    }
];
