import React, {Component} from 'react';
import Calendar from './Calendar';
import Login from './Login';
import Post from './Post';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userStatus: 'calendar', date: new Date()}
    this.selectedDateFromCalendar = this.selectedDateFromCalendar.bind(this);
    this.selectedDateFromPost = this.selectedDateFromPost.bind(this);
    this.exitPostToCalendar = this.exitPostToCalendar.bind(this);
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

  render() {
    if (this.state.userStatus === 'login') {
      return (<div className="App">
          <Login />
        </div>)
    }
    if (this.state.userStatus === 'calendar') {
      return (
        <div className="App">
          <Calendar selDate={this.selectedDateFromCalendar} date={this.state.date}/>
        </div>
      );
    }
    if (this.state.userStatus === 'post') {
      return (
        <div className="App">
          <Post date={this.props.date} dateChange={this.selectedDateFromPost} exitPost={this.exitPostToCalendar}/>
        </div>
      );
    }
  }
};

export default App;