/* eslint import/no-webpack-loader-syntax: off */

import NavbarExample from 'components/reactStrap/Navbar';
import NavbarTogglerExample from 'components/reactStrap/NavbarToggler';

const NavbarExampleSource = require('!!raw-loader!components/reactStrap/Navbar');
const NavbarTogglerExampleSource = require('!!raw-loader!components/reactStrap/NavbarToggler');

export const navbarPageData = [
    {
        title: 'Demo',
        example: NavbarExample,
        code: NavbarExampleSource,
    },
    {
        title: 'Navbar Toggler',
        example: NavbarTogglerExample,
        code: NavbarTogglerExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Navbar.propTypes = {
            light: PropTypes.bool,
            dark: PropTypes.bool,
            fixed: PropTypes.string,
            color: PropTypes.string,
            role: PropTypes.string,
            expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
            // pass in custom element to use
        }`,
    },
    {
        title: 'NavbarBrand Properties',
        example: null,
        code: `NavbarBrand.propTypes = {
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
            // pass in custom element to use
        }`,
    },
    {
        title: 'NavbarToggler Properties',
        example: null,
        code: `NavbarToggler.propTypes = {
            type: PropTypes.string,
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
            // pass in custom element to use
        }`,
    }
]