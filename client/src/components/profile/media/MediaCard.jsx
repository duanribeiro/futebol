import React from "react";

const MediaCard = ({ data }) => {
    return (
        <div>
            <div className="grey--text ptb-10 pl-15">{data.date}</div>
            <div className="container-fluid mtb-10">
                <div className="profile-media-card">
                    <div className="row ma-0">
                        {data &&
                            data.media.map((e, i) => {
                                return (
                                    <div
                                        className="col-sm-6 col-md-6 col-lg-4 col-xl-3 pa-5 text-center"
                                        key={i}
                                    >
                                        <div className="media-text">
                                            {e.text}
                                        </div>
                                        <img
                                            className="media-image"
                                            src={e.media}
                                            alt="media"
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaCard;
