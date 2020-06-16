import React, {Component} from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthData } from '../../redux/auth-reducer';

class HeaderContainer extends Component{
  componentDidMount(){
    this.props.getAuthData();
  }
  render(){
    return(<Header {...this.props}/>);
  }
}

const mapStateToProps = (state) =>{
  return{
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {getAuthData})(HeaderContainer);
