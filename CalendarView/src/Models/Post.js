/*jshint esversion: 6 */

import * as firebase from 'firebase/app';
var database = firebase.database;

class PostModel {

  constructor(text, sentiment,date_posted ){
    this.user = this.uid = firebase.auth().currentUser.uid;
    this.text = text;
    this.sentiment = sentiment;
    this.date_posted = date_posted;
    var ref = database.ref('users/'+user+'/posts/');

  }

  //method to save the post to firebase
  savePost(){
  debugger; //TODO: remove debugger statement
  console.log(JSON.stringify(this));
    //push the stringified verson of the json string
    ref.push(JSON.stringify(this));

  }
}

export default PostModel;
