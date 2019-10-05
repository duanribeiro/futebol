/* eslint import/no-webpack-loader-syntax: off */

import CardExample from "components/reactStrap/Card";
import CardContentExample from "components/reactStrap/CardContentTypes";
import CardSizingExample from "components/reactStrap/CardSizing";
import CardAlignmentExample from "components/reactStrap/CardAlignment";
import CardHeaderFooterExample from "components/reactStrap/CardHeaderFooter";
import CardImageCapsExample from "components/reactStrap/CardImageCaps";
import CardImageOverlayExample from "components/reactStrap/CardImageOverlay";
import CardBackgroundsExample from "components/reactStrap/CardBackgrounds";
import CardOutlineExample from "components/reactStrap/CardOutline";
import CardGroupsExample from "components/reactStrap/CardGroups";
import CardDecksExample from "components/reactStrap/CardDecks";
import CardColumnsExample from "components/reactStrap/CardColumns";

const CardExampleSource = require("!!raw-loader!components/reactStrap/Card");
const CardContentExampleSource = require("!!raw-loader!components/reactStrap/CardContentTypes");
const CardSizingExampleSource = require("!!raw-loader!components/reactStrap/CardSizing");
const CardAlignmentExampleSource = require("!!raw-loader!components/reactStrap/CardAlignment");
const CardHeaderFooterExampleSource = require("!!raw-loader!components/reactStrap/CardHeaderFooter");
const CardImageCapsExampleSource = require("!!raw-loader!components/reactStrap/CardImageCaps");
const CardImageOverlayExampleSource = require("!!raw-loader!components/reactStrap/CardImageOverlay");
const CardBackgroundsExampleSource = require("!!raw-loader!components/reactStrap/CardBackgrounds");
const CardOutlineExampleSource = require("!!raw-loader!components/reactStrap/CardOutline");
const CardGroupsExampleSource = require("!!raw-loader!components/reactStrap/CardGroups");
const CardDecksExampleSource = require("!!raw-loader!components/reactStrap/CardDecks");
const CardColumnsExampleSource = require("!!raw-loader!components/reactStrap/CardColumns");

export const CardPageData = [
    {
        title: "Demo",
        example: CardExample,
        code: CardExampleSource
    },
    {
        title: "Content Types",
        example: CardContentExample,
        code: CardContentExampleSource
    },
    {
        title: "Sizing",
        example: CardSizingExample,
        code: CardSizingExampleSource
    },
    {
        title: "Text alignment",
        example: CardAlignmentExample,
        code: CardAlignmentExampleSource
    },
    {
        title: "Header and Footer",
        example: CardHeaderFooterExample,
        code: CardHeaderFooterExampleSource
    },
    {
        title: "Image caps",
        example: CardImageCapsExample,
        code: CardImageCapsExampleSource
    },
    {
        title: "Image overlays",
        example: CardImageOverlayExample,
        code: CardImageOverlayExampleSource
    },
    {
        title: "Background variants",
        example: CardBackgroundsExample,
        code: CardBackgroundsExampleSource
    },
    {
        title: "Outline variants",
        example: CardOutlineExample,
        code: CardOutlineExampleSource
    },
    {
        title: "Groups",
        example: CardGroupsExample,
        code: CardGroupsExampleSource
    },
    {
        title: "Decks",
        example: CardDecksExample,
        code: CardDecksExampleSource
    },
    {
        title: "Columns",
        example: CardColumnsExample,
        code: CardColumnsExampleSource
    },
    {
        title: "Properties",
        example: null,
        code: `Card.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            inverse: PropTypes.bool,
            color: PropTypes.string,
            body: PropTypes.bool,
            className: PropTypes.string
        };
        
        CardBody.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string
        };
        
        CardColumns.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string
        };
        
        CardDeck.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string
        };
        
        CardFooter.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string
        };
        
        CardGroup.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string
        };
        
        CardHeader.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string
        };
        
        CardImg.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string,
            // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
            top: PropTypes.bool,
            bottom: PropTypes.bool
        };
        
        CardImgOverlay.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string
        };
        
        CardLink.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string,
            // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
            innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
        };
        
        CardSubtitle.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string
        };
        
        CardText.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string
        };
        
        CardTitle.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            className: PropTypes.string
        };`
    }
];
