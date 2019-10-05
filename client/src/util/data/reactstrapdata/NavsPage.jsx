/* eslint import/no-webpack-loader-syntax: off */

import NavsExample from 'components/reactStrap/Navs';
import NavTabsExample from 'components/reactStrap/NavTabs';
import NavVerticalExample from 'components/reactStrap/NavVertical';
import NavPillsExample from 'components/reactStrap/NavPills';

const NavsExampleSource = require('!!raw-loader!components/reactStrap/Navs');
const NavVerticalExampleSource = require('!!raw-loader!components/reactStrap/NavVertical');
const NavTabsExampleSource = require('!!raw-loader!components/reactStrap/NavTabs');
const NavPillsExampleSource = require('!!raw-loader!components/reactStrap/NavPills');

export const navssPageData = [
    {
        title: 'Demo',
        example: NavsExample,
        code: NavsExampleSource,
    },
    {
        title: 'Vertical',
        example: NavVerticalExample,
        code: NavVerticalExampleSource,
    },
    {
        title: 'Tabs',
        example: NavTabsExample,
        code: NavTabsExampleSource,
    },
    {
        title: 'Pills',
        example: NavPillsExample,
        code: NavPillsExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Nav.propTypes = {
            tabs: PropTypes.bool,
            pills: PropTypes.bool,
            card: PropTypes.bool,
            justified: PropTypes.bool,
            fill: PropTypes.bool,
            vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
            horizontal: PropTypes.string,
            navbar: PropTypes.bool,
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
            // pass in custom element to use
        }`,
    },
    {
        title: 'NavItem Properties',
        example: null,
        code: `NavItem.propTypes = {
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            active: PropTypes.bool,
            // pass in custom element to use
        }`,
    },
    {
        title: 'NavLink Properties',
        example: null,
        code: `NavLink.propTypes = {
            disabled: PropTypes.bool,
            active: PropTypes.bool,
            // pass in custom element to use
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            // ref will only get you a reference to the NavLink component, use innerRef to get a reference to the DOM element (for things like focus management).
            innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
        }`,
    },
]