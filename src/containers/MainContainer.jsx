import React from 'react';
import LogIn from '../components/LogIn';
import TaskContainer from './TaskContainer';
import '../stylesheets/styles.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = state => (
  {
    loggedIn: state.tasks.loggedIn,
  }
);

const mapDispatchToProps = dispatch => (
  {
    addUser: (username, password) => {
      return dispatch(actions.addUser(username, password));
    }
  }
)

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render(){
    return(
      <div>
        <LogIn addUser={this.props.addUser}/>
        <TaskContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainContainer);
