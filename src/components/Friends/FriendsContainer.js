import React from 'react';
import Friends from './Friends';
import StoreContext from '../../StoreContext';

const FriendsContainer = (props) => {
  return(
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();
        return(
          <Friends state={state.sidebar}/>
        )
      }
    }</StoreContext.Consumer>
  )
}

export default FriendsContainer;