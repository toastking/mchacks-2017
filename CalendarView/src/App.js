import React, {Component} from 'react';
import Calendar from './Calendar';
import Login from './Login';


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
  }
};

export default App;