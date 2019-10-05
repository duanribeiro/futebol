/* eslint import/no-webpack-loader-syntax: off */

import ProgressExample from 'components/reactStrap/Progress';
import ProgressLabelsExample from 'components/reactStrap/ProgressLabels';
import ProgressAnimatedExample from 'components/reactStrap/ProgressAnimated';
import ProgressColorExample from 'components/reactStrap/ProgressColor';
import ProgressMultiExample from 'components/reactStrap/ProgressMulti';
import ProgressStripedExample from 'components/reactStrap/ProgressStriped';
import ProgressMaxExample from 'components/reactStrap/ProgressMax';

const ProgressExampleSource = require('!!raw-loader!components/reactStrap/Progress');
const ProgressStripedExampleSource = require('!!raw-loader!components/reactStrap/ProgressStriped');
const ProgressColorExampleSource = require('!!raw-loader!components/reactStrap/ProgressColor');
const ProgressLabelsExampleSource = require('!!raw-loader!components/reactStrap/ProgressLabels');
const ProgressAnimatedExampleSource = require('!!raw-loader!components/reactStrap/ProgressAnimated');
const ProgressMultiExampleSource = require('!!raw-loader!components/reactStrap/ProgressMulti');
const ProgressMaxExampleSource = require('!!raw-loader!components/reactStrap/ProgressMax');

export const progressPageData = [
    {
        title: 'Demo',
        example: ProgressExample,
        code: ProgressExampleSource,
    },
    {
        title: 'Color Variants',
        example: ProgressColorExample,
        code: ProgressColorExampleSource,
    },
    {
        title: 'Labels',
        example: ProgressLabelsExample,
        code: ProgressLabelsExampleSource,
    },
    {
        title: 'Striped',
        example: ProgressStripedExample,
        code: ProgressStripedExampleSource,
    },
    {
        title: 'Animated',
        example: ProgressAnimatedExample,
        code: ProgressAnimatedExampleSource,
    },
    {
        title: 'Multiple bars / Stacked',
        example: ProgressMultiExample,
        code: ProgressMultiExampleSource,
    },
    {
        title: 'Max value',
        example: ProgressMaxExample,
        code: ProgressMaxExampleSource,
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