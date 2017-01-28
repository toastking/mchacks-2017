/*jshint esversion: 6 */
import * as firebase from 'firebase/app';
var database = firebase.database;
var ref;

class UserModel {
    constructor(emails) {
        this.email = email;
        this.user = firebase.auth().currentUser.uid;
        this.posts = [];

        ref = database.ref("users/" + this.user + "/posts");
        this.getPosts(); //get the posts
    }
    updatePosts(newPost) {
        this.posts = newPost;
    }

    getPosts() {
        ref.on('value', function(snapshot) {
            updatePosts(snapshot.val());
        });
    }
}

export default UserModel;
