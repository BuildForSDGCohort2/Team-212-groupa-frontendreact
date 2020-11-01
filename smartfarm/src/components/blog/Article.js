import React, { Component } from "react";
import { connect } from "react-redux";
import { loadArticle } from "../../actions/articles";
import axios from "axios";
import { ARTICLE_LOADED, GET_ERRORS } from "../../types/types";

export class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: [],
    };
  }

  componentDidMount = () => {
    const slug = this.props.match.params.slug;
    const getArticle = async (dispatch) => {
      try {
        const response = await axios.get(
          `https://smartfarmendpoints.herokuapp.com/api/blog/article/detail/${slug}`
        );

        this.setState({
          blog: response.data,
        });
        dispatch({
          type: ARTICLE_LOADED,
          payload: response.data,
        });
      } catch (err) {
        const errors = {
          msg: err.response.data,
          status: err.response.status,
        };
        dispatch({
          type: GET_ERRORS,
          payload: errors,
        });
      }
    };

    getArticle();
  };

  createContent = () => {
    return { __html: this.state.blog.content };
  };

  render() {
    return (
      <div className="container-fluid articlesCont ">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 lowOp">
            <h1 className="text-center">{this.state.blog.title}</h1>
            <h3>Crop: {this.state.blog.crop}</h3>
            <h3>Stage: {this.state.blog.stage}</h3>
            <div className="" dangerouslySetInnerHTML={this.createContent()} />
            <p className="text-right">
              <em>
                Article posted by {this.state.blog.farmer} on{" "}
                {this.state.blog.created_at}
              </em>
            </p>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    article: state.articles.article,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadArticle: (stage) => dispatch(loadArticle(stage)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Article);
