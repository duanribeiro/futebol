/* eslint import/no-webpack-loader-syntax: off */


import OverviewExample from 'components/reactStrap/InputGroupOverview';
import AddonExample from 'components/reactStrap/InputGroupAddon';
import AddonSizingExample from 'components/reactStrap/InputGroupSizing';
import ButtonExample from 'components/reactStrap/InputGroupButton';
import ButtonShorthandExample from 'components/reactStrap/InputGroupButtonShorthand';

const OverviewExampleSource = require('!!raw-loader!components/reactStrap/InputGroupOverview');
const AddonExampleSource = require('!!raw-loader!components/reactStrap/InputGroupAddon');
const AddonSizingExampleSource = require('!!raw-loader!components/reactStrap/InputGroupSizing');
const ButtonExampleSource = require('!!raw-loader!components/reactStrap/InputGroupButton');
const ButtonShorthandExampleSource = require('!!raw-loader!components/reactStrap/InputGroupButtonShorthand');

export const inputGroupPageData = [
    {
        title: 'Demo',
        example: OverviewExample,
        code: OverviewExampleSource,
    },
    {
        title: 'Addons',
        example: AddonExample,
        code: AddonExampleSource,
    },
    {
        title: 'Addon Sizing',
        example: AddonSizingExample,
        code: AddonSizingExampleSource,
    },
    {
        title: 'Buttons / Dropdowns',
        example: ButtonExample,
        code: ButtonExampleSource,
    },
    {
        title: 'Button Shorthand',
        example: ButtonShorthandExample,
        code: ButtonShorthandExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `InputGroup.propTypes = {
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            size: PropTypes.string,
            className: PropTypes.string
          };
          InputGroupAddOn.propTypes = {
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
            className: PropTypes.string
          };
          InputGroupButton.propTypes = {
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
            children: PropTypes.node,
            groupClassName: PropTypes.string, // only used in shorthand
            groupAttributes: PropTypes.object, // only used in shorthand
            className: PropTypes.string
        };`,
    },
]