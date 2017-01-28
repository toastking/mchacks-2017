/*jshint esversion: 6 */

import * as firebase from 'firebase/app';
var database = firebase.database;

class PostModel {

  constructor(user, uid, text, sentiment,date_posted ){
    this.user = user;
    this.uid = uid;
    this.text = text;
    this.sentiment = sentiment;
    this.date_posted = date_posted;
    var ref = database.ref('users/'+user+'/posts/');

  }

  //method to save the post to fireabse
  savePost(){
  debugger;
  console.log(JSON.stringify(this));
    //push the stringified verson of hte json string
    ref.push(JSON.stringify(this));

  }
}

export default PostModel;
