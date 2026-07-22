import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imageUrl ||
            "https://www.twz.com/wp-content/uploads/2026/07/Port-Alpha.jpg?w=1200"
          }
          className="card-img-top"
          alt={title}
          onError={(e) => {
            e.target.src =
              "https://www.twz.com/wp-content/uploads/2026/07/Port-Alpha.jpg?w=1200";
          }}
        />
        <div className="card-body">
          <span className="badge rounded-pill text-bg-danger my-2">{source}</span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>

          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;




// Theory:
// constructor(){
//     super();
//     console.log('Hello i am a constructor');
// }
// when ever use constructor use super() also we can set state from here
