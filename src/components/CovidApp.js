import React, { Component } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import { withStyles } from '@material-ui/styles';
import MapSection from './MapSection';
import Overview from './Overview';
import stateCodes from '../constants/stateCodes';
import * as animationData from '../assets/loading.json';
import styles from '../styles/CovidAppStyles';
import '../styles/DarkModeButton.css';
import Main from './Main';
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

class CovidApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      todayData: {},
      isLoading: false,
      mapData: [],
      tableData: [],
    };

    this.fetchData = this.fetchData.bind(this);
    this.formatData = this.formatData.bind(this);
    this.findId = this.findId.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
    this.handleNotification = this.handleNotification.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ isLoading: !this.state.isLoading });
    const countryData = axios.get('https://api.covid19india.org/data.json');
    const districtLevel = axios.get(
      'https://api.covid19india.org/v2/state_district_wise.json'
    );
    const stateChanges = axios.get(
      'https://api.covid19india.org/states_daily.json'
    );
    const updates = axios.get(
      'https://api.covid19india.org/updatelog/log.json'
    );

    axios.all([countryData, districtLevel, stateChanges, updates]).then(
      axios.spread((...responses) => {
        const countryData = responses[0].data;
        const districtLevel = responses[1].data;
        const updates = responses[3].data;

        const [todayData] = countryData.statewise.slice(0, 1);
        const casesTimeline = countryData.cases_time_series;

        const data = countryData.statewise.slice(1, -1);

        this.setState(
          {
            data: data,
            todayData: todayData,
            casesTimeline: casesTimeline,
            districtLevel: districtLevel,
            updates: updates,
            expanded: false,
          },
          this.handleFormat
        );
      })
    );
  }

  formatData(data) {
    const formatedData = data.map((state, i) => {
      return {
        id: this.findId(state.state),
        state: state.state.replace(' and ', ' & '),
        value: state.confirmed,
      };
    });
    return formatedData;
  }

  findId(location) {
    for (let [key, value] of Object.entries(stateCodes)) {
      if (location === key) {
        return value;
      }
    }
  }

  handleFormat() {
    const newdata = this.formatData(this.state.data);
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
    this.setState({ mapData: newdata });
  }

  handleNotification() {
    this.setState({ expanded: !this.state.expanded });
  }

  formatDate(timestamp) {
    try {
      const [date, time] = timestamp.split(' ');
      const formattedDate = date.split('/');
      console.log(time);
      return `${formattedDate[0]} ${months[formattedDate[1]]}, ${time.slice(
        0,
        5
      )} IST`;
    } catch (err) {}
  }

  render() {
    const { classes } = this.props;
    const {
      mapData,
      isLoading,
      data,
    } = this.state;

    if (isLoading) {
      return (
        <div className={classes.loadingIcon}>
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      );
    }

    return (
      <>
        <div>
          
        <Main/>
          <Overview
            data={this.state.todayData}
            loadingStatus={this.loadingStatus}
          />
        </div>
        <hr/>
        <div className={classes.content}>
          <div className={classes.contentArea}>
            <div className={classes.mapArea}>
              <MapSection
                data={data}
                mapData={mapData}
              />
            </div>
          </div>
          </div>
        <div>
          
        </div>
          
      </>
    );
  }
}

export default withStyles(styles)(CovidApp);
