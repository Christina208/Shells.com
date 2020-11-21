import React from "react";
import VideoListChild from "./VideoListChild";
import * as videoService from "../../services/videoService";
import { toast } from "react-toastify";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      mappedVideos: [],
      searchTerm: "",
      currentPage: 1,
      pageSize: 8,
    };
  }
  componentDidMount() {
    videoService
      .getRenderVideos()
      .then(this.onRenderSuccess)
      .catch(this.onGetError);
  }
  onRenderSuccess = (response) => {
    const videos = response.items;

    console.log(response.items);
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedVideos: videos.map(this.mapVideo),
      };
    });
  };
  onGetError = (error) => {
    console.log(error);
  };

  mapVideo = (video) => (
    <VideoListChild
      video={video}
      handleEdit={this.routeToEdit}
      handleDelete={this.handleDelete}
      key={video.id}
    />
  );
  routeToEdit = (video) => {
    this.props.history.push(`video/${video.id}/edit`, video);
  };

  onNewVidClick = () => {
    this.props.history.push(`/create`);
  };
  handleDelete = (video) => {
    console.log(video);

    videoService
      .remove(video.id)
      .then(this.onDeleteSuccess)
      .catch(this.handleDeleteError);
  };

  onDeleteSuccess = (id) => {
    console.log(id);
    toast.success("Delete Successful!", {
      closeOnClick: true,
      position: "top-center",
    });
    console.log(this.state.mappedVideos);
    this.setState((prevState) => {
      const indexofVideo = prevState.mappedVideos.findIndex(
        (video) => parseInt(video.id) === id
      );

      let mappedVideos = [...prevState.mappedVideos];
      if (indexofVideo >= 0) {
        mappedVideos.splice(indexofVideo, 1);
      }
      return {
        mappedVideos,
      };
    });
    console.log(this.state.mappedVideos);
  };

  handleDeleteError = () => {
    toast.error("Delete Failed!", {
      closeOnClick: true,
      position: "top-center",
    });
    console.log("Delete Failed!");
  };

  handleSearch = (event) => {
    let searchTerm = event.target.value;
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          currentPage: 1,
          searchTerm,
        };
      },
      () => this.returnSearchCondition()
    );
  };
  returnSearchCondition = () => {
    return this.state.searchTerm.length > 0
      ? this.searchQuery(this.state.currentPage, this.state.pageSize)
      : null;
  };

  searchQuery = (pageIndex, pageSize) => {
    videoService
      .search(this.state.searchTerm, pageIndex - 1, pageSize)
      .then(this.onRenderSuccess)
      .catch(this.onGetError);
  };

  render() {
    return (
      <React.Fragment>
        <div className="card-body">
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="text-center">Videos</h1>
          </div>
          <div className="row">
            {/* {this.props.currentUser.isLoggedIn ? ( */}
            <button
              type="button"
              className="btn-pill btn btn-primary btn-sm float-left"
              onClick={this.onNewVidClick}
            >
              Create New Video Entry
            </button>
            {/* ) : null} */}
          </div>

          <div className=" ">
            <input
              type="text"
              aria-label="Search"
              name="searchText"
              id="searchText"
              onChange={this.handleSearch}
              value={this.state.searchText}
              className="form-control-plaintext searchBox"
              placeholder="Search Videos"
            />
          </div>
        </div>
        <div className="row">{this.state.mappedVideos}</div>
      </React.Fragment>
    );
  }
}
export default VideoList;
