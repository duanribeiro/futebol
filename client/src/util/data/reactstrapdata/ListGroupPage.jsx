/* eslint import/no-webpack-loader-syntax: off */

import ListGroupExample from 'components/reactStrap/ListGroup';
import ListGroupBadgeExample from 'components/reactStrap/ListGroupBadge';
import ListGroupDisabledItemsExample from 'components/reactStrap/ListGroupDisabledItems';
import ListGroupAnchorsAndButtonsExample from 'components/reactStrap/ListGroupAnchorsAndButtons';
import ListGroupContextualClassesExample from 'components/reactStrap/ListGroupContextualClasses';
import ListGroupCustomContentExample from 'components/reactStrap/ListGroupCustomContent';
import ListGroupFlushExample from 'components/reactStrap/ListGroupFlush';

const ListGroupBadgeExampleSource = require('!!raw-loader!components/reactStrap/ListGroupBadge');
const ListGroupExampleSource = require('!!raw-loader!components/reactStrap/ListGroup');
const ListGroupDisabledItemsExampleSource = require('!!raw-loader!components/reactStrap/ListGroupDisabledItems');
const ListGroupAnchorsAndButtonsExampleSource = require('!!raw-loader!components/reactStrap/ListGroupAnchorsAndButtons');
const ListGroupContextualClassesExampleSource = require('!!raw-loader!components/reactStrap/ListGroupContextualClasses');
const ListGroupCustomContentExampleSource = require('!!raw-loader!components/reactStrap/ListGroupCustomContent');
const ListGroupFlushExampleSource = require('!!raw-loader!components/reactStrap/ListGroupFlush')

export const listGroupPageData = [
    {
        title: 'Demo',
        example: ListGroupExample,
        code: ListGroupExampleSource,
    },
    {
        title: 'Tags',
        example: ListGroupBadgeExample,
        code: ListGroupBadgeExampleSource,
    },
    {
        title: 'Disabled items',
        example: ListGroupDisabledItemsExample,
        code: ListGroupDisabledItemsExampleSource,
    },
    {
        title: 'Anchors and buttons',
        example: ListGroupAnchorsAndButtonsExample,
        code: ListGroupAnchorsAndButtonsExampleSource,
    },
    {
        title: 'Contextual classes',
        example: ListGroupContextualClassesExample,
        code: ListGroupContextualClassesExampleSource,
    },
    {
        title: 'Custom content',
        example: ListGroupCustomContentExample,
        code: ListGroupCustomContentExampleSource
    },
    {
        title: 'Flush',
        example: ListGroupFlushExample,
        code: ListGroupFlushExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `ListGroup.propTypes = {
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            // boolean to render list group items edge-to-edge in a parent container
            flush: PropTypes.bool,
            className: PropTypes.string,
            cssModule: PropTypes.object,
        }`,
    },
]