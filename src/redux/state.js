const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const NEW_DIALOG_TEXT = 'NEW-DIALOG-TEXT';
const NEW_POST = 'NEW-POST';
const UPDATE_DIALOG = 'UPDATE-DIALOG';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post!', likesCount: 11},
                {id: 2, message: 'Data through index.js', likesCount: 11},
            ],

            newPostText: 'it-kamasutra'
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
            ],
            newDialogText: 'Hi!'
        }

    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;        // observer pattern
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === NEW_POST) {
            let newPost = {
                id: 6,
                message: this._state.dialogsPage.newDialogText
            };
            this._state.dialogsPage.messages.push(newPost);
            this._state.dialogsPage.newDialogText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_DIALOG) {
            this._state.dialogsPage.newDialogText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const addNewPost = () => ({type: NEW_POST})
export const updateDialog = (text) => {
    return {
        type: UPDATE_DIALOG,
        newText: text
    }
}

window.store = store;
export default store;
