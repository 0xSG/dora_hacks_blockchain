import React, { Component } from "react";
import * as firebase from "firebase";

import "./Auth.css";
var proper;
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loginBtnClickHandler = this.loginBtnClickHandler.bind(this);
    proper = this.props;
  }

  loginBtnClickHandler() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        var user = result.user;

        // The signed-in user info.

        // ...

        proper.onEvent({ status: 200, uid: user.uid });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        //alert("Failed");
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        proper.onEvent({ status: 500 });
        // ...
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md">
            <img src="logo.png" className="logo-class img-responsive" />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="auth-button text-center">
              {" "}
              <div>
                <button
                  onClick={this.loginBtnClickHandler}
                  className="btn  navbar-btn  "
                >
                  <div className="left">
                    <img
                      width="20px"
                      alt="Google &quot;G&quot; Logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    />
                  </div>
                  &nbsp;&nbsp;Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
