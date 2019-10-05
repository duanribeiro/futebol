import styled from 'styled-components';
const ProfileWidgetWrapper = styled.div`
    .profile-widget-card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03), 0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03), 0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
        border-radius: 6px;
        text-align: center;
        padding:24px;
        background: ${props => props.background};
        .profile-widget-icon {
            i{
                font-size: 50px;
                border-radius: 50%;
                padding: 37px;
                color: ${props => props.iconColor};
                background: ${props => props.iconBackground};
            }
        }
        .profile-image {
            img {
                width: 125px;
                height: 125px;
                border-radius: 50%;
            }
        }
        .card-title {
            font-size: 24px;
            line-height: 32px;
            font-weight: 600;
            margin-top: 10px;
            color: ${props => props.dark ? 'white' : 'black'}
        }

        .card-discription {
            font-size: 14px;
            color: ${props => props.dark ? 'white' : 'black'}
        }
    }
`;

export default ProfileWidgetWrapper