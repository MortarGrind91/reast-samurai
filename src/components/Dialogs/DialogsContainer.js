import { addMessageActionCreator, updateNewMessageActionCreator, updateNewUeserActionCreator} from '../../redux/dialogs-reducer'; 
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsPage
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateUserName: (userName) => {
      dispatch(updateNewUeserActionCreator(userName));
    },
    updateMessage: (messageText) => {
     dispatch(updateNewMessageActionCreator(messageText));
    }

  };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;