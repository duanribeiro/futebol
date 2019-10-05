import styled from 'styled-components';
const MiniWidgetWrapper = styled.div`
    .mini-widget-card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03), 0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03), 0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
        border-radius: 6px;
        padding: 16px;
        font-size: 16px;
        font-weight: 600
        background-color: ${props => props.background};
        color: ${props => props.dark ? '#ffffff': '#000000'};
        i {
            font-size: 50px;
            color:  ${props => props.iconColor};
        }

        .subheader {
            font-size: 14px;
        }

    }
`;

export default MiniWidgetWrapper