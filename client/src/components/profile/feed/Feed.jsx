import React from "react";
import FeedCard from "./FeedCard";
import {
    ProfileLockScreen,
    feed1,
    feed2,
    media1,
    media2
} from "helper/constant";

const Feed = () => {
    return (
        <div className="pa-10">
            <div className="feed-text-area">
                <div>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        placeholder="Whats new today?"
                    />
                </div>
                <ul className="list-inline pt-16 mb-0">
                    <li className="list-inline-item feed-text-area-icon">
                        <i className="fas fa-image" />
                    </li>
                    <li className="list-inline-item feed-text-area-icon">
                        <i className="fas fa-user" />
                    </li>
                    <li className="list-inline-item feed-text-area-icon">
                        <i className="fas fa-map-marker-alt" />
                    </li>
                    <li className="list-inline-item feed-text-area-icon pull-right">
                        <button className="c-btn c-danger">Post</button>
                    </li>
                </ul>
            </div>
            <div className="pt-20">
                <FeedCard
                    profile={ProfileLockScreen}
                    name="Alice Blue"
                    time="1 min ago"
                    description="Located two hours south of Sydney in the Southern Highlands of New South Wales, ..."
                    media={feed1}
                />
                <FeedCard
                    profile={ProfileLockScreen}
                    name="Alice Blue"
                    time="2 min ago"
                    description="Located two hours south of Sydney in the Southern Highlands of New South Wales, ..."
                    media={feed2}
                />

                <FeedCard
                    profile={ProfileLockScreen}
                    name="Alice Blue"
                    time="2 min ago"
                    description="Located two hours south of Sydney in the Southern Highlands of New South Wales, ..."
                    media={media1}
                />

                <FeedCard
                    profile={ProfileLockScreen}
                    name="Alice Blue"
                    time="2 min ago"
                    description="Located two hours south of Sydney in the Southern Highlands of New South Wales, ..."
                    media={media2}
                />
            </div>
        </div>
    );
};

export default Feed;
