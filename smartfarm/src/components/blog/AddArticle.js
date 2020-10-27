import React, { Component } from "react";
import { connect } from "react-redux";
import { createMessage } from "../../actions/messages";
import { addArticles } from "../../actions/articles";

export class AddArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crop: "",
      title: "",
      content: "",
      image: "",
      value: "2",
    };
  }
  handleSelectChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.crop === "") {
      const msg = {
        CropBlank: "Crop field cannot be blank",
      };
      this.props.createMessage(msg);
    } else if (this.state.title === "") {
      const msg = {
        TitleBlank: "Title field cannot be blank",
      };
      this.props.createMessage(msg);
    } else if (this.state.value === "") {
      const msg = {
        StageBlank: "Stage cannot be blank",
      };
      this.props.createMessage(msg);
    } else if (this.state.content === "") {
      const msg = {
        ContentBlack: "Content cannot be blank",
      };
      this.props.createMessage(msg);
    } else {
      //do something
      const crop = this.state.crop;
      const title = this.state.title.toString();
      const content = this.state.content.toString();
      const stage = this.state.value.toString();
      const farmer = this.props.user.id.toString();
      this.props.addArticles(crop, farmer, title, stage, content);
    }
  };

  componentDidMount = () => {};
  render() {
    return (
      <div className="container-fluid registerApp">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div>
              <p className="mt-5">
                What have you learnt in your farming carreer? Help an upcoming
                farmer to improve their produce by sharing your gained skills. A
                candle loses nothing by lighting another candle.
              </p>
            </div>
            <form onSubmit={this.handleSubmit} className="mt-5 mb-5">
              <legend className="text-success">
                Share your skills, ideas or advice
              </legend>
              <div>
                <label htmlFor="crop">Which crop </label>
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="crop"
                  name="crop"
                  value={this.state.crop}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="title">Give your article a great title</label>
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="stage">Which stage of production?</label>
              </div>
              <div>
                <select
                  value={this.state.value}
                  onChange={this.handleSelectChange}
                  id="stage"
                  className="mb-3"
                >
                  <option name="Crop Selection" value="2">
                    Crop Selection
                  </option>
                  <option name="Land Preparation" value="1">
                    Land Preparation
                  </option>
                  <option name="Crop Care" value="3">
                    Crop Care
                  </option>
                  <option name="Post Harvesting" value="4">
                    Post Harvesting
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="content">Content</label>
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="content"
                  name="content"
                  value={this.state.content}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="mt-2">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message)),
    addArticles: (crop, farmer, title, stage, content) =>
      dispatch(addArticles(crop, farmer, title, stage, content)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);
