/* eslint import/no-webpack-loader-syntax: off */

import TableExample from 'components/reactStrap/Table';
import TableBorderedExample from 'components/reactStrap/TableBordered';
import TableBorderlessExample from 'components/reactStrap/TableBorderless';
import TableHoverExample from 'components/reactStrap/TableHover';
import TableDarkExample from 'components/reactStrap/TableDark';
import TableResponsiveExample from 'components/reactStrap/TableResponsive';
import TableSizingExample from 'components/reactStrap/TableSizing';
import TableStripedExample from 'components/reactStrap/TableStriped';

const TableExampleSource = require('!!raw-loader!components/reactStrap/Table');
const TableBorderedExampleSource = require('!!raw-loader!components/reactStrap/TableBordered');
const TableBorderlessExampleSource = require('!!raw-loader!components/reactStrap/TableBorderless');
const TableHoverExampleSource = require('!!raw-loader!components/reactStrap/TableHover');
const TableDarkExampleSource = require('!!raw-loader!components/reactStrap/TableDark');
const TableResponsiveExampleSource = require('!!raw-loader!components/reactStrap/TableResponsive');
const TableSizingExampleSource = require('!!raw-loader!components/reactStrap/TableSizing');
const TableStripedExampleSource = require('!!raw-loader!components/reactStrap/TableStriped');

export const tablesPageData = [
    {
        title: 'Demo',
        example: TableExample,
        code: TableExampleSource,
    },
    {
        title: 'Dark table',
        example: TableDarkExample,
        code: TableDarkExampleSource,
    },
    {
        title: 'Striped rows',
        example: TableStripedExample,
        code: TableStripedExampleSource,
    },
    {
        title: 'Bordered table',
        example: TableBorderedExample,
        code: TableBorderedExampleSource,
    },
    {
        title: 'Borderless table',
        example: TableBorderlessExample,
        code: TableBorderlessExampleSource,
    },
    {
        title: 'Hoverable rows',
        example: TableHoverExample,
        code: TableHoverExampleSource,
    },
    {
        title: 'Small table',
        example: TableSizingExample,
        code: TableSizingExampleSource,
    },
    {
        title: 'Responsive table',
        example: TableResponsiveExample,
        code: TableResponsiveExampleSource,
    },
    {
        title: 'Properties',
        example: null,
        code: `Table.propTypes = {
            // Pass in a Component to override default element
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            size: PropTypes.string,
            bordered: PropTypes.bool,
            borderless: PropTypes.bool,
            striped: PropTypes.bool,
            dark: PropTypes.bool,
            hover: PropTypes.bool,
            responsive: PropTypes.bool,
            // Custom ref handler that will be assigned to the "ref" of the inner <table> element
            innerRef: PropTypes.oneOfType([
              PropTypes.func,
              PropTypes.string,
              PropTypes.object
            ])
        };`,
    },
]