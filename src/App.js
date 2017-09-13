import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      commentBox:'',
      commentList:[]
    };
  };

/// this bids it ... function = (param) =>

// gathers the value of the input.
  handleChange = (event) => {
    this.setState ({
      commentBox: event.target.value
    });
  }
  replyHandleChange = (event, i) => {
      const copyState = Object.assign({} , this.state);
      const comment = copyState.text[i];
      comment.input=event.target.value
      this.setState ({
      copyState
    })
  }
/// Submit button make's it work properly
  handleSubmit = () => {
    /// if the input is empty return or stop from executing.
    if (this.state.commentBox === "") {
      return;
    }
    // remember when copying state you have to copy the object
    const copyState = Object.assign({} , this.state);
    // string
    // copyState.commentList.push(this.state.commentBox);
    // object
    const comments ={
      comment: this.state.commentBox,
      likes:0,
      dislikes:0,
      love:0,
      laugh:0,
      wow:0,
      sad:0,
      mad:0,
      replyBox:[],
      replyInput:''
    };
    copyState.commentList.push(comments);
    copyState.commentBox = '';
    this.setState(copyState);
  }
  handleAddReply(i) {
      const copyState = Object.assign({} , this.state);
      const comment = copyState.commentList[i]
      if(comment.replyInput === "") {
        return
      }
  const reply = {
      comment: '',
      likes:0,
      dislikes:0,
      love:0,
      laugh:0,
      wow:0,
      sad:0,
      mad:0,
    };
    comment.replyBox.push.reply;
    comment.replyInput = "";
    this.setState(copyState);
}
  handleDelete = (i) => {
    const newState = Object.assign({} , this.state);
    newState.commentList.splice(i, 1);
    this.setState(newState);
  }
  handleLaugh = (i) => {
  const CommentBox = this.state.commentList.slice();
  CommentBox[i].Laugh++
  this.setState({
    commentList: CommentBox
  })
}
handleWow = (i) => {
  const CommentBox = this.state.commentList.slice();
  CommentBox[i].Wow++
  this.setState({
    commentList: CommentBox
  })
}
 handleSad = (i) => {
    const CommentBox = this.state.commentList.slice();
    CommentBox[i].Sad++
    this.setState({
      commentList: CommentBox
    })
  }
  handleMad = (i) => {
    const CommentBox = this.state.commentList.slice();
    CommentBox[i].Mad++
    this.setState({
      commentList: CommentBox
    })
  }
  render() {
    const commentList = this.state.commentList.map((comment, i) => {
      return (
        <div className="theComments"key={i}>
          <span>{comment.comment}</span>
          <div className="likes">
            <div className="reactions">
            <button onClick={() => this.handleLikes(i)}>&#128077;{comment.likes}</button>
            <button onClick={() => this.handleDislikes(i)} >&#128078;{comment.dislikes}</button>
            <button onClick={() => this.handleLove(i)} >❤️{comment.love}</button>
            <button onClick={() => this.handleLaugh(i)} >😂{comment.laugh}</button>
            <button onClick={() => this.handleWow(i)} >😲{comment.wow}</button>
            <button onClick={() => this.handleSad(i)} >😞{comment.sad}</button>
            <button onClick={() => this.handleMad(i)} >😡{comment.mad}</button>
            <button className="Delete" onClick={() => this.handleDelete(i)}>✖️</button>
          </div>
        </div>
    </div>
      );
    })
    return (

      <div className="App">
        <div className="App-header">
          <h2>Road to Hire Book</h2>
        </div>
      <div className="CommentBox">
        <input value={this.state.commentBox} placeholder=" Write a comment..." onChange={this.handleChange} />
        <button onClick= {this.handleSubmit}>Submit</button>
          <p>Comments:</p>
    <div className="comments">
        {commentList}
    </div>
      </div>
    </div>
    );
  }
}

export default App;
