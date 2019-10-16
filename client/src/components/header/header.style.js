import styled from 'styled-components';

const HeaderWrapper = styled.div`
    .headerBack{
        .top-header-icon {
            margin-left: 20px;
            border-radius: 50%;
            cursor: pointer;
            width: 50px;
            height: 50px;
            background: ${props => props.topbarTheme.textColor};
            color: ${props => props.topbarTheme.backgroundColor};
            opacity: 0.9;
            transition: opacity 2s;
            &:hover {
                opacity: 1;
            }
            display: flex !important;
            justify-content: center;
            @media  only screen and (max-width: 575.98px) {
                width: 32px;
                height: 32px;
                padding: 6px;
                margin-top: 2px;
            }
            i {
                font-size: 16px;
                @media  only screen and (max-width: 575.98px) {
                    font-size: 13px;
                }
            }
        }
    }

`;

export default HeaderWrapper