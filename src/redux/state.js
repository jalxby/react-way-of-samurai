import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post!', likesCount: 11},
            {id: 2, message: 'Data through index.js', likesCount: 11},
        ],

        newPostText: 'it'
    },

    dialogsPage: {
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

window.state = state;

export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (tewText) => {

    state.profilePage.newPostText = tewText;
    rerenderEntireTree(state);
}


export default state;
