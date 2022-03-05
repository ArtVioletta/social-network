import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
      ],
      newPostText: ''
    },

    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Bohdan'},
        {id: 4, name: 'Yulia'},
        {id: 5, name: 'Vlada'},
        {id: 6, name: 'Kirill'},
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'JS'},
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage= profileReducer(this._state.profilePage, action);
    this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar= sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}





window.store = store;
export default store;