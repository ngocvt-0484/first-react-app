import React, { Component } from 'react';
import {dumpLogs} from './checkArr.js'
import css from './BlogCard.module.css'

class BlogCard extends Component {
  render() {
    console.log("blog card rendered")
    return(
      <div className={css.BlogCard} >
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p> Like count: {this.props.likeCount} </p>
          <button onClick={this.props.onLikeBtnClick}>Like</button>
        </div>
      )
  }
}

export default BlogCard;
