import styled from "styled-components";

const UserWrapper = styled.div`
    .module-header {
        display: flex;
        align-items: center;
    }

    .custom-react-table-theme-class {
        .rt-tbody {
            .rt-td {
                font-family: "montserrat-medium";
                color: #757575;
            }
        }
    }

    .Table__itemCount {
        font-size: 14px;
    }

    .Table__pagination {
        display: flex;
        justify-content: flex-end;
        padding: 20px 10px 0px;
    }

    .Table__pageButton {
        font-size: 18px;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: #757575 !important;
        margin: 0 5px;
    }

    .Table__pageButton:disabled {
        cursor: not-allowed;
        color: gray;
    }

    .Table__pageButton--active {
        font-weight: bold;
        background: ${props => props.sidebarTheme.activeRouteBackColor};
        color: ${props => props.sidebarTheme.activeRouteTextColor} !important;
        min-width: 30px;
        height: 30px;
        border-radius: 6px;
    }

    .tabl-search {
        &:focus {
            outline: 0;
        }
    }

    .back-icon {
        position: absolute;
        right: 30px;
        bottom: 27px;
        color: ${props => props.sidebarTheme.activeRouteBackColor};
    }

    .-sort-desc {
        box-shadow: none !important;
        &:before {
            content: "▼";
            float: right;
            margin-right: 14px;
            color: ${props => props.sidebarTheme.activeRouteBackColor};
        }
    }

    .-sort-asc {
        box-shadow: none !important;
        &:before {
            content: "▲";
            float: right;
            margin-right: 14px;
            color: ${props => props.sidebarTheme.activeRouteBackColor};
        }
    }
    .react-action-class {
        button {
            height: auto !important;
            width: auto !important;
        }
    }

    .tbl-loader {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0, 0.05);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        .lds-ring {
            div {
                width: 8px !important;
                height: 45px !important;
                margin: 0px !important;
                border-color: ${props => props.sidebarTheme.activeRouteBackColor} transparent transparent transparent !important;
            }
        }
    }
`;

export default UserWrapper;
