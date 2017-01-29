import React, {Component} from 'react';
import Calendar from './Calendar';
import Login from './Login';
import Post from './Post';
import * as firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userStatus: 'login', date: new Date(), user: null, signedOut: null, incorrectPass: null}
    this.selectedDateFromCalendar = this.selectedDateFromCalendar.bind(this);
    this.selectedDateFromPost = this.selectedDateFromPost.bind(this);
    this.exitPostToCalendar = this.exitPostToCalendar.bind(this);
    this.handleLogin = this.handleLogin.bind(this);    // Initialize Firebase
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
    this.setState({userStatus: 'calendar', date: new Date()});
    this.selectedDate = this.selectedDate.bind(this);
  }

  selectedDateFromCalendar(selDate) {
    this.setState({date: selDate, userStatus: 'post'});
  }

  selectedDateFromPost(selDate) {
    this.setState({date: selDate});
  }


  exitPostToCalendar() {
    this.setState({userStatus: 'calendar'})
  }

 signout(){
    firebase.auth().signOut().then(function() {
            console.log('Signed Out');
    }, function(error) {
        console.error('Sign Out Error', error);
  });
 }

  
  render() {
    if (this.state.userStatus === 'login') {
      return (<div className="App">
          <Login done={this.handleLogin} signedOut={this.state.signedOut}/>
        </div>)
    }
    if (this.state.userStatus === 'calendar') {
      return (
        <div className="App">
          <Calendar selDate={this.selectedDateFromCalendar} date={this.state.date} signout={this.signout}/>
        </div>
      );
    }
    if (this.state.userStatus === 'post') {
      return (
        <div className="App">
          <Post date={this.state.date} dateChange={this.selectedDateFromPost} exitPost={this.exitPostToCalendar}/>
        </div>
      );
    }
  }
};

export default App;
