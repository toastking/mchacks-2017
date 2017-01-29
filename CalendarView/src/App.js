import React, {Component} from 'react';
import Calendar from './Calendar';
import Login from './Login';
import Post from './Post';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userStatus: 'calendar', date: new Date()}
    this.selectedDate = this.selectedDate.bind(this);
  }

  selectedDate(selDate) {
    this.setState({date: selDate, userStatus: 'post'});
    console.log(selDate);
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