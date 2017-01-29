import React, {Component} from 'react';
import './Post.css';
import * as firebase from 'firebase';
import $ from 'jquery';
import jQuery from 'jquery';

var placeHolderText = "Click 'Edit' to create a new post.";

class Post extends Component {
  constructor(props) {
      super(props);
      this.state = {
          editable: false,
          text: placeHolderText,
          oldText: ''
      };
      this.editPost = this.editPost.bind(this);
      this.savePost = this.savePost.bind(this);
      this.updateText = this.updateText.bind(this);
      this.database = firebase.database();
      this.backButton = this.backButton.bind(this);

      /* The following functions are for changing application state. 
      Call this.props.dateChange(date()) to change the date you are currently on.
      Call this.props.exitPost() to bring the user back to calendar view.
      this.props.date is the current date. Please use this to set the date title instead of new Date().
  */
  }

  componentDidMount() {
      this.retrievePost();
  }

    /* State changing functions.

    TODO: Implement a cancel button.
  */

  editPost() {
    this.setState({oldText: this.state.text, editable: true});
    document.getElementById("post").contentEditable = 'true';
    document.getElementById("post").focus();
  }

    savePost() {
        this.setState({editable: false});
        document.getElementById("post").contentEditable = 'false';
        var user = firebase.auth().currentUser;

        if (user) {
            // User is signed in.
        } else {
            console.error('no user signed in ');
        }

        var dateformat = require('dateformat');
        var date = this.props.date;
        date = dateformat(date, "mmddyyyy");

        var txt = document.getElementById("post").innerText;
        this.database.ref('user/'+user.uid+'/posts/'+date.toString()).set({
          text:txt
        });
    }

    backButton() {
        this.props.exitPost();
    }


    updateText(event) {
        this.setState({text: event.target.value});
    }

    /* State-based rendering functions */

    renderPost() {
        if (this.state.editable) {
            return (<input type="text" className="editor" />);
        } else {
            return this.state.text;
        }
    }

    renderOptions() {
        if (this.state.editable) {
            return (
                <button type="button" className="btn btn-success pull-right" onClick={this.savePost}>
                    Save
                </button>
            );
        } else {
            return (
                <button type="button" className="btn btn-info pull-right" onClick={this.editPost}>
                    Edit
                </button>
            );
        }
    }

  makeTitleDate() {
    var dateformat = require('dateformat');
    var date = this.props.date;
    console.log(date);
    date = dateformat(date, "dddd, mmmm dS, yyyy");

    return (<p id="title">{date}</p>);
  }

  retrievePost() {
      var user = firebase.auth().currentUser;

      var dateformat = require('dateformat');
        var date = this.props.date;
        console.log(date);
        date = dateformat(date, "mmddyyyy");
      
      var text;

      var textRef = firebase.database().ref('user/'+user.uid+'/posts/'+date.toString());
      textRef.on('value', function (snapshot) {
          text = snapshot.val();
      });
      if (text) {
          document.getElementById("post").innerText = text['text'];
      } else {
          // do nothing
      }
  }

  render() {
    return (
        <div id="Login" className="container">
                {this.makeTitleDate()}
            <div className="editable" id="post">{this.state.text}</div>
            <div className="editable">
                <button type="button" className="btn btn-default pull-right" onClick={this.backButton}>Back</button>
                <button type="button" className="btn btn-primary pull-right">Delete</button>
                {this.renderOptions()}
            </div>
        </div>
        );
    }
}

export default Post;