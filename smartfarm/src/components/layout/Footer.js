import React, { Component } from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

export class Footer extends Component {
  render() {
    return (
      <MDBFooter className="#1b5e20 green darken-4 font-small pt-4 mt-4 fixed-bottom">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href=""> #Buildforsdgchallenge team-212-group-a </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
