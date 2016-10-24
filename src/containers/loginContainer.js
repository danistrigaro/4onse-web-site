// react
import React from 'react';
// redux
import { connect } from 'react-redux'

// material-ui
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

// actions
import { getAccess } from '../actions/access'

const LoginContainer = React.createClass({
  render() {
    return (
      <Dialog
        title="Login"
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.handleCloseDialog}
      >
        Login to get access into the private section<br />
        <TextField
          floatingLabelText="User"
        /><br />
        <TextField
          floatingLabelText="Password"
        /><br />
      </Dialog>
    )
  }
})

const mapStateToProps = (store) => {
  return {
    size: store.accessReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitAccount: (user, password) => {
      dispatch(getAccess(user, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
