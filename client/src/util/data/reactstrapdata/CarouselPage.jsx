/* eslint import/no-webpack-loader-syntax: off */

import CarouselExample from "components/reactStrap/Carousel";
import CarouselUncontrolledExample from "components/reactStrap/CarouselUncontrolled";
import CarouselCustomTagExample from "components/reactStrap/CarouselCustomTag";

const CarouselUncontrolledExampleSource = require("!!raw-loader!components/reactStrap/CarouselUncontrolled");
const CarouselExampleSource = require("!!raw-loader!components/reactStrap/Carousel");
const CarouselCustomTagExampleSource = require("!!raw-loader!components/reactStrap/CarouselCustomTag");

export const carouselPageData = [
    {
        title: "Demo",
        example: CarouselExample,
        code: CarouselExampleSource
    },
    {
        title: "Uncontrolled Carousel",
        example: CarouselUncontrolledExample,
        code: CarouselUncontrolledExampleSource
    },
    {
        title: "Carousel using a tag and classname",
        example: CarouselCustomTagExample,
        code: CarouselCustomTagExampleSource
    },
    {
        title: "Carousel Properties",
        example: null,
        code: `Carousel.propTypes = {
            // the current active slide of the carousel
            activeIndex: PropTypes.number,
            // a function which should advance the carousel to the next slide (via activeIndex)
            next: PropTypes.func.isRequired,
            // a function which should advance the carousel to the previous slide (via activeIndex)
            previous: PropTypes.func.isRequired,
            // controls if the left and right arrow keys should control the carousel
            keyboard: PropTypes.bool,
            /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
             * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
             */
            pause: PropTypes.oneOf(['hover', false]),
            // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
            // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
            ride: PropTypes.oneOf(['carousel']),
            // the interval at which the carousel automatically cycles (default: 5000)
            interval: PropTypes.oneOfType([
              PropTypes.number,
              PropTypes.string,
              PropTypes.bool,
            ]),
            children: PropTypes.array,
            // called when the mouse enters the Carousel
            mouseEnter: PropTypes.func,
            // called when the mouse exits the Carousel
            mouseLeave: PropTypes.func,
            // controls whether the slide animation on the Carousel works or not
            slide: PropTypes.bool,
            cssModule: PropTypes.object,
        };`
    },
    {
        title: "CarouselItem Properties",
        example: null,
        code: `CarouselItem.propTypes = {
            ...Transition.propTypes,
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            in: PropTypes.bool,
            cssModule: PropTypes.object,
            children: PropTypes.node,
            slide: PropTypes.bool,
        };`
    },
    {
        title: "CarouselControl Properties",
        example: null,
        code: `CarouselControl.propTypes = {
            direction: PropTypes.oneOf(['prev', 'next']).isRequired,
            onClickHandler: PropTypes.func.isRequired,
            cssModule: PropTypes.object,
            directionText: PropTypes.string
        };`
    },
    {
        title: "CarouselIndicators Properties",
        example: null,
        code: `CarouselIndicators.propTypes = {
            items: PropTypes.array.isRequired,
            activeIndex: PropTypes.number.isRequired,
            cssModule: PropTypes.object,
            onClickHandler: PropTypes.func.isRequired
        };`
    },
    {
        title: "CarouselCaption Properties",
        example: null,
        code: `CarouselCaption.propTypes = {
            captionHeader: PropTypes.string,
            captionText: PropTypes.string.isRequired,
            cssModule: PropTypes.object
        };`
    },
    {
        title: "Uncontrolled Carousel Properties",
        example: null,
        code: `UncontrolledCarousel.propTypes = {
            items: PropTypes.array.isRequired,
            indicators: PropTypes.bool, // default: true
            controls: PropTypes.bool, // default: true
            autoPlay: PropTypes.bool, // default: true
        };`
    }
];
