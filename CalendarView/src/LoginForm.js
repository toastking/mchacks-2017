import React, {Component} from 'react';
import './Login.css';
import $ from 'jquery';
import * as firebase from 'firebase';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.done = props.done;
    this.signIn = this.signIn.bind(this);
  }

  signIn(){
        var email = $("#username").val(),
        password = $("#password").val();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
        this.done();
  }
  render() {
    return (
        <form id="login-form" role="form">
            <h2>LOGIN</h2>
            <div className="form-group">
                <input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password"/>
            </div>
            <div className="col-xs-6 form-group pull-left checkbox">
                <input id="checkbox1" type="checkbox" name="remember"/>
                <label htmlFor="checkbox1">Remember Me</label>
            </div>
            <div className="col-xs-6 form-group pull-right">
                    <input type="button" onClick={this.signIn} name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In"/>
            </div>
        </form>
    )
  }
};

export default LoginForm;
