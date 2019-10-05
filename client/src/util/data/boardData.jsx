import { randomUUID } from "helper/methods";
import {
    people1,
    people2,
    people3,
    people4,
    people5,
    people6,
    people7,
    people8,
    people9,
    people10,
    people11,
    people12,
    people13,
    people14,
    people15,
    cover1,
    // cover2,
    cover3,
    cover4,
    cover5,
    cover10,
    cover6,
    // cover7,
    cover8,
    cover9,
} from "./../../helper/constant";

export const boardsData = [
    {
        tasks: [
            {
                id: randomUUID(),
                completed: false,
                card_id: 1,
                sequence: "(",
                cover: cover1,
                title: "Design Changes",
                description: "Change all the button designs and modal designs...",
                labels: [
                    {
                        color: "label6",
                        id: 6,
                        name: "Label 6"
                    },
                    {
                        color: "label2",
                        id: 2,
                        name: "Label 2"
                    }
                ],
                members: [
                    {
                        pics: people1,
                        first: "Pedro",
                        last: "Araez",
                        id: 1
                    },
                    {
                        pics: people2,
                        first: "Arezio",
                        last: "Aurechio",
                        id: 2
                    },
                    {
                        pics: people3,
                        first: "Jules",
                        last: "Boutin",
                        id: 3
                    },
                    {
                        pics: people4,
                        first: "Kusti",
                        last: "Franti",
                        id: 4
                    }
                ],
                owner: {},
                attachments: [
                    {
                        id: 1,
                        pics: cover1,
                        name: "bugs.jpeg"
                    }
                ],
                subtasks: [
                    {
                        id: 1,
                        title:
                            "To create Task list in SharePoint online, log into the site and navigate your page to site contents.",
                        completed: false,
                        ticket: "#00001",
                        comments: [
                            {
                                id: 1,
                                pics: people1,
                                first: "Pedro",
                                last: "Araez",
                                created: 1550640614,
                                comment:
                                    "Click on the gear box at top and select site contents; or click on quick launch site contents."
                            },
                            {
                                id: 2,
                                pics: people2,
                                first: "Arezio",
                                last: "Aurechio",
                                created: 1550644498,
                                comment:
                                    "On the site contents page, select New drop down box and click on App."
                            },
                            {
                                id: 3,
                                pics: people3,
                                first: "Jules",
                                last: "Boutin",
                                created: 1550645238,
                                comment:
                                    "From the App page, search for Tasks and click on Tasks app file"
                            },
                            {
                                id: 4,
                                pics: people4,
                                first: "Kusti",
                                last: "Franti",
                                created: 1550647012,
                                comment:
                                    "Once clicked, it will ask you to assign the name; enter name and click on Create. Now, Tasks List is created successfully and has appeared on the site contents page as well."
                            }
                        ]
                    },
                    {
                        id: 2,
                        title:
                            "Open the created Tasks list and click on Add new task from the page or select items and click on new task.",
                        completed: true,
                        ticket: "#00002",
                        comments: [
                            {
                                id: 5,
                                pics: people4,
                                first: "Kusti",
                                last: "Franti",
                                created: 1550640614,
                                comment:
                                    "This action will call the Create task wizard. Here, we need to enter Task Name, Start Date, Due Date, Assigned to (SharePoint users whom you want to assign the task). From here, we can save and create new tasks but in case you want to create tasks with advanced mode, we need click on Show More."
                            }
                        ]
                    },
                    {
                        id: 3,
                        title:
                            "We can create sub tasks in case we have existing new tasks, but we can’t create directly new sub tasks. To create subtasks under the tasks list",
                        completed: false,
                        ticket: "#00003",
                        comments: []
                    }
                ]
            },
            {
                id: randomUUID(),
                completed: false,
                card_id: 2,
                sequence: "s",
                cover: cover10,
                title: "Do It Later",
                description: "Will complete in next phase",
                labels: [
                    {
                        color: "label1",
                        id: 1,
                        name: "Label 1"
                    },
                    {
                        color: "label2",
                        id: 2,
                        name: "Label 2"
                    },
                    {
                        color: "label3",
                        id: 3,
                        name: "Label 3"
                    },
                    {
                        color: "label5",
                        id: 5,
                        name: "Label 5"
                    }
                ],
                members: [
                    {
                        pics: people11,
                        first: "Fidel",
                        last: "Martin",
                        id: 11
                    },
                    {
                        pics: people12,
                        first: "Attilio",
                        last: "Marzi",
                        id: 12
                    },
                    {
                        pics: people13,
                        first: "Gurt",
                        last: "Mistrioty",
                        id: 13
                    },
                    {
                        pics: people14,
                        first: "Michael",
                        last: "Myatowych",
                        id: 14
                    }
                ],
                owner: {},
                attachments: [
                    {
                        id: 2,
                        pics: cover10,
                        name: "features.jpeg"
                    }
                ],
                subtasks: [
                    {
                        id: 4,
                        title:
                            "To create Task list in SharePoint online, log into the site and navigate your page to site contents.",
                        completed: false,
                        ticket: "#00001",
                        comments: [
                            {
                                id: 6,
                                pics: people11,
                                first: "Fidel",
                                last: "Martin",
                                created: 1550640614,
                                comment:
                                    "Click on the gear box at top and select site contents; or click on quick launch site contents."
                            },
                            {
                                id: 7,
                                pics: people12,
                                first: "Attilio",
                                last: "Marzi",
                                created: 1550644498,
                                comment:
                                    "On the site contents page, select New drop down box and click on App."
                            },
                            {
                                id: 8,
                                pics: people13,
                                first: "Gurt",
                                last: "Mistrioty",
                                created: 1550645238,
                                comment:
                                    "From the App page, search for Tasks and click on Tasks app file"
                            },
                            {
                                id: 9,
                                pics: people14,
                                first: "Michael",
                                last: "Myatowych",
                                created: 1550647012,
                                comment:
                                    "Once clicked, it will ask you to assign the name; enter name and click on Create. Now, Tasks List is created successfully and has appeared on the site contents page as well."
                            }
                        ]
                    },
                    {
                        id: 6,
                        title:
                            "Open the created Tasks list and click on Add new task from the page or select items and click on new task.",
                        completed: true,
                        ticket: "#00002",
                        comments: [
                            {
                                id: 10,
                                pics: people14,
                                first: "Michael",
                                last: "Myatowych",
                                created: 1550640614,
                                comment:
                                    "This action will call the Create task wizard. Here, we need to enter Task Name, Start Date, Due Date, Assigned to (SharePoint users whom you want to assign the task). From here, we can save and create new tasks but in case you want to create tasks with advanced mode, we need click on Show More."
                            }
                        ]
                    },
                    {
                        id: 7,
                        title:
                            "We can create sub tasks in case we have existing new tasks, but we can’t create directly new sub tasks. To create subtasks under the tasks list",
                        completed: false,
                        ticket: "#00003",
                        comments: []
                    }
                ]
            },
            {
                id: randomUUID(),
                completed: false,
                card_id: 1,
                sequence: "a",
                cover: "",
                title: "Will make new feature",
                description: "New Features",
                labels: [
                    {
                        color: "label4",
                        id: 4,
                        name: "Label 4"
                    },
                    {
                        color: "label3",
                        id: 3,
                        name: "Label 3"
                    }
                ],
                members: [
                    {
                        pics: people15,
                        first: "Joseph",
                        last: "Rossignol",
                        id: 15
                    },
                    {
                        pics: people12,
                        first: "Ichae ",
                        last: "Semos",
                        id: 12
                    }
                ],
                owner: {},
                attachments: [
                    {
                        id: 3,
                        pics: cover1,
                        name: "bugs.jpeg"
                    }
                ],
                subtasks: [
                    {
                        id: 8,
                        title:
                            "We can create sub tasks in case we have existing new tasks, but we can’t create directly new sub tasks. To create subtasks under the tasks list",
                        completed: false,
                        ticket: "#00003",
                        comments: []
                    }
                ]
            },
            {
                id: randomUUID(),
                completed: false,
                card_id: 2,
                sequence: "]",
                title: "Changes Functionality",
                description: "Change all the functionality have mentioned here",
                cover: cover3,
                labels: [
                    {
                        color: "label1",
                        id: 1,
                        name: "Label 1"
                    },
                    {
                        color: "label2",
                        id: 2,
                        name: "Label 2"
                    }
                ],
                members: [
                    {
                        pics: people5,
                        first: "Odilian",
                        last: "Gosselin",
                        id: 5
                    },
                    {
                        pics: people6,
                        first: "Walter",
                        last: "Hucko",
                        id: 6
                    }
                ],
                owner: {},
                subtasks: [],
                attachments: []
            },
            {
                id: randomUUID(),
                completed: false,
                card_id: 3,
                sequence: "d",
                title: "Add Bug snag",
                description: "Bug snag implementation",
                cover: cover4,
                labels: [
                    {
                        color: "label1",
                        id: 1,
                        name: "Label 1"
                    },
                    {
                        color: "label2",
                        id: 2,
                        name: "Label 2"
                    }
                ],
                members: [
                    {
                        pics: people7,
                        first: "Argele",
                        last: "Intili",
                        id: 7
                    },
                    {
                        pics: people8,
                        first: "Henry",
                        last: "Jurk",
                        id: 8
                    }
                ],
                owner: {},
                subtasks: [],
                attachments: [
                    {
                        id: 4,
                        pics: cover4,
                        name: "nature.jpeg"
                    }
                ]
            },
            {
                id: randomUUID(),
                completed: false,
                card_id: 4,
                sequence: "z",
                title: "Solving Bugs",
                description: "Solve all the bugs from here",
                cover: cover5,
                labels: [
                    {
                        color: "label1",
                        id: 1,
                        name: "Label 1"
                    }
                ],
                members: [
                    {
                        pics: people9,
                        first: "David",
                        last: "King",
                        id: 9
                    },
                    {
                        pics: people10,
                        first: "John",
                        last: "Klok",
                        id: 10
                    }
                ],
                owner: {},
                subtasks: [],
                attachments: [
                    {
                        id: 5,
                        name: "taskslist.jpeg",
                        pics: cover5
                    }
                ]
            }
        ],
        cards: [
            {
                board_id: 10,
                id: 1,
                sequence: "{",
                title: "TO DO",
                user_id: 263
            },
            {
                board_id: 10,
                id: 2,
                sequence: "|",
                title: "Working On",
                user_id: 264
            },
            {
                board_id: 10,
                id: 3,
                sequence: "}",
                title: "Bugs",
                user_id: 265
            },
            {
                board_id: 10,
                id: 4,
                sequence: "~Z",
                title: "Quality Assurance",
                user_id: 266
            }
        ],
        // Facilitate reordering of the columns
        title: "Project 1",
        id: 1,
        isFav: true
    },
    {
        tasks: [
            {
                id: randomUUID(),
                completed: false,
                card_id: 1,
                sequence: "(",
                cover: cover6,
                title: "Design Changes",
                description: "Change all the button designs and modal designs...",
                labels: [
                    {
                        color: "label6",
                        id: 6,
                        name: "Label 6"
                    },
                    {
                        color: "label2",
                        id: 2,
                        name: "Label 2"
                    }
                ],
                members: [
                    {
                        pics: people1,
                        first: "Pedro",
                        last: "Araez",
                        id: 1
                    },
                    {
                        pics: people2,
                        first: "Arezio",
                        last: "Aurechio",
                        id: 2
                    },
                    {
                        pics: people3,
                        first: "Jules",
                        last: "Boutin",
                        id: 3
                    },
                    {
                        pics: people4,
                        first: "Kusti",
                        last: "Franti",
                        id: 4
                    }
                ],
                owner: {},
                attachments: [
                    {
                        id: 1,
                        pics: cover6,
                        name: "bugs.jpeg"
                    }
                ],
                subtasks: [
                    {
                        id: 1,
                        title:
                            "To create Task list in SharePoint online, log into the site and navigate your page to site contents.",
                        completed: false,
                        ticket: "#00001",
                        comments: [
                            {
                                id: 1,
                                pics: people1,
                                first: "Pedro",
                                last: "Araez",
                                created: 1550640614,
                                comment:
                                    "Click on the gear box at top and select site contents; or click on quick launch site contents."
                            },
                            {
                                id: 2,
                                pics: people2,
                                first: "Arezio",
                                last: "Aurechio",
                                created: 1550644498,
                                comment:
                                    "On the site contents page, select New drop down box and click on App."
                            },
                            {
                                id: 3,
                                pics: people3,
                                first: "Jules",
                                last: "Boutin",
                                created: 1550645238,
                                comment:
                                    "From the App page, search for Tasks and click on Tasks app file"
                            },
                            {
                                id: 4,
                                pics: people4,
                                first: "Kusti",
                                last: "Franti",
                                created: 1550647012,
                                comment:
                                    "Once clicked, it will ask you to assign the name; enter name and click on Create. Now, Tasks List is created successfully and has appeared on the site contents page as well."
                            }
                        ]
                    },
                    {
                        id: 2,
                        title:
                            "Open the created Tasks list and click on Add new task from the page or select items and click on new task.",
                        completed: true,
                        ticket: "#00002",
                        comments: [
                            {
                                id: 5,
                                pics: people4,
                                first: "Kusti",
                                last: "Franti",
                                created: 1550640614,
                                comment:
                                    "This action will call the Create task wizard. Here, we need to enter Task Name, Start Date, Due Date, Assigned to (SharePoint users whom you want to assign the task). From here, we can save and create new tasks but in case you want to create tasks with advanced mode, we need click on Show More."
                            }
                        ]
                    },
                    {
                        id: 3,
                        title:
                            "We can create sub tasks in case we have existing new tasks, but we can’t create directly new sub tasks. To create subtasks under the tasks list",
                        completed: false,
                        ticket: "#00003",
                        comments: []
                    }
                ]
            },
            {
                id: randomUUID(),
                completed: false,
                card_id: 2,
                sequence: "s",
                cover: cover10,
                title: "Do It Later",
                description: "Will complete in next phase",
                labels: [
                    {
                        color: "label5",
                        id: 5,
                        name: "Label 5"
                    },
                    {
                        color: "label2",
                        id: 2,
                        name: "Label 2"
                    }
                ],
                members: [
                    {
                        pics: people11,
                        first: "Fidel",
                        last: "Martin",
                        id: 11
                    },
                    {
                        pics: people12,
                        first: "Attilio",
                        last: "Marzi",
                        id: 12
                    },
                    {
                        pics: people13,
                        first: "Gurt",
                        last: "Mistrioty",
                        id: 13
                    },
                    {
                        pics: people14,
                        first: "Michael",
                        last: "Myatowych",
                        id: 14
                    }
                ],
                owner: {},
                attachments: [
                    {
                        id: 2,
                        pics: cover10,
                        name: "features.jpeg"
                    }
                ],
                subtasks: [
                    {
                        id: 4,
                        title:
                            "To create Task list in SharePoint online, log into the site and navigate your page to site contents.",
                        completed: false,
                        ticket: "#00001",
                        comments: [
                            {
                                id: 6,
                                pics: people11,
                                first: "Fidel",
                                last: "Martin",
                                created: 1550640614,
                                comment:
                                    "Click on the gear box at top and select site contents; or click on quick launch site contents."
                            },
                            {
                                id: 7,
                                pics: people12,
                                first: "Attilio",
                                last: "Marzi",
                                created: 1550644498,
                                comment:
                                    "On the site contents page, select New drop down box and click on App."
                            },
                            {
                                id: 8,
                                pics: people13,
                                first: "Gurt",
                                last: "Mistrioty",
                                created: 1550645238,
                                comment:
                                    "From the App page, search for Tasks and click on Tasks app file"
                            },
                            {
                                id: 9,
                                pics: people14,
                                first: "Michael",
                                last: "Myatowych",
                                created: 1550647012,
                                comment:
                                    "Once clicked, it will ask you to assign the name; enter name and click on Create. Now, Tasks List is created successfully and has appeared on the site contents page as well."
                            }
                        ]
                    },
                    {
                        id: 6,
                        title:
                            "Open the created Tasks list and click on Add new task from the page or select items and click on new task.",
                        completed: true,
                        ticket: "#00002",
                        comments: [
                            {
                                id: 10,
                                pics: people14,
                                first: "Michael",
                                last: "Myatowych",
                                created: 1550640614,
                                comment:
                                    "This action will call the Create task wizard. Here, we need to enter Task Name, Start Date, Due Date, Assigned to (SharePoint users whom you want to assign the task). From here, we can save and create new tasks but in case you want to create tasks with advanced mode, we need click on Show More."
                            }
                        ]
                    },
                    {
                        id: 7,
                        title:
                            "We can create sub tasks in case we have existing new tasks, but we can’t create directly new sub tasks. To create subtasks under the tasks list",
                        completed: false,
                        ticket: "#00003",
                        comments: []
                    }
                ]
            },
            {
                id: randomUUID(),
                completed: false,
                card_id: 1,
                sequence: "a",
                cover: cover8,
                title: "Will make new feature",
                description: "New Features",
                labels: [
                    {
                        color: "label4",
                        id: 4,
                        name: "Label 4"
                    },
                    {
                        color: "label3",
                        id: 3,
                        name: "Label 3"
                    }
                ],
                members: [
                    {
                        pics: people15,
                        first: "Joseph",
                        last: "Rossignol",
                        id: 15
                    },
                    {
                        pics: people12,
                        first: "Ichae ",
                        last: "Semos",
                        id: 12
                    }
                ],
                owner: {},
                attachments: [
                    {
                        id: 3,
                        pics: cover1,
                        name: "bugs.jpeg"
                    }
                ],
                subtasks: [
                    {
                        id: 8,
                        title:
                            "We can create sub tasks in case we have existing new tasks, but we can’t create directly new sub tasks. To create subtasks under the tasks list",
                        completed: false,
                        ticket: "#00003",
                        comments: []
                    }
                ]
            },
            {
                id: randomUUID(),
                completed: false,
                card_id: 2,
                sequence: "]",
                title: "Changes Functionality",
                description: "Change all the functionality have mentioned here",
                cover: cover8,
                labels: [
                    {
                        color: "label1",
                        id: 1,
                        name: "Label 1"
                    },
                    {
                        color: "label2",
                        id: 2,
                        name: "Label 2"
                    }
                ],
                members: [
                    {
                        pics: people5,
                        first: "Odilian",
                        last: "Gosselin",
                        id: 5
                    },
                    {
                        pics: people6,
                        first: "Walter",
                        last: "Hucko",
                        id: 6
                    }
                ],
                owner: {},
                subtasks: [],
                attachments: []
            },
            {
                id: randomUUID(),
                completed: false,
                card_id: 3,
                sequence: "d",
                title: "Add Bug snag",
                description: "Bug snag implementation",
                cover: cover9,
                labels: [
                    {
                        color: "label1",
                        id: 1,
                        name: "Label 1"
                    },
                    {
                        color: "label2",
                        id: 2,
                        name: "Label 2"
                    }
                ],
                members: [
                    {
                        pics: people7,
                        first: "Argele",
                        last: "Intili",
                        id: 7
                    },
                    {
                        pics: people8,
                        first: "Henry",
                        last: "Jurk",
                        id: 8
                    }
                ],
                owner: {},
                subtasks: [],
                attachments: [
                    {
                        id: 4,
                        pics: cover9,
                        name: "nature.jpeg"
                    }
                ]
            },
            {
                id: randomUUID(),
                completed: false,
                card_id: 4,
                sequence: "z",
                title: "Solving Bugs",
                description: "Solve all the bugs from here",
                cover: cover10,
                labels: [
                    {
                        color: "label1",
                        id: 1,
                        name: "Label 1"
                    }
                ],
                members: [
                    {
                        pics: people9,
                        first: "David",
                        last: "King",
                        id: 9
                    },
                    {
                        pics: people10,
                        first: "John",
                        last: "Klok",
                        id: 10
                    }
                ],
                owner: {},
                subtasks: [],
                attachments: [
                    {
                        id: 5,
                        name: "taskslist.jpeg",
                        pics: cover10
                    }
                ]
            }
        ],
        cards: [
            {
                board_id: 10,
                id: 1,
                sequence: "{",
                title: "Project 2 (TO DO)",
                user_id: 263
            },
            {
                board_id: 10,
                id: 2,
                sequence: "|",
                title: "Project 2 (New Feature)",
                user_id: 264
            },
            {
                board_id: 10,
                id: 3,
                sequence: "}",
                title: "Project 2 (QA list)",
                user_id: 265
            },
            {
                board_id: 10,
                id: 4,
                sequence: "~Z",
                title: "Project 2 (Done)",
                user_id: 266
            }
        ],
        // Facilitate reordering of the columns
        title: "Project 2",
        id: 2,
        isFav: false
    }
]
