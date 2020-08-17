import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileData, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getProfileData(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile {...this.props}
        profile={this.props.profile} status={this.props.status}
        updateStatus={this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});


export default compose(
  connect(mapStateToProps, { getProfileData, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);