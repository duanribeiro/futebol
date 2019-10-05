import {
    friend1,
    friend2,
    friend4,
    friend3,
    friend5,
    friend6,
    ProfileLockScreen
} from "helper/constant";

export const userDataList = [
    {
        id: 1,
        profile: friend1,
        name: "Jack Johnson",
        newMessage: 2
    },
    {
        id: 2,
        profile: friend2,
        name: "Aaron Hank",
        newMessage: 1
    },
    {
        id: 3,
        profile: friend3,
        name: "Abagnale Frank",
        newMessage: 2
    },
    {
        id: 4,
        profile: friend4,
        name: "Babbitt Milton",
        newMessage: 0
    },
    {
        id: 5,
        profile: friend5,
        name: "Jack Johnson",
        newMessage: 2
    },
    {
        id: 6,
        profile: friend6,
        name: "Desmond Paul",
        newMessage: 3
    },
    {
        id: 7,
        profile: friend1,
        name: "Everett Carl",
        newMessage: 0
    },
    {
        id: 8,
        profile: friend3,
        name: "Pinker Steven",
        newMessage: 2
    },
    {
        id: 9,
        profile: friend5,
        name: "Theron Charlize",
        newMessage: 0
    }
];

export const userMessages = [
    {
        id: 1,
        user_id: 1,
        self: false,
        name: "Jack Johnson",
        profile: friend1,
        message:
            "We are planning to move with GrapQL API with Board section. What do you think on it"
    },
    {
        id: 1,
        user_id: 1,
        self: false,
        name: "Jack Johnson",
        profile: friend1,
        message:
            "I also need your assistance for GraphQL API structuring. Are you gonna make APIs in Laravel for it?"
    },
    {
        id: 1,
        user_id: 1,
        self: false,
        name: "Jack Johnson",
        profile: friend1,
        message:
            "I also need your assistance for GraphQL API structuring. Are you gonna make APIs in Laravel for it?"
    },
    {
        id: 1,
        user_id: 1,
        self: true,
        name: "Alice Blue",
        profile: ProfileLockScreen,
        message:
            "I am scheduling a meeting with Team today at 5:00PM. Hope you are available."
    },
    {
        id: 2,
        user_id: 1,
        self: false,
        name: "Jack Johnson",
        profile: friend1,
        message:
            "There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths."
    },
    {
        id: 3,
        user_id: 2,
        self: false,
        profile: friend2,
        name: "Aaron Hank",
        message: "Similarly, media queries may span multiple breakpoint widths:"
    },
    {
        id: 4,
        user_id: 3,
        profile: friend3,
        self: false,
        name: "Abagnale Frank",
        message:
            "he CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Bootstrap"
    },
    {
        id: 5,
        user_id: 3,
        profile: friend3,
        self: false,
        name: "Abagnale Frank",
        message:
            "We don’t encourage customization of these individual values; should you change one, you likely need to change them all."
    },
    {
        id: 6,
        user_id: 4,
        profile: friend4,
        self: false,
        name: "Babbitt Milton",
        message:
            "We are planning to move with GrapQL API with Board section. What do you think on it"
    },
    {
        id: 7,
        user_id: 4,
        profile: friend4,
        self: false,
        name: "Babbitt Milton",
        message:
            "There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths."
    },
    {
        id: 8,
        user_id: 4,
        profile: friend4,
        self: false,
        name: "Babbitt Milton",
        message: "Similarly, media queries may span multiple breakpoint widths:"
    },
    {
        id: 9,
        user_id: 5,
        profile: friend5,
        self: false,
        name: "Jack Johnson",
        message:
            "he CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Bootstrap"
    },
    {
        id: 10,
        user_id: 5,
        profile: friend5,
        self: false,
        name: "Jack Johnson",
        message:
            "We don’t encourage customization of these individual values; should you change one, you likely need to change them all."
    }
];
