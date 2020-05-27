import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
  let messageElement = props.state.message.map(m => <Message message={m.message} />);

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
            value={props.state.newUserName}
            onChange={onChangeUserName} />
        </div>
        <div className={s.messageWindow}>
          <textarea 
            value={props.state.newMessageText}
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