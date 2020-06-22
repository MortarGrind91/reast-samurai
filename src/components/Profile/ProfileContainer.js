import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileData } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getProfileData(userId);
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

compose(
  connect(mapStateToProps, { getProfileData }),
  withRouter
)(ProfileContainer);

export default compose(
  connect(mapStateToProps, { getProfileData }),
  withRouter
)(ProfileContainer);