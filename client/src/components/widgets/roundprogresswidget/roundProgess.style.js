import styled from 'styled-components';
const RoundProgressWrapper = styled.div`    
    .round-widget-card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03), 0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03), 0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
        border-radius: 6px;
        background-color: ${props => props.background};
        color: ${props => props.dark ? '#ffffff': '#000000'};
        .round-widget-header {
            padding: 16px;
            font-size: 15px;
            font-weight: 600;
        }
        .round-widget-card-info {
            font-size: 13px;
        }
        .react-sweet-progress-symbol {
            color: ${props => props.dark ? '#ffffff': '#000000'};
        }
    }
`;

export default RoundProgressWrapper