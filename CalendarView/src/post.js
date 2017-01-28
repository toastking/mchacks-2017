// page entry for journal
//import PostModel from 'Post';

function editPage() {
    document.getElementById("post").contentEditable = 'true';
}

function savePage() {
    document.getElementById("post").contentEditable = 'false';
    var date = new Date();
    var text = document.getElementById("post").textContent;
    //var post = PostModel(text,0,date);
    //post.savePost();
}