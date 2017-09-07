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

/// this bids it ...
  handleChange = (event) => {
    this.setState ({
      commentBox: event.target.value
    });
  }

  handleSubmit = () => {
    if (this.state.commentBox === "") {
      return;
    }
    const copyState = Object.assign({} , this.state);
    // string
    // copyState.commentList.push(this.state.commentBox);
    // object
    copyState.commentList.push({comment: this.state.commentBox, likes:0, dislikes:0, love:0, laugh:0, wow:0, sad:0, mad:0 });
    copyState.commentBox = '';
    this.setState(copyState);
  }
  handleDelete = (i) => {
    const newState = Object.assign({} , this.state);
    newState.commentList.splice(i, 1);
    this.setState(newState);
  }
  handleLikes = (i) => {
    const CommentBox = this.state.commentList.slice();
    CommentBox[i].likes++
    this.setState({
      commentList: CommentBox
    })
  }
  handleDislikes = (i) => {
    const CommentBox = this.state.commentList.slice();
    CommentBox[i].dislikes++
    this.setState({
      commentList: CommentBox
    })
  }
//////
handleLove = (i) => {
  const CommentBox = this.state.commentList.slice();
  CommentBox[i].love++
  this.setState({
    commentList: CommentBox
  })
}
handleLaugh = (i) => {
  const CommentBox = this.state.commentList.slice();
  CommentBox[i].laugh++
  this.setState({
    commentList: CommentBox
  })
}
handleWow = (i) => {
  const CommentBox = this.state.commentList.slice();
  CommentBox[i].wow++
  this.setState({
    commentList: CommentBox
  })
}
 handleSad = (i) => {
    const CommentBox = this.state.commentList.slice();
    CommentBox[i].sad++
    this.setState({
      commentList: CommentBox
    })
  }
  handleMad = (i) => {
    const CommentBox = this.state.commentList.slice();
    CommentBox[i].mad++
    this.setState({
      commentList: CommentBox
    })
  }
  render() {
    let commentList = this.state.commentList.map((comment, i) => {
      return (
        <div key={i}>
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
      <h1>RoadtohireBook</h1>
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
