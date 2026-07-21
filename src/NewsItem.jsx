import React, { Component } from "react";

export class NewsItem extends Component {
  // constructor(){
  //     super();
  //     console.log('Hello i am a constructor');
  // }
  // when ever use constructor use super() also we can set state from here

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imageUrl || "https://www.twz.com/wp-content/uploads/2026/07/Port-Alpha.jpg?w=1200"}
            className="card-img-top"
            alt={title}
            onError={(e) => {
              e.target.src = "https://www.twz.com/wp-content/uploads/2026/07/Port-Alpha.jpg?w=1200";
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
