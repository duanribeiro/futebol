import React, { useState, Fragment } from "react";
import classNames from "classnames";

const Button = props => {
    const [buttonClick, setButtonCLick] = useState(false);
    const {
        className,
        disabled,
        loading,
        dataStyle,
        style,
        type = "button"
    } = props;

    const buttonClickEvent = () => {
        setButtonCLick(true);
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <Fragment>
            <button
                type={type}
                onClick={buttonClickEvent}
                style={style && style}
                className={classNames(
                    className,
                    disabled && "disabled",
                    loading && "loading-button",
                    buttonClick && loading && dataStyle,
                    buttonClick && loading && "disabled"
                )}
            >
                <span
                    className={classNames(
                        dataStyle === "middle" && buttonClick && "label-middle"
                    )}
                >
                    {props.children}
                </span>
                {loading && buttonClick && dataStyle === "expand-left" && (
                    <div className="lds-ring loder-left">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                )}
                {loading && buttonClick && dataStyle === "expand-right" && (
                    <div className="lds-ring loder-right">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                )}
                {loading && buttonClick && dataStyle === "expand-up" && (
                    <div className="lds-ring loder-middle">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                )}
                {loading && buttonClick && dataStyle === "expand-down" && (
                    <div className="lds-ring loder-down">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                )}
                {loading && buttonClick && dataStyle === "middle" && (
                    <div className="lds-ring loder-middle">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                )}
            </button>
        </Fragment>
    );
};

export default Button;
