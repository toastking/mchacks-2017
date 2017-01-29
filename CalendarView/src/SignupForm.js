import React, {Component} from 'react';
import './Login.css';
import $ from 'jquery';
import jQuery from 'jquery';
import * as firebase from 'firebase';

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


class SignupForm extends Component {
    createAccount(){

      var email = $("#email").text,
      password = $("#password").text;
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    }

  render() {
    return (
        <form id="signup-form" action="#"  role="form">
            <h2>Sign Up</h2>
            <div className="form-group">
                <input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address"/>
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
                <input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password"/>
            </div>
            <div className="form-group">
                <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <input type="submit" name="signup-submit" id="signup-submit" tabIndex="4" className="form-control btn btn-signup" value="Sign Up"/>
                </div>
                </div>
            </div>
        </form>
    )
  }
};


export default SignupForm;
