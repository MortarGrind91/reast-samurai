import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator, updateNewUeserActionCreator} from '../../redux/dialogs-reducer'; 
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        }
      
        let updateUserName = (userName) => {
          store.dispatch(updateNewUeserActionCreator(userName));
        }
      
        let updateMessage = (messageText) => {
          store.dispatch(updateNewMessageActionCreator(messageText));
        }

        return (
          <Dialogs 
            addMessage={addMessage} 
            updateUserName={updateUserName} 
            updateMessage={updateMessage}
            state={state.dialogsPage}
          />
        )
      }

    }</StoreContext.Consumer>
  )
}

export default DialogsContainer;