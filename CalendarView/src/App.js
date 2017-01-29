import React, {Component} from 'react';
import Calendar from './Calendar';
import Login from './Login';
import Post from './Post';
import * as firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {userStatus: 'login',user:null};
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB6H5_NMYiRAHG0KaKLJXcKcMkO_hC30Gc",
      authDomain: "emo-journal.firebaseapp.com",
      databaseURL: "https://emo-journal.firebaseio.com",
      storageBucket: "emo-journal.appspot.com",
      messagingSenderId: "900624791438"
    };
    firebase.initializeApp(config);
  }


  handleLogin(){
    debugger;
    this.setState({userStatus: 'calendar', date: new Date()});
    this.selectedDate = this.selectedDate.bind(this);
  }

  selectedDate(selDate) {
    this.setState({date: selDate, userStatus: 'post'});
    console.log(selDate);
  }

  render() {
    if (this.state.userStatus === 'login') {
      return (<div className="App">
          <Login done={this.handleLogin} />
        </div>)
    }
    if (this.state.userStatus === 'calendar') {
      return (
        <div className="App">
          <Calendar selDate={this.selectedDate}/>
        </div>
      );
    }
    if (this.state.userStatus === 'post') {
      return (
        <div className="App">
          <Post date={this.props.date}/>
        </div>
      );
    }
  }
};

export default App;
