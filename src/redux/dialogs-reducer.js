const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const UPDATE_NEW_USER_NAME = 'UPDATE-NEW-USER-NAME';

let initialState = {
  message: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it?'},
    {id: 3, message: 'You'},
    {id: 4, message: 'You'}
  ],
  newMessageText: '',
  dialogs: [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Ann'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Valera'}
  ],
  newUserName: '',

};

const dialogsReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_MESSAGE: 
      let newMessage = {
        id: 5,
        message: state.newMessageText
      };

      let newUser = {
        id: 5,
        name: state.newUserName,
      }
      state.message.push(newMessage);
      state.dialogs.push(newUser);
      state.newMessageText = '';
      state.newUserName = '';
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.newMessageText;
      return state;
    case UPDATE_NEW_USER_NAME:
      state.newUserName = action.newUserName;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ 
  type: ADD_MESSAGE,
});

export const updateNewMessageActionCreator = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessageText: newMessage,
});

export const updateNewUeserActionCreator = (userName) => ({
  type: UPDATE_NEW_USER_NAME,
  newUserName: userName
});

export default dialogsReducer;