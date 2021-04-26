import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import styles from "../styles/DisplayPanelsStyles";

class DisplayPanels extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, number, dataChange, classes } = this.props;
    return (
      <div className={classes.panel}>
        <div className={classes.heading}><b>{title}</b></div>
        <hr/>
        <div className={classes.number}>{number}</div>
        <div className={classes.dataChange}>
          {dataChange > 0 ? "+" : ""}
          {dataChange}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DisplayPanels);
