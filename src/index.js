import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom';
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);
