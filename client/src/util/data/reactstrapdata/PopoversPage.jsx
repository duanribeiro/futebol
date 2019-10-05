/* eslint import/no-webpack-loader-syntax: off */

import PopoverExample from 'components/reactStrap/Popover';
import PopoverFocusExample from 'components/reactStrap/PopoverFocus';
import UncontrolledPopoverExample from 'components/reactStrap/PopoverUncontrolled';
import PopoverExampleMulti from 'components/reactStrap/PopoverMulti';

const PopoverExampleSource = require('!!raw-loader!components/reactStrap/Popover');
const PopoverExampleMultiSource = require('!!raw-loader!components/reactStrap/PopoverMulti');
const PopoverFocusExampleSource = require('!!raw-loader!components/reactStrap/PopoverFocus');
const UncontrolledPopoverExampleSource = require('!!raw-loader!components/reactStrap/PopoverUncontrolled');

export const popoversPageData = [
    {
        title: 'Demo',
        example: PopoverExample,
        code: PopoverExampleSource,
    },
    {
        title: 'Popovers Trigger',
        example: PopoverFocusExample,
        code: PopoverFocusExampleSource,
    },
    {
        title: 'Popovers Placements',
        example: PopoverExampleMulti,
        code: PopoverExampleMultiSource,
    },
    {
        title: 'Uncontrolled Popovers',
        example: UncontrolledPopoverExample,
        code: UncontrolledPopoverExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Popover.propTypes = {
            // space separated list of triggers (e.g. "click hover focus")
            trigger: PropTypes.string,
            // boolean to control the state of the popover
            isOpen:  PropTypes.bool,
            // callback for toggling isOpen in the controlling component
            toggle:  PropTypes.func,
            // boundaries for popper, can be scrollParent, window, viewport, or any DOM element
            boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
            target:  PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.func,
              DOMElement, // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
            ]).isRequired,
            // Where to inject the popper DOM node, default to body
            container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
            className: PropTypes.string,
            // Apply class to the inner-popover
            innerClassName: PropTypes.string,
            disabled: PropTypes.bool,
            hideArrow: PropTypes.bool,
            placementPrefix: PropTypes.string,
            delay: PropTypes.oneOfType([
              PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
              PropTypes.number,
            ]),
            placement: PropTypes.oneOf([
              'auto',
              'auto-start',
              'auto-end',
              'top',
              'top-start',
              'top-end',
              'right',
              'right-start',
              'right-end',
              'bottom',
              'bottom-start',
              'bottom-end',
              'left',
              'left-start',
              'left-end',
            ]),
            // Custom modifiers that are passed to Popper.js, see https://popper.js.org/popper-documentation.html#modifiers
            modifiers: PropTypes.object,
            offset: PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.number
            ])
          }`,
    },
]