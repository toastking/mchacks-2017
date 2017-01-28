import React, {Component} from 'react';

class Login extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                <div className="panel panel-login">
                    <div className="panel-body">
                    <div className="row">
                        <div className="col-lg-12">
                        <form id="login-form" action="#" method="post" role="form" styles="display: block;">
                            <h2>LOGIN</h2>
                            <div className="form-group">
                                <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Name" value=""/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="col-xs-6 form-group pull-left checkbox">
                                <input id="checkbox1" type="checkbox" name="remember"/>
                                <label for="checkbox1">Remember Me</label>   
                            </div>
                            <div className="col-xs-6 form-group pull-right">     
                                    <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login" value="Log In"/>
                            </div>
                        </form>
                        <form id="signup-form" action="#" method="post" role="form" styles="display: none;">
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
                                    <input type="submit" name="signup-submit" id="signup-submit" tabindex="4" className="form-control btn btn-signup" value="Sign Up"/>
                                </div>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-6 tabs">
                        <a href="#" className="active" id="login-form-link"><div className="login">LOGIN</div></a>
                        </div>
                        <div className="col-xs-6 tabs">
                        <a href="#" id="signup-form-link"><div className="signup">SIGN UP</div></a>
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