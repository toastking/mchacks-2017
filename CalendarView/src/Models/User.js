/*jshint esversion: 6 */
import * as firebase from 'firebase/app';
var database = firebase.database;
var ref;

class UserModel {
    constructor(email, user, posts) {
        this.email = email;
        this.user = user;
        this.posts = [];
        ref = database.ref("users/" + this.user + "/posts");
    }
    updatePosts(newPost) {
        this.posts = newPost;
    }

    getPosts() {
        starCountRef.on('value', function(snapshot) {
            updatePosts(snapshot.val());
        });
    }
}
