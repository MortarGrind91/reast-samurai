import React, { Component } from 'react';
import s from './ProfileInfo.module.css';

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status);
  }

  handleChange = (e) => {
    const text = e.target.value;

    this.setState({
      status: text
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {

    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.state.status || "status"}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus onChange={this.handleChange} onBlur={this.deactivateEditMode} type="text" value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}
