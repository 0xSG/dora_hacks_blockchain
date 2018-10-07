import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import Auth from "./Auth/Auth";

import Home from "./Home/Home";
//import Auth from "./../Auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { status: false };
    var config = {
      apiKey: "AIzaSyDS18k-EBnMfdYSsu5zyNKw2WKOmDccE8M",
      authDomain: "dorahacks-46355.firebaseapp.com",
      databaseURL: "https://dorahacks-46355.firebaseio.com",
      projectId: "dorahacks-46355",
      storageBucket: "dorahacks-46355.appspot.com",
      messagingSenderId: "866832139187"
    };
    firebase.initializeApp(config);
    this.onEventHandler = this.onEventHandler.bind(this);
    this.getViews = this.getViews.bind(this);
  }
  onEventHandler(event) {
    if (event.status == 500) {
      //alert("Login failed");

      this.setState({ status: "false" });
    } else {
      this.setState({ status: "true" });
      // Get the uid of the user from the auth component
      this.forceUpdate();
    }
    if (event.status == 200) {
      this.setState({ status: "true" });
      this.setState({ uid: event.uid });
    }
  }

  getViews() {
    if (this.state.status == "true") {
      //alert(this.state.uid);
      console.log();
      if (this.state.uid != undefined) return <Home uid={this.state.uid} />;
    } else {
      return <Auth onEvent={this.onEventHandler} />;
    }
  }
  render() {
    return <div className="App">{this.getViews()}</div>;
  }
}

export default App;
