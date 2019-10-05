import styled from 'styled-components';

const HeaderWrapper = styled.div`
    .headerBack{
        background: ${props => props.topbarTheme.backgroundColor};
        padding: 15px 10px;
        margin-left: -${props => (props.themeSetting.toolbarAlignValue === 'above' && !props.mini) ? 
                        props.drawerWidth :  
                        (props.themeSetting.toolbarAlignValue === 'above' && props.mini) ? 
                        props.miniDrawerWidth === props.drawerWidth ? '80px': props.miniDrawerWidth : '0px'
                    };
        @media  only screen and (max-width: 767.98px) {
            margin-left : 0px !important;
        }

        .drawer-handle-arrow {
            @media  only screen and (max-width: 767.98px) {
                display: none;
            }
        }

        .mini-drawer-menu-icon {
            margin: 6px auto;
            justify-content: center;
            cursor: pointer;
            display: none;
            color: ${props => props.topbarTheme.textColor};
            @media  only screen and (max-width: 767.98px) {
                display: block;
            }
            i {
                font-size: 20px;
                margin-right: 10px;
                position: relative;
                top: 2px;
            
            }
            .app-name {
                font-weight: 600;
            }
        }

        .top-header-icon {
            padding: 8px;
            border-radius: 50%;
            cursor: pointer;
            width: 35px;
            height: 35px;
            background: ${props => props.topbarTheme.textColor};
            color: ${props => props.topbarTheme.backgroundColor};
            opacity: 0.9;
            transition: opacity 2s;
            &:hover {
                opacity: 1;
            }
            display: flex !important;
            align-items: center;
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
        
        .top-header-profile-class {
            border-radius: 50%; 
            width: 35px;
            height: 35px;
            cursor:pointer;
            @media  only screen and (max-width: 575.98px) {
                width: 32px;
                height: 32px;
                margin-top: 2px;
            }
        }
    }

`;

export default HeaderWrapper