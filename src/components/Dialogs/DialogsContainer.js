import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator, updateNewUeserActionCreator} from '../../redux/dialogs-reducer'; 
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  let state = props.store.getState();
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let updateUserName = (userName) => {
    props.store.dispatch(updateNewUeserActionCreator(userName));
  }

  let updateMessage = (messageText) => {
    props.store.dispatch(updateNewMessageActionCreator(messageText));
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

export default DialogsContainer;