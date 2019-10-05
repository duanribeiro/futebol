import styled from 'styled-components';
const BarChartWidgetWrapper = styled.div`    
    .bar-widget-card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03), 0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03), 0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
        border-radius: 6px;
        background-color: ${props => props.background ? props.background : '#ffffff'};
        color: ${props => props.dark ? '#ffffff': '#000000'};
        .bar-widget-card-info {
            font-size: 13px;
        }
    }
`;

export default BarChartWidgetWrapper