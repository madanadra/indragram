export const user = [
    {
        image: 'asset1.jpg',
        username: 'firstprofile'
    },
    {
        image: 'asset2.jpg',
        username: 'secondprofile'
    },
    {
        image: 'asset3.jpg',
        username: 'thirdprofile'
    },
    {
        image: 'asset4.jpg',
        username: 'fourthprofile'
    },
    {
        image: 'asset5.jpg',
        username: 'fifthprofile'
    },
    {
        image: 'asset6.jpg',
        username: 'sixthprofile'
    },
    {
        image: 'asset7.jpg',
        username: 'seventhprofile'
    }
]

export const initialState = {
    story: [
        {
            ...user[0],
            see: false
        },
        {
            ...user[1],
            see: true
        },
        {
            ...user[2],
            see: true
        },
        {
            ...user[3],
            see: false
        },
        {
            ...user[4],
            see: false
        },
        {
            ...user[5],
            see: false
        },
        {
            ...user[6],
            see: true
        }

    ],
    post: [
        {
            ...user[0],
            time: '5m',
            asset: [
                'asset8.jpg',
                'asset9.jpg',
                'asset10.jpg',
            ],
            like: 100,
            caption: null,
            comment: 20
        },
        {
            ...user[1],
            audio: null,
            reels: 'asset15.mp4',
            like: 100,
            caption: null,
            comment: 20
        },
        {
            ...user[2],
            audio: {
                title: 'Monsters',
                artist: 'Katie Sky',
                album: 'asset14.jpg'
            },
            reels: 'asset16.mp4',
            like: 2900,
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            comment: 205
        },
        {
            ...user[3],
            time: '1h',
            asset: [
                'asset11.jpg',
                'asset12.jpg',
            ],
            like: 1029,
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            comment: 2000
        },
        {
            ...user[4],
            audio: null,
            reels: 'asset17.mp4',
            like: 29,
            caption: null,
            comment: 1
        },
        {
            ...user[5],
            time: '10w',
            asset: [
                'asset13.jpg',
            ],
            like: 102900,
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            comment: 1220
        }
    ],
    suggest: [
        {
            ...user[0],
            desc: [user[1].username, user[2].username, user[3].username, user[4].username,]
        },
        {
            ...user[1],
            desc: [user[2].username, user[3].username, user[4].username,]
        },
        {
            ...user[2],
            desc: []
        },
        {
            ...user[3],
            desc: [user[0].username, user[1].username, user[2].username, user[4].username, user[5].username,]
        },
        {
            ...user[4],
            desc: [user[6].username]
        },
    ],
    modal: null,
    footermenu : [
        'About', 'Help', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language', 'Indra verified'
    ],
    audio: false
};
  
export const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_MODAL':
            return {
                ...state,
                modal: action.modal
            };
        case 'SWITCH_AUDIO':
            return {
                ...state,
                audio: action.audio
            };
        default:
            return state;
    }
};