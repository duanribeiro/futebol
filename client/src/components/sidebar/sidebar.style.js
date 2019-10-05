import styled from 'styled-components';
import { palette } from 'styled-theme';
const SidebarWrapper = styled.div`
    .close-drawer-icon {
        display: none;
        position: absolute;
        right: 15px;
        top: 18px;
        font-size: 20px;
        z-index: 5
        cursor: pointer;
        color: ${props => props.themeSetting.sidebarTransParentValue === 'on' ? 'white' :props.sidebarTheme.textColor} !important;
    }

    .sidebar-scrollbar-style {
        position: relative;
        display: block;
        width: 100%;
        cursor: pointer;
        border-radius: inherit;
        background-color: rgba(0, 0, 0, 0.2);
        height: 206px;
        transform: translateY(0px);
        background-color: ${props => props.themeSetting.sidebarTransParentValue === 'on' ? 'white' :props.sidebarTheme.textColor} !important;
        opacity: 0.4;
    }

    .sidelist-header-name {
        text-transform: uppercase!important;
        font-weight: 700;
        display: block;
        width: 100%;
        padding: .5rem 1rem;
        margin: 5px 10px 0;
        color: ${props => props.themeSetting.sidebarTransParentValue === 'on' ? 'white' :props.sidebarTheme.textColor} !important;
        opacity: 0.4;
        font-size: 13px;
        white-space: nowrap;
    }

    .second-child-list-icon {
        line-height: 25px !important;
    }
    
    .sideBack{
        background: ${palette('primary', 1)};
        overflow: hidden;
        margin-bottom: ${props => props.themeSetting.footerAlignValue === 'above' ? '50px' : '0px'};
        margin-top: ${props => props.themeSetting.toolbarAlignValue === 'above' ? '65px' : '0px'};
        // box-shadow: inset -1px 0px 0px 0px #DDDDDD;
        box-shadow: ${props => props.layoutTheme.themeName !== 'theme6' ? 'inset -1px 0px 0px 0px #DDDDDD' : ''};
    }

    .sidebar-wrapper{
    
        .nav-link {
            color: ${props => props.themeSetting.sidebarTransParentValue === 'on' ? 'white' :props.sidebarTheme.textColor} !important;
            &:hover {
                padding-left: 22px !important;
            }
        }

        .arrow-sidebar {
            color: ${props => props.themeSetting.sidebarTransParentValue === 'on' ? 'white' 
            : props.sidebarTheme.textColor + '!important'}
        }
        
        .main-list {
            line-height: 30px;
            font-size: 13px;
            font-weight: 600;
            white-space: nowrap;
            position: relative;
            text-transform: capitalize;
            color: #fff;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            display: block;
            height: auto;
            opacity: 1;
            transition: all .15s linear;
            p {
                span {
                    font-family: "montserrat-regular";
                }
            }
        }
    
        .child-list {
            margin: 0;
            line-height: 30px;
            font-size: 12px;
            font-weight: 400;
            white-space: nowrap;
            position: relative;
            color: #fff;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            display: block;
            height: auto;
            opacity: 1;
            transition: all .15s linear;
        }

        .active-sidebar-type-class {
            border-left: 3px solid ${props => props.themeSetting.sidebarTransParentValue === 'on' ? props.themeSetting.sidebarTransParentActiveColor :props.sidebarTheme.style4VarientActiveTextColor} !important;
            .child-list {
                margin: 5px 7px 0 !important;
            }
        }
    
        .active {

            color: ${props => (props.themeSetting.activeLinkStyle !== 'style1' || props.themeSetting.activeLinkStyle !== 'style5') ? (props.themeSetting.sidebarTransParentValue === 'on' && props.themeSetting.activeLinkStyle === 'style4') ? props.themeSetting.sidebarTransParentActiveColor + '!important' :props.sidebarTheme.activeRouteTextColor + '!important'  : ''};

            // style1
            background-color: ${props => (props.themeSetting.activeLinkStyle === 'style1' || props.themeSetting.activeLinkStyle === 'style5') ? props.themeSetting.sidebarTransParentValue === 'on' ? props.themeSetting.sidebarTransParentActiveBack :props.sidebarTheme.activeRouteBackColor : ''};
            font-weight: 600;

            // style5
            border-bottom-right-radius: ${props => props.themeSetting.activeLinkStyle === 'style5' ? '30px !important' : '4px' };
            border-top-right-radius: ${props => props.themeSetting.activeLinkStyle === 'style5' ? '30px !important' : '4px' };
            border-right: ${props => props.themeSetting.activeLinkStyle === 'style5' ? props.themeSetting.sidebarTransParentValue === 'on' ? '6px solid white !important' : '6px solid '+ props.sidebarTheme.textColor + '!important' : ''};

            // style2
            border: ${props => props.themeSetting.activeLinkStyle === 'style2' ? props.themeSetting.sidebarTransParentValue === 'on' ? '2px solid '+props.themeSetting.sidebarTransParentActiveBack : '2px solid '+props.sidebarTheme.activeRouteBackColor : ''};
            margin:  ${props => props.themeSetting.activeLinkStyle === 'style2' ? '5px 8px 0 !important': ''};

            //  style3
            border-left: ${props => props.themeSetting.activeLinkStyle === 'style3' ? props.themeSetting.sidebarTransParentValue === 'on' ? '4px solid '+props.themeSetting.sidebarTransParentActiveBack : '4px solid '+props.sidebarTheme.activeRouteBackColor: ''};
            border-radius: ${props => props.themeSetting.activeLinkStyle === 'style3' ? '0 !important' : ''};

            // style4
            color: ${props => props.themeSetting.activeLinkStyle === 'style4' ? props.themeSetting.sidebarTransParentValue === 'on' ? props.themeSetting.sidebarTransParentActiveColor + '!important' :props.sidebarTheme.style4VarientActiveTextColor + '!important' : ''};
        }
    }

    .sidebar-header {
        cursor: pointer;
        position: relative;
        z-index: 4;
        padding: 8px 0.7rem
        background-color: ${props => props.themeSetting.sidebarTransParentValue !== 'on' && props.sidebarTheme.header && props.sidebarTheme.header};
        .simple-text {            
            text-transform: uppercase;
            white-space: nowrap;
            font-size: 1rem;
            color: rgb(255, 255, 255);
            font-weight: 400;
            line-height: 30px;
            text-decoration: none;
            overflow: hidden;
        }
        .logo-mini {
            opacity: 1;
            float: left;
            text-align: center;
            margin-left: 12px;
            margin-right: 12px;
            padding: 6px 0px 8px;
            img {
                width: 34px;
                height: 34px;
            }
        }
        .logo-text {
            display: block;
            opacity: 1;
            transform: translateZ(0px);
            padding: 11px 0px 8px;
            color: ${props => props.themeSetting.sidebarTransParentValue === 'on' ? 'white' :props.sidebarTheme.textColor} !important;
            font-weight: 600;
        }
    }
`;

export default SidebarWrapper