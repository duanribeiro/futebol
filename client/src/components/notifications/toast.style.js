import styled from 'styled-components';

const ToastWrapper = styled.div`
    .custom-toast {
        border: 0;
        border-radius: 3px;
        // color: #fff;
        padding-top: .9rem;
        padding-bottom: .9rem;
        position: relative;
        transition: all 1s;
        // background-color: #66c4de;
        width: ${props => props.width}px;
        padding: .75rem 2.27rem .75rem 1.25rem ;

        .close-icon {
            position: absolute;
            right: 20px;
            top: 25px;
            font-size: 20px;
            cursor: pointer;
        }
    }

    .top-left {
        position: fixed;
        top: 8%;
        left: 3%;
        z-index: 5;
        @media  only screen and (max-width: 575.98px) {
            left: 10%;
            width: 291px;
        }
    }

    .top-right {
        position: fixed;
        top: 8%;
        right: 3%;
        z-index: 5;
        @media  only screen and (max-width: 575.98px) {
            right: 10%;
            width: 291px;
        }
    }

    .top-middle {
        position: fixed;
        top: 8%;
        right: 37%;
        z-index: 5;
        @media  only screen and (min-width: 768px) and (max-width: 991.98px) {
            right: 27%;
        }
        @media  only screen and (min-width: 576px) and (max-width: 767.98px) {
            right: 23%;
        }
        @media  only screen and (max-width: 575.98px) {
            right: 10%;
            width: 291px;
        }
    }

    .bottom-left {
        position: fixed;
        bottom: 8%;
        left: 3%;
        z-index: 5;
        @media  only screen and (max-width: 575.98px) {
            left: 10%;
            width: 291px;
        }
    }

    .bottom-right {
        position: fixed;
        bottom: 8%;
        right: 3%;
        z-index: 5;
        @media  only screen and (max-width: 575.98px) {
            right: 10%;
            width: 291px;
        }
    }

    .bottom-middle {
        position: fixed;
        bottom: 8%;
        right: 37%;
        z-index: 5;
        @media  only screen and (min-width: 768px) and (max-width: 991.98px) {
            right: 27%;
        }
        @media  only screen and (min-width: 576px) and (max-width: 767.98px) {
            right: 23%;
        }
        @media  only screen and (max-width: 575.98px) {
            right: 10%;
            width: 291px;
        }
    }
`;

export default ToastWrapper;