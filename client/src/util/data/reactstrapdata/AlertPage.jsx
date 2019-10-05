/* eslint import/no-webpack-loader-syntax: off */

import AlertExample from "components/reactStrap/Alert";
import AlertContentExample from "components/reactStrap/AlertContent";
import AlertLinkExample from "components/reactStrap/AlertLink";
import AlertDismissExample from "components/reactStrap/AlertDismiss";
import AlertUncontrolledDismissExample from "components/reactStrap/AlertUncontrolledDismiss";
import AlertFadelessExample from "components/reactStrap/AlertFadeless";

const AlertLinkExampleSource = require("!!raw-loader!components/reactStrap/AlertLink");
const AlertExampleSource = require("!!raw-loader!components/reactStrap/Alert");
const AlertContentExampleSource = require("!!raw-loader!components/reactStrap/AlertContent");
const AlertDismissExampleSource = require("!!raw-loader!components/reactStrap/AlertDismiss");
const AlertUncontrolledDismissExampleSource = require("!!raw-loader!components/reactStrap/AlertUncontrolledDismiss");
const AlertFadelessExampleSource = require("!!raw-loader!components/reactStrap/AlertFadeless");

export const alertPageData = [
    {
        title: "Demo",
        example: AlertExample,
        code: AlertExampleSource
    },
    {
        title: "Link color",
        example: AlertLinkExample,
        code: AlertLinkExampleSource
    },
    {
        title: "Additional content",
        example: AlertContentExample,
        code: AlertContentExampleSource
    },
    {
        title: "Dismissing",
        example: AlertDismissExample,
        code: AlertDismissExampleSource
    },
    {
        title: "Uncontrolled [disable] Alerts",
        example: AlertUncontrolledDismissExample,
        code: AlertUncontrolledDismissExampleSource
    },
    {
        title: "Alerts without fade",
        example: AlertFadelessExample,
        code: AlertFadelessExampleSource
    },
    {
        title: "Properties",
        example: null,
        code: `Alert.propTypes = {
            className: PropTypes.string,
            closeClassName: PropTypes.string,
            color: PropTypes.string, // default: 'success'
            isOpen: PropTypes.bool,  // default: true
            toggle: PropTypes.func,
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            // Controls the transition of the alert fading in and out
            // See [Fade](/components/fade/) for more details
            transition: PropTypes.shape(Fade.propTypes),
          }`
    }
];
