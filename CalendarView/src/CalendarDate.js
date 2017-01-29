import React, {Component} from 'react';
import * as firebase from 'firebase';
import './CalendarDate.css'

class CalendarDate extends Component {
    constructor(props) {
        super(props);
        this.updateDate = this.updateDate.bind(this);
        this.hasPost = this.hasPost.bind(this);
    }

    updateDate() {
        this.props.selDate(this.props.day);
    }

    hasPost() {
        var user = firebase.auth().currentUser;

        if (user) {
            // User is signed in.
        } else {
            console.error('no user signed in ');
        }

        var dateformat = require('dateformat');
        var date = new Date(this.props.year, this.props.month, this.props.day)
        date = dateformat(date, "mmddyyyy");

        var text;
        var textRef = firebase.database().ref('user/'+user.uid+'/posts/'+date.toString());
          textRef.on('value', function (snapshot) {
              text = snapshot.val();
          });
          if (text) {
              return true;
          } else {
              return false;
          }

        // this.database.ref('user/'+user.uid+'/posts/'+date.toString()).set({
        //   text:txt
        // });
    }

    render() {
        if (this.props.day < 0) {
            return (
                <div className="CalendarDate">
                </div>
            );
        }

        else if (this.hasPost()) {
            return (
                <div className="CalendarDate InMonth" onClick={this.updateDate}>
                    <h4>{this.props.day}</h4>
                    <div className="glyphicon glyphicon-align-justify pull-right"></div>
                </div>
            );
        }

        else {
            return (
                <div className="CalendarDate InMonth" onClick={this.updateDate}>
                    <h4>{this.props.day}</h4>
                </div>
            );
        }
    }

}

export default CalendarDate;