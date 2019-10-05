import React from "react";

const FeedCard = props => {
    const { profile, name, time, description, media } = props;

    return (
        <div className="feed-card mtb-10">
            <div className="feed-card-header">
                <ul className="list-inline pt-16 mb-0">
                    <li className="list-inline-item feed-card-list-image">
                        <img src={profile} alt="Alice" />
                    </li>
                    <li className="list-inline-item">
                        <div className="feed-post-name">{name}</div>
                        <div className="feed-post-time">{time}</div>
                    </li>
                </ul>
            </div>
            <div className="feed-card-body">
                <div className="body-description ptb-15">{description}</div>
                <div className="feed-card-media">
                    <img src={media} alt="feed-media" />
                </div>
            </div>
            <div className="feed-card-footer">
                <ul className="list-inline pt-16 mb-0">
                    <li className="list-inline-item">
                        <button className="c-btn c-outline-success">
                            <i className="far fa-thumbs-up mr-10" />Like(13)
                        </button>
                    </li>
                    <li className="list-inline-item">
                        <button className="c-btn c-outline-success">
                            <i className="fas fa-share-alt mr-10" /> Share
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FeedCard;
