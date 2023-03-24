export const user = [
    {
        image: 'https://wallpaperaccess.com/full/3218562.jpg',
        username: 'profile_satu',
        name: 'Profile Satu',
    },
    {
        image: 'https://static.vecteezy.com/system/resources/thumbnails/002/106/276/small/geometric-black-and-gold-background-free-vector.jpg',
        username: 'profile_dua',
        name: 'Profile Dua',
    },
    {
        image: 'https://i.pinimg.com/originals/b5/d7/c8/b5d7c8bb3c8fe18c235bf53ed1c71870.jpg',
        username: 'profile_tiga',
        name: 'Profile Tiga',
    },
    {
        image: 'https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/07/tony-liao-aU7ASS_NVPs-unsplash.jpg',
        username: 'profile_empat',
        name: 'Profile Empat',
    },
    {
        image: 'https://mobimg.b-cdn.net/v3/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg',
        username: 'profile_lima',
        name: 'Profile Lima',
    },
    {
        image: 'https://5.imimg.com/data5/CN/NH/MY-2/wallpaper1-jpg-500x500.jpg',
        username: 'profile_enam',
        name: 'Profile Enam',
    },
    {
        image: 'https://wallpaperaccess.com/full/1642272.jpg',
        username: 'profile_tujuh',
        name: 'Profile Tujuh',
    },
    {
        image: 'https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-128291.jpg',
        username: 'profile_delapan',
        name: 'Profile Delapan',
    },
    {
        image: 'https://images8.alphacoders.com/110/thumbbig-1102284.jpg',
        username: 'profile_sembilan',
        name: 'Profile Sembilan',
    },
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
        },
        {
            ...user[7],
            see: true
        },
        {
            ...user[8],
            see: false
        },

    ],
    post: [
        {
            ...user[0],
            time: '5m',
            asset: [
                'https://cdn.wallpapersafari.com/8/51/mwvBGY.jpg',
                'https://c4.wallpaperflare.com/wallpaper/385/361/317/digital-digital-art-artwork-blue-purple-hd-wallpaper-preview.jpg',
                'https://images.squarespace-cdn.com/content/v1/522ee959e4b0186bd83cda45/1619075956044-0XT3PBRXBYEG7CLT4O8Q/10240-6M.jpg',
            ],
            like: 100,
            caption: '',
            comment: 20
        },
        {
            ...user[1],
            audio: {
                title: 'Merindukanmu',
                artist: 'Pelin',
                album: 'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/ea/2a/cf/ea2acfb8-4e0b-8420-31b7-2fb3a1f05599/cover.jpg/1200x1200bf-60.jpg'
            },
            reels: 'https://v1.pinimg.com/videos/mc/720p/f9/8f/22/f98f22fe9e1e6b9655ec9ea6672ad761.mp4',
            like: 10092,
            caption: 'Create vital space by giving a new stimulation through sensible design and creative fabric sensation! Create vital space by giving a new stimulation through sensible design and creative fabric sensation.',
            comment: 200
        },
        {
            ...user[2],
            time: '1h',
            asset: [
                'https://c4.wallpaperflare.com/wallpaper/385/361/317/digital-digital-art-artwork-blue-purple-hd-wallpaper-preview.jpg',
                'https://cdn.wallpapersafari.com/8/51/mwvBGY.jpg',
            ],
            like: 1029,
            caption: 'Create vital space by giving a new stimulation through sensible design and creative fabric sensation! Create vital space by giving a new stimulation through sensible design and creative fabric sensation.',
            comment: 2000
        },
        {
            ...user[3],
            audio: null,
            reels: 'https://v1.pinimg.com/videos/mc/720p/98/98/f7/9898f74efc0b9e7b19b0ae91c22dfcd1.mp4',
            like: 2900,
            caption: 'Menerjemahkan antara 108 bahasa dengan mengetik',
            comment: 1000
        },
        {
            ...user[4],
            audio: {
                title: 'Hero',
                artist: 'Cash Cash',
                album: 'https://i1.sndcdn.com/artworks-HZ1mBV0HG3iZ-0-t500x500.jpg'
            },
            reels: 'https://v1.pinimg.com/videos/mc/720p/83/4c/0e/834c0e797dd9663c85199b7af780ccb0.mp4',
            like: 29,
            caption: 'Compare customer ratings, see screenshots and learn more about Google Translate.',
            comment: 205
        },
        {
            ...user[5],
            time: '10w',
            asset: [
                'https://cdn.wallpapersafari.com/8/51/mwvBGY.jpg',
            ],
            like: 102900,
            caption: 'Create vital space by giving a new stimulation through sensible design and creative fabric sensation.',
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
            desc: [user[1].username, user[2].username, user[4].username, user[5].username, user[6].username,]
        },
        {
            ...user[4],
            desc: [user[1].username]
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