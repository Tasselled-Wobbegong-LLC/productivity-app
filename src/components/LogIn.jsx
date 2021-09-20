/* eslint-disable */
import React from 'react';
import '../stylesheets/styles.css';

class LogIn extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    // console.log(`this is login props ${this.props.addUser}`);
    return (
      <div>
        Username: <input type ="text" id="usernameInput" className="userInput"/><br />
        Password: <input type="password" id="passwordInput" className="userInput"/><br />
      {/* trigger an action to POST input from username and password to backend
      
      */}
        <button className="btn btn-sm btn-outline-primary" onClick={() => {
          return this.props.addUser(document.getElementById('usernameInput').value, document.getElementById('passwordInput').value);
        }}>Sign up
          
        </button>
      {/* trigger an action to POST input from username and password to backend
      
      */}
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => {
            return this.props.checkUser(document.getElementById('usernameInput').value, document.getElementById('passwordInput').value);
          }}>Log in
        </button>
      </div>
    )
  }
};

export default LogIn;
