/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import TaskContainer from './TaskContainer';
import '../stylesheets/styles.css';
import * as actions from '../actions/actions';

const mapStateToProps = state => (
  {
    username: state.tasks.username,
    loggedIn: state.tasks.loggedIn,
  }
);

const mapDispatchToProps = dispatch => (
  {
    addUser: (username, password) => {
      return dispatch(actions.addUser(username, password));
    },
    checkUser: (username, password) => {
      return dispatch(actions.checkUser(username,password));
    }
  }
)

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render(){
    console.log(`username in main container`,this.props.username)
    if (this.props.loggedIn === false) 
      return(
        <div>
          <LogIn addUser={this.props.addUser} checkUser={this.props.checkUser} />
        </div>
      );
    else 
      return (
        <div>
          <TaskContainer checkUser={this.props.checkUser} username={this.props.username} />
        </div>
      )
  }
    // return (
    //   <div>
    //     <TaskContainer checkUser={this.props.checkUser} username={this.props.username} />
    //   </div>
    // )
// }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
