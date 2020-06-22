import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
  let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name} />);
  let messageElement = props.dialogsPage.message.map(m => <Message message={m.message} key={m.id}/>);

  let onAddMessage = () => {
    props.addMessage();
  }

  let onChangeUserName = (e) => {
    let userName = e.target.value;
    props.updateUserName(userName);
  }

  let onChangeMessage = (e) => {
    let messageText = e.target.value;
    props.updateMessage(messageText)
  }

  
  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElement}
        </div>
        <div className={s.messages}>
          {messageElement}
        </div>
      </div>
      <div className={s.messageWindowBox}>
        <div className={s.messageField}>
          <input type="text"
            value={props.dialogsPage.newUserName}
            onChange={onChangeUserName} />
        </div>
        <div className={s.messageWindow}>
          <textarea 
            value={props.dialogsPage.newMessageText}
            onChange={onChangeMessage}/>
        </div>
        <div className={s.messageSend}>
          <button onClick={onAddMessage}>Отправить</button>
        </div>
      </div>
    </>
  )
}

export default Dialogs;