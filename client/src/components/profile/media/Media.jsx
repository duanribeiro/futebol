import React from "react";
import MediaCard from "./MediaCard";
import { media1 } from "helper/constant";
import { media2 } from "helper/constant";
import { media3 } from "helper/constant";
import { media4 } from "helper/constant";
import { media5 } from "helper/constant";
import { media6 } from "helper/constant";
import { media7 } from "helper/constant";
import { media8 } from "helper/constant";
import { media9 } from "helper/constant";

const obj = {
    date: "May",
    media: [
        {
            text: "Pre-fab homes",
            media: media1
        },
        {
            text: "Social Etiquette",
            media: media2
        },
        {
            text: "Cultural Tendency",
            media: media3
        },
        {
            text: "Amusing Situations",
            media: media4
        }
    ]
};

const obj2 = {
    date: "June",
    media: [
        {
            text: "Opportunities",
            media: media5
        },
        {
            text: "Reflections",
            media: media6
        },
        {
            text: "Cultural Nuance",
            media: media7
        },
        {
            text: "Encouragement",
            media: media8
        },
        {
            text: "Knowledge",
            media: media9
        },
        {
            text: "Learning",
            media: media1
        },
        {
            text: "Logical",
            media: media2
        }
    ]
};

const Media = () => {
    return (
        <div>
            <MediaCard data={obj} />
            <MediaCard data={obj2} />
        </div>
    );
};

export default Media;
