import React, {Component} from 'react';
import './Login.css';
import $ from 'jquery';
import jQuery from 'jquery';
import {firebase} from 'Firebase';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


class SignupForm extends Component {
    createAccount(){
        var ref = new Firebase("https://emo-journal.firebaseio.com");
        var authClient = new FirebaseAuthClient(ref, function(error, user) {

        });
    }

  render() {
    return (
        <form id="signup-form" action="#"  role="form">
            <h2>Sign Up</h2>
            <div className="form-group">
                <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Name" value=""/>
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" value=""/>
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
                <input type="password" name="confirm-password" id="confirm-password" tabindex="2" className="form-control" placeholder="Confirm Password"/>
            </div>
            <div className="form-group">
                <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <input  type="submit" onClick ={this.createAccount} name="signup-submit" id="signup-submit" tabindex="4" className="form-control btn btn-signup" value="Sign Up"/>
                </div>
                </div>
            </div>
        </form>
    )
  }
};


export default SignupForm;