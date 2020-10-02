import React, { Component } from "react";
import fertilizer from "../../assets/fertilizer1.jpg";
import landPrep from "../../assets/oxen.png";
import cropSelect from "../../assets/seeds.jpg";
import marketing from "../../assets/marigiti.jpg";

export class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="">
          <h1 className="text-center mt-4 mb-2">
            Welcome To Smartfarm, The Farmer's Guide
          </h1>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h3 className="mt-5">What we do:</h3>
              <p>
                We support the farmers throughout the whole farming life cycle
                which is crop selection, land preparation, seed selection , seed
                sowing, irrigation, crop growth, fertilizing and harvesting. The
                system will enable farmers to access information on crops to
                grow in their location based on the surrounding environmental
                factors, how to grow the crops and provide a platform for the
                farmers to connect with buyers for their produce.
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3 mt-5">
              <div className="card #1b5e20 green darken-4">
                <div className="card-header">Land Prep</div>
                <div className="card-body">
                  <img src={landPrep} alt="crop image" className="img-responsive imgMore" />
                </div>
                <div className="card-footer">
                  <button>View articles on Land Prep</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="card #1b5e20 green darken-4">
                <div className="card-header">Crop Selection</div>
                <div className="card-body">
                  <img src={cropSelect} alt="crop image" className="img-responsive imgMore" />
                </div>
                <div className="card-footer">
                  {" "}
                  <button>View articles on crop selection</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="card #1b5e20 green darken-4">
                <div className="card-header">Crop Care</div>
                <div className="card-body">
                  <img src={fertilizer} alt="crop image" className="img-responsive imgMore" />
                </div>
                <div className="card-footer">
                  {" "}
                  <button>View articles on crop care</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="card #1b5e20 green darken-4">
                <div className="card-header">Post harvesting</div>
                <div className="card-body">
                  <img src={marketing} alt="crop image" className="img-responsive imgMore" />
                </div>
                <div className="card-footer">
                  {" "}
                  <button>View articles on post harvesting</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
