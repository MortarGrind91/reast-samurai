import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
  let messageElement = props.state.message.map(m => <Message message={m.message} />);
  let messageElementText = React.createRef();

  let addMessage = () => {
    let messageText = messageElementText.current.value;
    alert(messageText);
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
        <div className={s.messageWindow}>
          <textarea ref={messageElementText}></textarea>
        </div>
        <div className={s.messageSend}>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </>
  )
}

export default Dialogs;