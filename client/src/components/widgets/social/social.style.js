import styled from 'styled-components';
const SocialWidgetWrapper = styled.div`
    .social-widget-card {
        background: 'white';
        box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03), 0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03), 0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
        i {
            line-height: 1;
            font-size: 50px;
            color: ${props => props.iconColor}
        }

        .rightBackground {
            color: ${props => props.dark ? '#fff': '#000'}
            background: ${props => props.iconColor}
        }

        .headline {
            font-size: 20px; 
        }

        .subheader {
            font-size: 12px;
        }
    }
`;

export default SocialWidgetWrapper