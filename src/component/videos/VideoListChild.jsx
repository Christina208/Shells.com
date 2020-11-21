import React from "react";
import "./../../video.css";

const VideoListChild = (props) => {
  console.log(props);

  const onEditClick = () => {
    props.handleEdit(props.video);
  };
  const onDeleteClick = () => {
    props.handleDelete(props.video);
  };
  return (
    <React.Fragment>
      <div className="col-lg-3 col-md-3 col-sm-6 mb-grid-gutter">
        <div
          className={`card card-curved-body card-hover border-0 box-shadow mx-auto`}
          style={{ width: "21rem" }}
        >
          <div className="card-img-top card-img-gradient">
            <img
              src={props.video.coverPicture}
              className="card-img-top"
              alt="Oops..Sorry!"
            />
          </div>
          <div className="card-body text-center">
            <h5 className="h6 card-title mb-2">{props.video.title}</h5>
            <p className="card-text">{props.video.synopsis}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.video.releaseDate}</li>
            <li className="list-group-item">{props.video.type}</li>
            <li className="list-group-item">{props.video.userRating}</li>
          </ul>
          {/* {props.currentUser.isLoggedIn ? ( */}
          <button
            type="button"
            className="btn-pill btn btn-primary btn-sm float-left"
            onClick={onEditClick}
          >
            Edit
          </button>
          {/* ) : null} */}
          {/* {props.currentUser.isLoggedIn ? ( */}
          <button
            type="button"
            className="btn-pill btn btn-danger btn-sm float-left"
            onClick={onDeleteClick}
          >
            Delete
          </button>
          {/* ) : null} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoListChild;
