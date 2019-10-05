/* eslint import/no-webpack-loader-syntax: off */

import LayoutExample from 'components/reactStrap/Layout';

const LayoutExampleSource = require('!!raw-loader!components/reactStrap/Layout');

export const alertPageData = [
    {
        title: 'Demo',
        example: LayoutExample,
        code: LayoutExampleSource,
    },
    {
        title: 'Link color',
        example: AlertLinkExample,
        code: AlertLinkExampleSource,
    },
    {
        title: 'Additional content',
        example: AlertContentExample,
        code: AlertContentExampleSource,
    },
    {
        title: 'Dismissing',
        example: AlertDismissExample,
        code: AlertDismissExampleSource,
    },
    {
        title: 'Uncontrolled [disable] Alerts',
        example: AlertUncontrolledDismissExample,
        code: AlertUncontrolledDismissExampleSource,
    },
    {
        title: 'Alerts without fade',
        example: AlertFadelessExample,
        code: AlertFadelessExampleSource,
    },
    {
        title: 'Properties',
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
          }`,
    },
]