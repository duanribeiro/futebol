/* eslint import/no-webpack-loader-syntax: off */

import MediaExample from 'components/reactStrap/Media';
import MediaNestedExample from 'components/reactStrap/MediaNested';
import MediaAlignmentExample from 'components/reactStrap/MediaAlignment';
import MediaListExample from 'components/reactStrap/MediaList';

const MediaExampleSource = require('!!raw-loader!components/reactStrap/Media');
const MediaNestedExampleSource = require('!!raw-loader!components/reactStrap/MediaNested');
const MediaAlignmentExampleSource = require('!!raw-loader!components/reactStrap/MediaAlignment');
const MediaListExampleSource = require('!!raw-loader!components/reactStrap/MediaList');

export const mediaPageData = [
    {
        title: 'Demo',
        example: MediaExample,
        code: MediaExampleSource,
    },
    {
        title: 'Nesting',
        example: MediaNestedExample,
        code: MediaNestedExampleSource,
    },
    {
        title: 'Alignment',
        example: MediaAlignmentExample,
        code: MediaAlignmentExampleSource,
    },
    {
        title: 'Media list',
        example: MediaListExample,
        code: MediaListExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Media.propTypes = {
        body: PropTypes.bool,
        bottom: PropTypes.bool,
        children: PropTypes.node,
        className: PropTypes.string,
        heading: PropTypes.bool,
        left: PropTypes.bool,
        list: PropTypes.bool,
        middle: PropTypes.bool,
        object: PropTypes.bool,
        right: PropTypes.bool,
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        top: PropTypes.bool,
};`,
    },
]