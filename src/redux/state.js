let state = {
    profilePage:{
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post!', likesCount: 11},
            {id: 2, message: 'Data through index.js', likesCount: 11},
        ]
    },

    dialogsPage:{
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'Go go go'},
            {id: 5, message: 'React is awesome!'},
            {id: 6, message: 'And one more'}
        ],
        dialogs: [
            {id: 1, name: 'Alexander'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Ann'},
            {id: 4, name: 'Jennifer'},
            {id: 5, name: 'Andrey'},
            {id: 6, name: 'Witcher'}
        ]
    }

}

export default state;
