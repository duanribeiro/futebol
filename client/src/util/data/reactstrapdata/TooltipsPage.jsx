/* eslint import/no-webpack-loader-syntax: off */


import TooltipExample from 'components/reactStrap/Tooltip';
import TooltipAutoHideExample from 'components/reactStrap/TooltipAutoHide';
import TooltipExampleUncontrolled from 'components/reactStrap/TooltipUncontrolled';
import TooltipExampleMulti from 'components/reactStrap/TooltipMulti';

const TooltipExampleSource = require('!!raw-loader!components/reactStrap/Tooltip');
const TooltipExampleAutoHideSource = require('!!raw-loader!components/reactStrap/TooltipAutoHide');
const TooltipExampleMultiSource = require('!!raw-loader!components/reactStrap/TooltipMulti');
const TooltipExampleUncontrolledSource = require('!!raw-loader!components/reactStrap/TooltipUncontrolled');

export const tooltipsPageData = [
    {
        title: 'Demo',
        example: TooltipExample,
        code: TooltipExampleSource,
    },
    {
        title: 'Tooltip Disable Autohide',
        example: TooltipAutoHideExample,
        code: TooltipExampleAutoHideSource,
    },
    {
        title: 'Tooltips List',
        example: TooltipExampleMulti,
        code: TooltipExampleMultiSource,
    },
    {
        title: 'Uncontrolled Tooltip',
        example: TooltipExampleUncontrolled,
        code: TooltipExampleUncontrolledSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Tooltip.propTypes = {
            // space separated list of triggers (e.g. "click hover focus")
            trigger: PropTypes.string,
            // boundaries for popper, can be scrollParent, window, viewport, or any DOM element
            boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
            // boolean to control the state of the tooltip
            isOpen: PropTypes.bool,
            hideArrow: PropTypes.bool,
            // callback for toggling isOpen in the controlling component. It will receive an object with info about the event that triggered it
            toggle: PropTypes.func,
            // target element or element ID, popover is attached to this element
            target:  PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.func,
              DOMElement, // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
            ]).isRequired,
            // Where to inject the popper DOM node, default to body
            container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
            // optionally override show/hide delays - default { show: 0, hide: 250 }
            delay: PropTypes.oneOfType([
              PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
              PropTypes.number
            ]),
            className: PropTypes.string,
            // Apply class to the inner-tooltip
            innerClassName: PropTypes.string,
            // Apply class to the arrow-tooltip ('arrow' by default)
            arrowClassName: PropTypes.string,
            // optionally hide tooltip when hovering over tooltip content - default true
            autohide: PropTypes.bool,
            // convenience attachments for popover
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
            ]),
            // Custom ref handler that will be assigned to the "ref" of the <div> wrapping the tooltip elements
            innerRef: PropTypes.oneOfType([
              PropTypes.func,
              PropTypes.string,
              PropTypes.object
            ])
          }`,
    },
]