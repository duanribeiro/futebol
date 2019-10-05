/* eslint import/no-webpack-loader-syntax: off */

import JumbotronExample from 'components/reactStrap/Jumbotron';
import JumbotronFluidExample from "components/reactStrap/JumbotronFluid";

const JumbotronExampleSource = require('!!raw-loader!components/reactStrap/Jumbotron');
const JumbotronFluidExampleSource = require('!!raw-loader!components/reactStrap/JumbotronFluid');

export const jumbotronPageData = [
    {
        title: 'Demo',
        example: JumbotronExample,
        code: JumbotronExampleSource,
    },
    {
        title: 'Fluid Jumbotron',
        example: JumbotronFluidExample,
        code: JumbotronFluidExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Jumbotron.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            fluid: PropTypes.bool,
            className: PropTypes.string
        };`,
    },
]