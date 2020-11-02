import React, { Component } from "react";
import { connect } from "react-redux";
import { createMessage } from "../../actions/messages";
import { addArticles, loadArticles } from "../../actions/articles";
import CKEditor from "ckeditor4-react";
import { Redirect } from "react-router-dom";

export class AddArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crop: "maize",
      title: "",
      content: "",
      image: "",
      value: "seedselection",
      excerpt: "",
      articleImage: "",
      data: "",
      articleAdded: false,
    };
  }
  onEditorChange = (event) => {
    this.setState({
      data: event.editor.getData(),
    });
  };

  handleCropChange = (event) => {
    this.setState({
      crop: event.target.value,
    });
  };
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

  handleFileChange = (event) => {
    this.setState({
      articleImage: event.target.files[0],
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
    } else if (this.state.data === "") {
      const msg = {
        ContentBlank: "Content cannot be blank",
      };
      this.props.createMessage(msg);
    } else if (this.state.articleImage === "") {
      const msg = {
        ImageBlank: "Please upload an image file",
      };
      this.props.createMessage(msg);
    } else {
      const crop = this.state.crop;
      const title = this.state.title;
      const content = this.state.data;
      const stage = this.state.value;
      const farmer = this.props.user.id;
      const cropimage = this.state.articleImage;
      const excerpt = this.state.excerpt;
      this.props.addArticles(
        title,
        crop,
        stage,
        excerpt,
        content,
        cropimage,
        farmer
      );
      this.setState({
        articleAdded: true,
      });
    }
  };

  componentDidMount = () => {};
  render() {
    if (this.state.articleAdded) {
      this.props.loadArticles(this.state.value);
      return <Redirect to="articles" />;
    }
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
                <label htmlFor="crop" className="mt-2">
                  {" "}
                  Which Crop?
                </label>
              </div>
              <select
                value={this.state.crop}
                onChange={this.handleCropChange}
                id="crop"
                className="mb-3"
              >
                <option name="Maize" value="maize">
                  Maize
                </option>
                <option name="Wheat" value="wheat">
                  Wheat
                </option>
                <option name="Rice" value="rice">
                  Rice
                </option>
                <option name="Tea" value="tea">
                  Tea
                </option>
                <option name="coffee" value="coffee">
                  coffee
                </option>
                <option name="Flowers" value="flowers">
                  Flowers
                </option>
                <option name="Banana" value="banana">
                  Banana
                </option>
                <option name="Avocando" value="avocando">
                  Avocando
                </option>
                <option name="Cotton" value="cotton">
                  Cotton
                </option>
                <option name="Groundnuts" value="groundnuts">
                  Groundnuts
                </option>
                <option name="Lettuce" value="lettuce">
                  Lettuce
                </option>
                <option name="Carrot" value="carrot">
                  Carrot
                </option>
                <option name="Tomato" value="tomato">
                  Tomato
                </option>
                <option name="Sugar cane" value="sugarCane">
                  Sugar cane
                </option>
              </select>
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
                  <option name="Crop Selection" value="seedselection">
                    Crop Selection
                  </option>
                  <option name="Land Preparation" value="landprep">
                    Land Preparation
                  </option>
                  <option name="Crop Care" value="cropcare">
                    Crop Care
                  </option>
                  <option name="Post Harvesting" value="harvesting">
                    Harvesting
                  </option>
                  <option name="Marketing" value="marketing">
                    Marketing
                  </option>
                  <option name="General" value="general">
                    General
                  </option>
                  <option name="Storage" value="storage">
                    Storage
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="excerpt">Excerpt</label>
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="excerpt"
                  name="excerpt"
                  value={this.state.excerpt}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="content">Content</label>
              </div>
              <div>
                <CKEditor
                  data={this.state.data}
                  onChange={this.onEditorChange}
                />
              </div>

              <div>
                <input
                  className="mt-2"
                  type="file"
                  id="cropImage"
                  name="cropImage"
                  onChange={this.handleFileChange}
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
    addArticles: (title, crop, farmer, stage, excerpt, content, cropimage) =>
      dispatch(
        addArticles(title, crop, farmer, stage, excerpt, content, cropimage)
      ),
    loadArticles: (stage) => dispatch(loadArticles(stage)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);
