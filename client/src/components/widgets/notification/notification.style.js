import styled from 'styled-components';
import { palette } from 'styled-theme';
const NotificationWidgetWrapper = styled.div`    
    .notification-card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03), 0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03), 0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
        border-radius: 6px;
        background: white;
        .notifiaction-header {
            font-size: 20px;
            font-weight: 600;
            padding: 20px 24px;
        }

        .show-more {
            font-weight: 600;
            cursor: pointer;
        }
        
        .noification-list {
            color: rgba(0,0,0,.54);
            font-size: 14px;
            .list-container {
                border-top: 1px solid rgba(0,0,0,0.1);
            }
        }

        .notifiaction-icon {
            padding: 10px;
            border-radius: 50%;
            background:  ${palette('color', 4)};
            color: white
        }
    }
`;

export default NotificationWidgetWrapper