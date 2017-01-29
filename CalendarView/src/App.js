import React, {Component} from 'react';
import Calendar from './Calendar';
import Login from './Login';
import Post from './Post';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userStatus: 'calendar'}
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
          <Calendar />
        </div>
      );
    }
    if (this.state.userStatus === 'post') {
      return (
        <div className="App">
          <Post />
        </div>
      );
    }
  }
};

export default App;