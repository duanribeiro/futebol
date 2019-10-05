import styled from 'styled-components';

const GlobalWrapper = styled.div`
    .react-strap-doc {
        table, .form-control-plaintext {
            color: ${props => props.layoutTheme.textColor};
        }
        .badges-heading-block {
            h1,h2,h3,h4,h5,h6 {
                color: ${props => props.layoutTheme.headingColor} !important;
            }
        }
        .form-control-plaintext {
            color: ${props => props.layoutTheme.headingColor} !important;
        }
        legend, .doc-title {
            color: ${props => props.layoutTheme.headingColor};    
        }

        .doc-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .doc-description {
            font-size: 14px;
            font-weight: 500;
            color: ${props => props.layoutTheme.textColor};    
        }

        .inline-strap-form {
            @media (max-width: 575.98px) {
                .form-group {
                    width: 100%;
                }
                button {
                    display: block;
                    width: 100%;
                    margin-top: 10px;
                }
                input {
                    width: 100%;
                }
            }
        }
        
        .jumbotron {
            padding: 1rem 1rem !important;
            margin-bottom: 15px;
        }
    }

    .theme-color {
        color: ${props => props.layoutTheme.textColor};
    }

    .intro-detail {
        color: ${props => props.layoutTheme.textColor};
    }

    .sub-heading {
        color: ${props => props.layoutTheme.headingColor};
    }

    .mini-text {
        font-size: 12px!important;
        font-weight: 400;
        color: ${props => props.layoutTheme.textColor};
        margin: -10px 0 5px;
    }

    .global-hash-title {
        color: ${props => props.layoutTheme.headingColor};
    }

    .checkbox-text {
        label {
            color: ${props => props.layoutTheme.textColor};
        }
    }

    .custom-react-table-theme-class, .calender-back-class {
        background-color: ${props => props.layoutTheme.cardBackground};
        color: ${props => props.layoutTheme.textColor};
        .pagination-bottom {
            button {
                color: ${props => props.layoutTheme.textColor};
            }
        }
    }

    .Page-title {
        .title {
            color: ${props => ((props.sidebarTheme.themeName === 'themedefault' || props.sidebarTheme.themeName === 'theme2' || props.sidebarTheme.themeName === 'theme4') && props.layoutTheme.themeName === 'theme6') && props.layoutTheme.headingColor} !important;
        }
    }

    .Profile-component {
        // color: ${props => props.layoutTheme.textColor};
        .profile-header-panel {
            color: ${props => props.layoutTheme.headingColor};
        }
        .profile-right-shade {
            background-color: ${props => props.layoutTheme.cardBackground};
            .feed-card, .work-body  {
                background-color: white;
            }
        }
    }

    .route-height {
        min-height: calc(100vh - 120px);
       
        padding: 15px;
        @media  only screen and (max-width: 575.98px) {
            padding: ${props => props.themeSetting.toolbarDisplayValue !== 'show' ? '15px 0' : '0'};
            // min-height: calc(100vh - 131px) !important;
            min-height: 100% !important;
        }
    }

    .map-block {
        height: calc(100vh - 300px);
        width: 100%;
    }

    .map-marker-icon {
        font-size: 40px;
        position: absolute;
        color: #161B1D;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .border-top-radius {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .border-bottom-radius {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .roe-box-shadow {
        box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03), 0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03), 0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
        border-radius: 6px;
        border: 1px solid rgba(0, 0, 0, 0.125);
    }

    .roe-card-style {
        box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03), 0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03), 0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
        background-color: ${props => props.layoutTheme.cardBackground};
        border-radius: 6px;
        transition: all .2s;
        border: 1px solid rgba(0, 0, 0, 0.125);
        label {
            color: ${props => props.layoutTheme.textColor};
        }

        .roe-card-header {
            padding: 15px 24px;
            font-weight: 600;
            font-size: 18px;
            color: ${props => props.layoutTheme.headingColor};
            .hash {
                color: ${props => props.sidebarTheme.activeRouteBackColor};
            }
        }

        .roe-card-body {
            padding: 0 24px 24px;
            .prism-code {
                margin-bottom: 0px;
            }

            .roe-card-description {
                font-size: 15px;
                margin-bottom: 15px;
                font-weight: 500;
                color: ${props => props.layoutTheme.textColor};
            }
        }
    }

    .react-strap-doc {
        .custom-breadcumb {
            .breadcrumb {
                margin: 0;   
            }
        } 
    }

    .custom-breadcumb {
        padding-bottom: 15px;
        .breadcrumb {
            font-weight: 600;
            margin-bottom: 0;
            border: 1px solid rgba(0, 0, 0, 0.125);
            font-size: 14px;
            text-transform: capitalize;
            background-color: ${props => props.layoutTheme.cardBackground};
            margin: 0 15px;
            border-radius: 6px;
            box-shadow: 0 0.46875rem 2.1875rem rgba(0,0,0,0.03), 0 0.9375rem 1.40625rem rgba(0,0,0,0.03), 0 0.25rem 0.53125rem rgba(0,0,0,0.05), 0 0.125rem 0.1875rem rgba(0,0,0,0.03);
            display: flex;
            align-items: center;
        }

        .breadcrumb-item+.breadcrumb-item::before {
            content: '>';
            color: ${props => ((props.sidebarTheme.themeName === 'themedefault' || props.sidebarTheme.themeName === 'theme2' || props.sidebarTheme.themeName === 'theme7') && props.layoutTheme.themeName === 'theme6') ? props.layoutTheme.headingColor : props.sidebarTheme.activeRouteBackColor} !important;
        }

        .breadcumb-color {
            color: ${props => ((props.sidebarTheme.themeName === 'themedefault' || props.sidebarTheme.themeName === 'theme2' || props.sidebarTheme.themeName === 'theme7') && props.layoutTheme.themeName === 'theme6') ? props.layoutTheme.headingColor : props.sidebarTheme.activeRouteBackColor} !important;
        }
    }

    .theme-choose-side-block {
        height: 180px;
        width: 80px; 
        margin: 10px;
    }

    .theme-choose-header-block {
        height: 30px;
        margin: 10px;
    }

    .theme-choose-layout-block {
        height: 100px;
        margin: 10px;
    }


    .roy-round-icon {
        border-radius: 50%;
        width: 22px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: ${props => props.sidebarTheme.activeRouteBackColor} !important;
        i {
            font-size: 18px;
        }
    }
`;

export default GlobalWrapper;