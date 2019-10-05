import styled from 'styled-components';
import { palette } from 'styled-theme';
const ActionWidgetWrapper = styled.div`
    .action-widget-card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03), 0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03), 0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
        border-radius: 6px;
        .action-card-title {
            font-size: 24px;
            font-weight: 600;
        }

        .media-headline {
            position: absolute;
            font-size: 24px!important;
            line-height: 32px!important;
            color: white;
            font-weight: 600;
            padding: 24px;
        }

        .action-card-discription {
            font-size: 14px;
            font-weight: 500;
            color: ${palette('grayscale', 0)};
        }

        .price-button {
            border-radius: 30px;
            will-change: box-shadow;
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
            color: #fff;
            font-size: 13px;
            padding: 5px 15px;
            outline: 0;
            font-weight: 500;
            cursor: pointer;
            border: 0px;
            align-items: center;
            background-color: ${palette('primary', 0)};
        }

        .action-widget-image {
            height: 250px;
            object-fit: cover;
        }
        

        .like-icon {
            font-size: 24px;
            color: ${palette('color', 0)};
        }

        .cart-icon {
            font-size: 24px;
            color: rgba(0,0,0,.54);
        }

        .share-icon {
            font-size: 24px;
            color: rgba(0,0,0,.54);
        }
    }
`;

export default ActionWidgetWrapper