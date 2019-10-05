import styled from 'styled-components';

const DatePickerWrapper = styled.div`
    .date-picker-block {
        .roe-card-style {
            height: 100%;
        }
    }
    .react-datepicker__input-container {
        width: 100%
    }
    .custom-datepicker {
        border-radius: 6px !important;
        font-size: 14px !important;
        border: 1px solid #ddd !important;
        padding: 8px;
        width: 100%;
        &:focus {
            border: 1px solid #9a9a9a !important;
            box-shadow: none !important;
            outline: 0;
        }
    }

    .react-datepicker-wrapper {
        width: 100%;
        .react-datepicker__input-container {
            width: 100%;
        }
    }
    
    .custom-calender-class {
        .react-datepicker__triangle {
            border-bottom-color: ${props => props.sidebarTheme.backgroundColor};
        }
        .react-datepicker__header {
            background: ${props => props.sidebarTheme.backgroundColor};
            .react-datepicker-time__header {
                color: ${props => props.sidebarTheme.textColor}; 
            }
            .react-datepicker__current-month {
                color: ${props => props.sidebarTheme.textColor}; 
            }
            .react-datepicker__day-names {
                .react-datepicker__day-name {
                    color: ${props => props.sidebarTheme.textColor}; 
                }
            }
        }
        .react-datepicker__month {
            .react-datepicker__week {
                .react-datepicker__day--selected {
                    background: ${props => props.sidebarTheme.activeRouteBackColor};
                    color: ${props => props.sidebarTheme.activeRouteTextColor}; 
                }
            }
        }
    }
`;

export default DatePickerWrapper