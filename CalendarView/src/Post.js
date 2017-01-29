import React, {Component} from 'react';
import './Post.css';

var placeHolderText = "Lorem ipsum dolor sit amet, quot intellegat te eos. Dicta lucilius conceptam ad qui, luptatum sapientem percipitur eos at, sumo sanctus pri an. Duis ipsum constituto vel ut, epicurei adolescens vel no, te causae verear explicari eos. Ornatus voluptua cu vel, menandri eloquentiam est ut. At accumsan legendos philosophia vel, nec cu meliore fastidii assueverit. Eam brute invenire forensibus at, at quaestio gloriatur dissentiunt pro.\nUsu graeci commune et, ipsum causae vix ei, sit et liber homero deleniti. Has persius euismod perfecto ex, vis eirmod consetetur temporibus ea. Sensibus molestiae quo in. Diam virtute et vix, patrioque hendrerit definitiones has at, cu vim recusabo temporibus cotidieque.\nEt has tempor postea verear, inimicus scripserit sed ex. Possim officiis duo ut. At docendi referrentur definitiones mei, id putant epicurei partiendo sed, paulo nostrud constituto nam ut. Nec id persius eripuit suavitate, mei ad facete gloriatur sententiae.\nFerri forensibus disputando nam eu, tritani civibus accommodare ea pri. Ius verterem moderatius sadipscing an, paulo putant laboramus in usu. Eu reque perpetua instructior vim, cu pri iudicabit dissentiet, oratio maiestatis ullamcorper est cu. His accumsan recusabo definitionem te, audiam ocurreret salutatus te quo. Has id alii admodum.\nPrincipes conceptam ne sea. Quis oblique ut nec. Mel melius nostrud molestiae in. Maiestatis intellegebat te sit, mea ea dicta accusata. Eum ut stet purto iriure. Has in graeci denique offendit. Ea possim audire labitur per, tamquam malorum bonorum at his."

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {editable: false, text: placeHolderText, oldText: ''}
    this.editPost = this.editPost.bind(this)
    this.savePost = this.savePost.bind(this)
    this.updateText = this.updateText.bind(this)
  }

  /* State changing functions. */

  editPost() {
    this.setState({oldText: this.state.text, editable: true});
  }

  savePost() {
    this.setState({editable: false});
  }

  updateText(event) {
    this.setState({text: event.target.value})
  }

  /* State-based rendering functions */

  renderPost() {
    if (this.state.editable) {
        return (
            <input type="text" onChange={this.updateText} value={this.state.text}/>
        );
    }
    else {
        return this.state.text;
    }
  }

  renderOptions() {
    if (this.state.editable) {
        return(
            <button type="button" className="btn btn-success pull-right" onClick={this.savePost}>
                Save
            </button>
        );
    }
    else {
        return(
            <button type="button" className="btn btn-primary pull-right" onClick={this.editPost}>
                Edit
            </button>
        );
    }
  }

  render() {
    return (
        <div id="Login" className="container">
            <p id="title">Untitled</p>
            <script>
                //var dateformat = require('dateformat');
                var date = new Date();
                //dateFormat(date, "dddd, mmmm dS, yyyy");
                document.getElementById("title").innerHTML = date.toString();
            </script>
            <div className="editable" id="post">                
                <div>
                {this.renderPost()}
                  <button type="button" className="btn btn-danger pull-right">Delete</button>
                {this.renderOptions()}
                </div>
            </div>
        </div>
    )
  }

};

export default Post;