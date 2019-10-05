/* eslint import/no-webpack-loader-syntax: off */


import PaginationStateExample from 'components/reactStrap/PaginationState';
import PaginationExample from 'components/reactStrap/Pagination';
import PaginationSizingLargeExample from 'components/reactStrap/PaginationSizingLarge';
import PaginationSizingSmallExample from 'components/reactStrap/PaginationSizingSmall';

const PaginationExampleSource = require('!!raw-loader!components/reactStrap/Pagination');
const PaginationStateExampleSource = require('!!raw-loader!components/reactStrap/PaginationState');
const PaginationSizingLargeExampleSource = require('!!raw-loader!components/reactStrap/PaginationSizingLarge');
const PaginationSizingSmallExampleSource = require('!!raw-loader!components/reactStrap/PaginationSizingSmall');

export const paginationPageData = [
    {
        title: 'Demo',
        example: PaginationExample,
        code: PaginationExampleSource,
    },
    {
        title: 'Disabled and active states',
        example: PaginationStateExample,
        code: PaginationStateExampleSource,
    },
    {
        title: 'Sizing - lg',
        example: PaginationSizingLargeExample,
        code: PaginationSizingLargeExampleSource,
    },
    {
        title: 'Sizing - sm',
        example: PaginationSizingSmallExample,
        code: PaginationSizingSmallExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Pagination.propTypes = {
            children: PropTypes.node,
            className: PropTypes.string,
            listClassName: PropTypes.string,
            cssModule: PropTypes.object,
            size: PropTypes.string,
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            'aria-label': PropTypes.string
            };
            PaginationItem.propTypes = {
            active: PropTypes.bool,
            children: PropTypes.node,
            className: PropTypes.string,
            cssModule: PropTypes.object,
            disabled: PropTypes.bool,
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            };
            PaginationLink.propTypes = {
            children: PropTypes.node,
            className: PropTypes.string,
            cssModule: PropTypes.object,
            next: PropTypes.bool,
            previous: PropTypes.bool,
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            'aria-label': PropTypes.string
        };`,
    },
]