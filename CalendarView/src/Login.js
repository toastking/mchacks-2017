import React, {Component} from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {signup: false}
    this.changeToLogin = this.changeToLogin.bind(this)
    this.changeToSignup = this.changeToSignup.bind(this)
  }

  renderForm() {
    if (this.state.signup) {
        return <SignupForm/>
    }
    else {
        return <LoginForm/>
    }
  }

  changeToLogin() {
    this.setState({signup: false});
  }

  changeToSignup() {
    this.setState({signup: true});
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                <div className="panel panel-login">
                    <div className="panel-body">
                    <div className="row">
                        <div className="col-lg-12">
                        {this.renderForm()}
                        </div>
                    </div>
                    </div>
                    <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-6 tabs">
                        <a href="#" className="active" id="login-form-link" onClick={this.changeToLogin}><div className="login">LOGIN</div></a>
                        </div>
                        <div className="col-xs-6 tabs">
                        <a href="#" id="signup-form-link" onClick={this.changeToSignup} ><div className="signup">SIGN UP</div></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
  }

};

export default Login;