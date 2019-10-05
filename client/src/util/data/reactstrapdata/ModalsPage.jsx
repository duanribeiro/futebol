/* eslint import/no-webpack-loader-syntax: off */

import ModalExample from 'components/reactStrap/Modal';
import ModalBackdropExample from 'components/reactStrap/ModalBackdrop';
import ModalNestedExample from 'components/reactStrap/ModalNested';
import ModalCustomTimeoutExample from 'components/reactStrap/ModalCustomTimeout';
import ModalFadelessExample from 'components/reactStrap/ModalFadeless';
import ModalExternalExample from 'components/reactStrap/ModalExternal';
import ModalCustomCloseIconExample from 'components/reactStrap/ModalCustomCloseIcon';
import ModalCustomCloseButtonExample from 'components/reactStrap/ModalCustomCloseButton';

const ModalBackdropExampleSource = require('!!raw-loader!components/reactStrap/ModalBackdrop');
const ModalCustomCloseButtonExampleSource = require('!!raw-loader!components/reactStrap/ModalCustomCloseButton');
const ModalCustomCloseIconExampleSource = require('!!raw-loader!components/reactStrap/ModalCustomCloseIcon');
const ModalCustomTimeoutExampleSource = require('!!raw-loader!components/reactStrap/ModalCustomTimeout');
const ModalExampleSource = require('!!raw-loader!components/reactStrap/Modal');
const ModalExternalExampleSource = require('!!raw-loader!components/reactStrap/ModalExternal');
const ModalFadelessExampleSource = require('!!raw-loader!components/reactStrap/ModalFadeless');
const ModalNestedExampleSource = require('!!raw-loader!components/reactStrap/ModalNested');

export const modalsPageData = [
    {
        title: 'Demo',
        example: ModalExample,
        code: ModalExampleSource,
    },
    {
        title: 'Backdrop',
        example: ModalBackdropExample,
        code: ModalBackdropExampleSource,
    },
    {
        title: 'Nested Modals',
        example: ModalNestedExample,
        code: ModalNestedExampleSource,
    },
    {
        title: 'Modals with Custom Transition Timeouts',
        example: ModalCustomTimeoutExample,
        code: ModalCustomTimeoutExampleSource,
    },
    {
        title: 'Modals without Fade Effect',
        example: ModalFadelessExample,
        code: ModalFadelessExampleSource,
    },
    {
        title: 'Modals with external button',
        example: ModalExternalExample,
        code: ModalExternalExampleSource,
    },
    {
        title: 'Modals with custom close icon',
        example: ModalCustomCloseIconExample,
        code: ModalCustomCloseIconExampleSource,
    },
    {
        title: 'Modals with custom close button',
        example: ModalCustomCloseButtonExample,
        code: ModalCustomCloseButtonExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Modal.propTypes = {
            // boolean to control the state of the popover
            isOpen:  PropTypes.bool,
            autoFocus: PropTypes.bool,
            // if modal should be centered vertically in viewport
            centered: PropTypes.bool,
            // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
            size: PropTypes.string,
            // callback for toggling isOpen in the controlling component
            toggle:  PropTypes.func,
            role: PropTypes.string, // defaults to "dialog"
            // used to reference the ID of the title element in the modal
            labelledBy: PropTypes.string,
            keyboard: PropTypes.bool,
            // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
            backdrop: PropTypes.oneOfType([
              PropTypes.bool,
              PropTypes.oneOf(['static'])
            ]),
            // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
            // external: PropTypes.node,
            // called on componentDidMount
            onEnter: PropTypes.func,
            // called on componentWillUnmount
            onExit: PropTypes.func,
            // called when done transitioning in
            onOpened: PropTypes.func,
            // called when done transitioning out
            onClosed: PropTypes.func,
            className: PropTypes.string,
            wrapClassName: PropTypes.string,
            modalClassName: PropTypes.string,
            backdropClassName: PropTypes.string,
            contentClassName: PropTypes.string,
            // boolean to control whether the fade transition occurs (default: true)
            fade: PropTypes.bool,
            cssModule: PropTypes.object,
            // zIndex defaults to 1000.
            zIndex: PropTypes.oneOfType([
              PropTypes.number,
              PropTypes.string,
            ]),
            // backdropTransition - controls backdrop transition
            // timeout is 150ms by default to match bootstrap
            // see [Fade](/components/fade/) for more details
            backdropTransition: PropTypes.shape(Fade.propTypes),
            // modalTransition - controls modal transition
            // timeout is 300ms by default to match bootstrap
            // see [Fade](/components/fade/) for more details
            modalTransition: PropTypes.shape(Fade.propTypes),
            innerRef: PropTypes.object,
        }`,
    },
]