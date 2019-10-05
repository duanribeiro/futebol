import React from "react";
import ToastWrapper from "./toast.style";
import classNames from "classnames";

const CustomToast = props => {
    const {
        message,
        heading,
        className,
        style,
        width,
        position = "",
        show,
        transition = false
    } = props;

    return (
        <ToastWrapper width={width}>
            {show && (
                <div
                    className={classNames(
                        className,
                        "custom-toast",
                        transition &&
                            position.substring(0, 3) === "top" &&
                            "animated",
                        transition &&
                            position.substring(0, 3) === "top" &&
                            "fadeInDown",
                        transition &&
                            position.substring(0, 6) === "bottom" &&
                            "animated",
                        transition &&
                            position.substring(0, 6) === "bottom" &&
                            "fadeInUp",
                        position
                    )}
                    style={style}
                >
                    <div>
                        <i className="fas fa-bell mr-8" />
                        <strong className="mr-auto">{heading}</strong>
                        <i
                            className="far fa-times-circle close-icon"
                            onClick={() =>
                                props.onCloseCLick &&
                                props.onCloseCLick()
                            }
                        />
                    </div>
                    <div>{message}</div>
                </div>
            )}
        </ToastWrapper>
    );
};

export default CustomToast;
