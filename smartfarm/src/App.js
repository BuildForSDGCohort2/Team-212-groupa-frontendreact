import React, {Component} from "react";
import "./App.css";
import Mynavbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import {Provider as AlertProvider} from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import Alerts from "./components/layout/Alerts"

// Alert options
const alertOptions = {
  timeout:3000,
  position:"top center"
}

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  componentDidMount(){
    store.dispatch(loadUser())
  }
  
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div className="container-fluid text-center overlay App">
          <Router>
            <Mynavbar />
            <Alerts />
            <Footer />
          </Router>
        </div>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
