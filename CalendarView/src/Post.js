import React, {Component} from 'react';
import './Post.css';
import * as firebase from 'firebase';
import $ from 'jquery';
import jQuery from 'jquery';

var placeHolderText = "Lorem ipsum dolor sit amet, quot intellegat te eos. Dicta lucilius conceptam ad qui, luptatum sapientem percipitur eos at, sumo sanctus pri an. Duis ipsum constituto vel ut, epicurei adolescens vel no, te causae verear explicari eos. Ornatus voluptua cu vel, menandri eloquentiam est ut. At accumsan legendos philosophia vel, nec cu meliore fastidii assueverit. Eam brute invenire forensibus at, at quaestio gloriatur dissentiunt pro.\nUsu graeci commune et, ipsum causae vix ei, sit et liber homero deleniti. Has persius euismod perfecto ex, vis eirmod consetetur temporibus ea. Sensibus molestiae quo in. Diam virtute et vix, patrioque hendrerit definitiones has at, cu vim recusabo temporibus cotidieque.\nEt has tempor postea verear, inimicus scripserit sed ex. Possim officiis duo ut. At docendi referrentur definitiones mei, id putant epicurei partiendo sed, paulo nostrud constituto nam ut. Nec id persius eripuit suavitate, mei ad facete gloriatur sententiae.\nFerri forensibus disputando nam eu, tritani civibus accommodare ea pri. Ius verterem moderatius sadipscing an, paulo putant laboramus in usu. Eu reque perpetua instructior vim, cu pri iudicabit dissentiet, oratio maiestatis ullamcorper est cu. His accumsan recusabo definitionem te, audiam ocurreret salutatus te quo. Has id alii admodum.\nPrincipes conceptam ne sea. Quis oblique ut nec. Mel melius nostrud molestiae in. Maiestatis intellegebat te sit, mea ea dicta accusata. Eum ut stet purto iriure. Has in graeci denique offendit. Ea possim audire labitur per, tamquam malorum bonorum at his.";

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
      
      var text = firebase.database().ref('user/'+user.uid+'/posts/'+date.toString());
      console.log(text);
      if (text) {
          document.getElementById("post").innerText = text;
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