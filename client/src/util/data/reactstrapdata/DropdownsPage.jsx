/* eslint import/no-webpack-loader-syntax: off */

import DropdownExample from 'components/reactStrap/Dropdown';
import DropdownSizingExample from 'components/reactStrap/DropdownSizing';
import CustomDropdownExample from 'components/reactStrap/CustomDropdown';
import DropdownUncontrolledExample from 'components/reactStrap/DropdownUncontrolled';
import DropdownSetActiveFromChildExample from 'components/reactStrap/DropdownSetActiveFromChild';
import DropDownAlignmentExample from 'components/reactStrap/DropDownAlignment';
import DropDowndirectionExample from 'components/reactStrap/DropDowndirection';
import DropdownModifiers from 'components/reactStrap/DropdownModifiers';

const DropdownExampleSource = require('!!raw-loader!components/reactStrap/Dropdown');
const CustomDropdownExampleSource = require('!!raw-loader!components/reactStrap/CustomDropdown');
const DropdownUncontrolledExampleSource = require('!!raw-loader!components/reactStrap/DropdownUncontrolled');
const DropdownSetActiveFromChildSource = require('!!raw-loader!components/reactStrap/DropdownSetActiveFromChild');
const DropdownSizingExampleSource = require('!!raw-loader!components/reactStrap/DropdownSizing');
const DropDownAlignmentExampleSource = require('!!raw-loader!components/reactStrap/DropDownAlignment');
const DropDowndirectionExampleSource = require('!!raw-loader!components/reactStrap/DropDowndirection');
const DropdownModifiersSource = require('!!raw-loader!components/reactStrap/DropdownModifiers');

export const dropdownPageData = [
    {
        title: 'Demo',
        example: DropdownExample,
        code: DropdownExampleSource,
    },
    {
        title: 'Alignment',
        example: DropDownAlignmentExample,
        code: DropDownAlignmentExampleSource,
    },
    {
        title: 'Menu Headers',
        example: null,
        code: `<DropdownItem header>Header</DropdownItem>`,
    },
    {
        title: 'Menu Dividers',
        example: null,
        code: `<DropdownItem divider/>`,
    },
    {
        title: 'Menu Items',
        example: null,
        code: `<DropdownItem>Action</DropdownItem>`,
    },
    {
        title: 'Disabled Menu Items',
        example: null,
        code: `<DropdownItem disabled>Action</DropdownItem>`,
    },
    {
        title: 'Sizing',
        example: DropdownSizingExample,
        code: DropdownSizingExampleSource,
    },
    {
        title: 'Custom Dropdown',
        example: CustomDropdownExample,
        code: CustomDropdownExampleSource,
    },
    {
        title: 'Uncontrolled Dropdown',
        example: DropdownUncontrolledExample,
        code: DropdownUncontrolledExampleSource,
    },
    {
        title: 'Drop direction variations',
        example: DropDowndirectionExample,
        code: DropDowndirectionExampleSource,
    },
    {
        title: 'Modifiers',
        example: DropdownModifiers,
        code: DropdownModifiersSource,
    },
    {
        title: 'Set Active From Child',
        example: DropdownSetActiveFromChildExample,
        code: DropdownSetActiveFromChildSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Dropdown.propTypes = {
        disabled: PropTypes.bool,
        direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
        group: PropTypes.bool,
        isOpen: PropTypes.bool,
        // For Dropdown usage inside a Nav
        nav: PropTypes.bool,
        active: PropTypes.bool,
        // For Dropdown usage inside a Navbar (disables popper)
        inNavbar: PropTypes.bool,
        tag: PropTypes.string, // default: 'div' unless nav=true, then 'li'
        toggle: PropTypes.func,
        setActiveFromChild: PropTypes.bool
    };
    DropdownToggle.propTypes = {
        caret: PropTypes.bool,
        color: PropTypes.string,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onClick: PropTypes.func,
        'data-toggle': PropTypes.string,
        'aria-haspopup': PropTypes.bool,
        // For DropdownToggle usage inside a Nav
        nav: PropTypes.bool,
        // Defaults to Button component
        tag: PropTypes.any
    };
    DropdownMenu.propTypes = {
        tag: PropTypes.string,
        children: PropTypes.node.isRequired,
        right: PropTypes.bool,
        flip: PropTypes.bool, // default: true,
        className: PropTypes.string,
        cssModule: PropTypes.object,
        // Custom modifiers that are passed to DropdownMenu.js, see https://popper.js.org/popper-documentation.html#modifiers
        modifiers: PropTypes.object,
        persist: PropTypes.bool // presist the popper, even when closed. See #779 for reasoning
        };
    DropdownItem.propTypes = {
        children: PropTypes.node,
        active: PropTypes.bool,
        disabled: PropTypes.bool,
        divider: PropTypes.bool,
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        header: PropTypes.bool,
        onClick: PropTypes.func,
        className: PropTypes.string,
        cssModule: PropTypes.object,
        toggle: PropTypes.bool // default: true
    };`,
    },
]