import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAllArticles, loadArticles } from "../../actions/articles";

export class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStage: "",
      value: "Crop Selection",
    };
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loadArticles(this.state.value);
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor="category" className="mt-2">
            {" "}
            Filter Articles By Stage:
          </label>
        </div>
        <select
          value={this.state.value}
          onChange={this.handleChange}
          id="category"
          className="mb-3"
        >
          <option name="Crop Selection" value="Crop Selection">
            Crop Selection
          </option>
          <option name="Land Preparation" value="Land Preparation">
            Land Preparation
          </option>
          <option name="Crop Care" value="Crop Care">
            Crop Care
          </option>
          <option name="Post Harvesting" value="Post Harvesting">
            Post Harvesting
          </option>
        </select>
        <button className="mx-2" onClick={this.handleSubmit}>
          click to load articles about {this.state.value}?
        </button>
        <div className="container-fluid articlesCont">
          <div className="row">
            {this.props.articlesLoaded ? (
              this.props.articles.map((article) => (
                <div key={article.id} className="col-md-6">
                  <div className="card card-article mt-2 #1b5e20 green darken-4">
                    <div className="card-header">{article.title}</div>
                    <div className="card-body">
                      {" "}
                      <img
                        src={article.cropimage}
                        alt="cropImage"
                        className="img-responsive cropImage"
                        ALIGN="right"
                      />
                      <p>{article.content}</p>
                    </div>
                    <div className="card-footer text-left"></div>
                  </div>
                </div>
              ))
            ) : (
              <span className="text-success">Loading data...</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    articles: state.articles.articles,
    articlesLoaded: state.articles.articlesLoaded,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadAllArticles: () => dispatch(loadAllArticles()),
    loadArticles: (stage) => dispatch(loadArticles(stage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
