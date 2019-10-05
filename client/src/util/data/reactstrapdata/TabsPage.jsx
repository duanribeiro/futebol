/* eslint import/no-webpack-loader-syntax: off */

import TabsExample from 'components/reactStrap/Tabs';
const TabsExampleSource = require('!!raw-loader!components/reactStrap/Tabs');

export const tabsPageData = [
    {
        title: 'Demo',
        example: TabsExample,
        code: TabsExampleSource,
    }
]