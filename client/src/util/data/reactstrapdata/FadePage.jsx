/* eslint import/no-webpack-loader-syntax: off */

import FadeExample from 'components/reactStrap/Fade';
const FadeExampleSource = require('!!raw-loader!components/reactStrap/Fade');

export const fadePageData = [
    {
        title: 'Demo',
        example: FadeExample,
        code: FadeExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Fade.propTypes = {
            // Controls if the fade is currently showing or not (default: true)
            in: PropTypes.bool, 
            // All of these match [react-transition-group/Transition](https://reactcommunity.org/react-transition-group/#Transition) props
            mountOnEnter: PropTypes.bool,
            unmountOnExit: PropTypes.bool,
            appear: PropTypes.bool, // (default: true)
            enter: PropTypes.bool,  // (default: true)
            exit: PropTypes.bool,   // (default: true)
            timeout: PropTypes.oneOfType([ // (default: 150)
                PropTypes.number,
                PropTypes.shape({
                    enter: PropTypes.number,
                    exit: PropTypes.number,
                }).isRequired,
            ]),
            addEndListener: PropTypes.func,
            onEnter: PropTypes.func,
            onEntering: PropTypes.func,
            onEntered: PropTypes.func,
            onExit: PropTypes.func,
            onExiting: PropTypes.func,
            onExited: PropTypes.func,
            // The component(s) that should be faded
            children: PropTypes.oneOfType([
                PropTypes.arrayOf(PropTypes.node),
                PropTypes.node
            ]),
            // Pass in a component or primitive component name to override the default element
            // (default: 'div')
            tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
            // Class always applied to the Fade element (default: 'fade')
            baseClass: PropTypes.string,
            // Class applied to transition the Fade element in (default: 'show')
            baseClassActive: PropTypes.string,
            // Other classes that should always be applied
            className: PropTypes.string,
            cssModule: PropTypes.object,
            // Any other props provided will be applied to the element created (specified by tag)
        }`,
    },
]