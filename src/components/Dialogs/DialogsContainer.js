import { addMessageActionCreator, updateNewMessageActionCreator, updateNewUeserActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedurect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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

//Redirect
// let AuthRedirectComponent = withAuthRedurect(Dialogs);

compose(
  withAuthRedurect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

export default compose(
  withAuthRedurect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);