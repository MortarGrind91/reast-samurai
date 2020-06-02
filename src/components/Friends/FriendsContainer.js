import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
  return{
    sidebar: state.sidebar
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;