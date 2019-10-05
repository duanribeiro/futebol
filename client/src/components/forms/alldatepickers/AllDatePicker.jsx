import React, { useState } from "react";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import addMonths from "date-fns/addMonths";
import subDays from "date-fns/subDays";
import DatepickerWrapper from "./datepicker.style";

const AllDatePicker = props => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = date => setStartDate(date);

    return (
        <DatepickerWrapper {...props}>
            <div className="row date-picker-block">
                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Default
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                This is default Date Picker.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Select Time
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                This is Date Picker with time picker.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="time"
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Select Time Only
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                This is time picker demo.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                dateFormat="h:mm aa"
                                timeCaption="Time"
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Custom date format
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                You can customize date format as well using
                                dateFormat props.
                            </div>
                            <DatePicker
                                dateFormat="yyyy/MM/dd"
                                selected={startDate}
                                onChange={handleChange}
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Placeholder text
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                You can put Placeholder text using
                                placeholderText props.
                            </div>
                            <DatePicker
                                placeholderText="Click to select a date"
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Specific date range
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                You can set specified date range.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                minDate={new Date()}
                                maxDate={addDays(new Date(), 5)}
                                placeholderText="Select a date between today and 5 days in the future"
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Exclude Times
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                You can exclude specified times.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                showTimeSelect
                                excludeTimes={[
                                    setHours(setMinutes(new Date(), 0), 17),
                                    setHours(setMinutes(new Date(), 30), 18),
                                    setHours(setMinutes(new Date(), 30), 19),
                                    setHours(setMinutes(new Date(), 30), 17)
                                ]}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Include Times
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                You can include specified times.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                showTimeSelect
                                includeTimes={[
                                    setHours(setMinutes(new Date(), 0), 17),
                                    setHours(setMinutes(new Date(), 30), 18),
                                    setHours(setMinutes(new Date(), 30), 19),
                                    setHours(setMinutes(new Date(), 30), 17)
                                ]}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Inject Specific
                            Times
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                You can inject specific times.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                injectTimes={[
                                    setHours(setMinutes(new Date(), 1), 0),
                                    setHours(setMinutes(new Date(), 5), 12),
                                    setHours(setMinutes(new Date(), 59), 23)
                                ]}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Date Range with
                            disabled navigation shown
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                You can disable range of dates.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                minDate={new Date()}
                                maxDate={addMonths(new Date(), 5)}
                                showDisabledMonthNavigation
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Highlight dates
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                You can highlight dates.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                highlightDates={[
                                    subDays(new Date(), 7),
                                    addDays(new Date(), 7)
                                ]}
                                placeholderText="This highlights a week ago and a week from today"
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Disable datepicker
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                This is disable date picker .
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                disabled={true}
                                placeholderText="This is disabled"
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Clear datepicker
                            input
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                You can clear dates to click on the cross icon.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                isClearable={true}
                                placeholderText="I have been cleared!"
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-xl-6 ptb-15">
                    <div className="roe-card-style">
                        <div className="roe-card-header">
                            <span className="hash"># </span>Portal version
                        </div>
                        <div className="roe-card-body">
                            <div className="roe-card-description">
                                This is a portal version of date picker.
                            </div>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                withPortal
                                className="custom-datepicker"
                                calendarClassName="custom-calender-class"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DatepickerWrapper>
    );
};

export default AllDatePicker;
