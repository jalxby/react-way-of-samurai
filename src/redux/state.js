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

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;        // observer pattern
    },

    newPost() {
        let newPost = {
            id: 6,
            message: this._state.dialogsPage.newDialogText
        };
        this._state.dialogsPage.messages.push(newPost);
        this._state.dialogsPage.newDialogText = '';
        this._callSubscriber(this._state);
    },

    updateDialog(newText) {
        this._state.dialogsPage.newDialogText = newText;
        this._callSubscriber(this._state);
    }

}


window.store = store;


export default store;
