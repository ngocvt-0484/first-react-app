import React, {Component} from 'react';
import './App.css';
import BlogCardItem from './BlogCard'; // co the custom ten
import {isArrayEmpty} from './checkArr'; // phai cung ten function

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    showBlog: true,
    blogArr: [{
        id: 1,
        title: "Blog title 1",
        description: "lorem isump dolor",
        likeCount: 0
      },
      {
        id: 2,
        title: "Blog title 2",
        description: "lorem isump dolor",
        likeCount: 0
      },
      {
        id: 3,
        title: "Blog title 3",
        description: "lorem isump dolor",
        likeCount: 0
      }]
   }

   console.log("inside constructor")
  }


  componentDidMount() {
    console.log("componentDidMount")
  }
 getFullName = (firstName, lastName) => {
    return `Fullname: ${firstName} ${lastName}`;
  };

 detailsInputBox = <input
    placeholder ={this.inputPlaceHolder}
    autoComplete />;
 blogObj = {title: "Titlte", description: "DescriptionDescriptionDescriptionDescription"}

 style = {
    margin: '16px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px #ccc'
  }

  onLikeBtnClick = (pos) => {
    console.log("clicked");
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];
    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;
    this.setState({blogArr: updatedBlogList});
  }



 onHideButton = () => {
    let updatedState = !this.state.showBlog;
    // this.setState({showBlog: updatedState})
    this.setState((prevState, prevProps) => {
      return {showBlog: !prevState.showBlog}
    })
  };

  render () {
    console.log("render called")
    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
      return (
        // <div className="BlogCard" key={item.id}>
        //   <h3>{item.title}</h3>
        //   <p>{item.description}</p>
        // </div>
          <BlogCardItem key={pos} title={item.title} description={item.description} likeCount={item.likeCount}
            onLikeBtnClick={() => this.onLikeBtnClick(pos)} positition={pos} />
        )
      })
    console.log(this.state);
    return(
      <div className="App">
        <button onClick={this.onHideButton}>{this.state.showBlog ? "Hide list" : "Show list"}</button>

        <div className="App2">
          {this.state.showBlog ? blogCards : null}
        </div>
    </div>
    );
  }
}

export default App;
