export const sweetAlertCode = `
import SweetAlert from 'react-bootstrap-sweetalert'

<SweetAlert 
    title="Here's a message!" 
    onConfirm={this.toggleBasicAlert} 
    show={basicAlert}
/>`;

export const buttonApiCode = `
// Import Custom Button Component
import Button from 'components/button/Button';

// Solid Button
// c-btn, c-primary, c-secondary, c-info, c-success, c-warning, c-danger, c-focus, c-light, c-dark, c-link
<Button className="c-btn c-primary">Primary</Button>

// Color transition with no border
// c-btn, no-border, c-outline-primary,  c-outline-secondary, c-outline-info, c-outline-warning, c-outline-danger, c-outline-focus, c-outline-light, c-outline-dark, c-outline-link
<Button className="c-btn no-border c-outline-primary">Primary</Button>

// Color transition
// c-btn, c-outline-primary,  c-outline-secondary, c-outline-info, c-outline-warning, c-outline-danger, c-outline-focus, c-outline-light, c-outline-dark, c-outline-link
<Button className="c-btn c-outline-primary">Primary</Button>

// Disabled
<Button disabled className="c-btn c-primary">Primary</Button>

//  Sizing
c-btn, c-btn-lg, c-btn-sm, c-btn-wide
<Button className="c-btn c-primary c-btn-lg c-btn-wide">Wider Large</Button>

//  Loding Button
//  dataStyle: expand-left, expand-right, middle, expand-up, expand-down
<Button 
    onClick={this.yourButtonClickMethod} 
    loading 
    className="c-btn c-primary" 
    dataStyle="expand-left"
>
    Expand Left
</Button>

// Dash Bordered
<Button className="c-btn c-btn-dashed c-outline-primary">Primary</Button>

// Rounded Button
<Button className="c-btn c-rounded c-primary">Primary</Button>
`;

export const notificationApiCode = `
import CustomToast from 'components/notifications/CustomToast';

<CustomToast
    heading="Notify!"
    width={400}
    show={Boolean}
    transition={Boolean}
    position="bottom-right"
    className="c-focus"
    message="Focus Notification"
    onCloseCLick={() => this.YourHandlingMethod()}
/>`;

export const gaugeCode = `
import Gauge from 'react-svg-gauge';
<Gauge 
    value={value} 
    width={300} 
    height={280}
/>
`;

export const calenderCode = `
import Scheduler, {SchedulerData, ViewTypes,  from 'react-big-scheduler'
import withDragDropContext from '../util/withDnDContext'
import 'react-big-scheduler/lib/css/style.css'

<Scheduler schedulerData={schedulerData}
   prevClick={this.prevClick}
   nextClick={this.nextClick}
   onSelectDate={this.onSelectDate}
   onViewChange={this.onViewChange}
   eventItemClick={this.eventClicked}
/>
`;

export const chartCode = `
import { Doughnut,  Pie,  Bubble,  Bar } from 'react-chartjs-2';
`;

export const regularTableCode = `
import ReactRegularTable from 'components/tables/regulartable/ReactRegularTable;
import { regularTabelData, regularTabelColumns} from 'util/data/regularTableData';

<ReactRegularTable
    data = { regularTabelData }
    column = { regularTabelColumns }
    dark = { Boolean }
    headerDark = { Boolean }
    striped = { Boolean }
    bordered = { Boolean }
    borderless = { Boolean }
    hover = { Boolean }
    small = { Boolean }
/>`;

export const reactTableCode = `
import ReactTable from "react-table";
import 'react-table/react-table.css';

<ReactTable
    data={data}
    columns={columns}
/>
`;

export const customButtonImport = `import Button from 'components/button/Button`;
