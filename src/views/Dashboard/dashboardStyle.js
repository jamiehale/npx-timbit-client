import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "../../assets/jss/material-dashboard-react.js";

const dashboardStyle = {
  successText: {
    color: successColor[0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardTitlePieChart: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
    textAlign: 'left',
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  systemHealthPie: {
    "& svg": {
      display: 'block',
      margin: 'auto',
    },
    "& g.ct-series-a > path": {
      fill: '#70ad47',
      stroke: 'rgba(0,0,0,0.5)'
    },
    "& g.ct-series-b > path": {
      fill: '#ffffff',
      stroke: 'rgba(0,0,0,0.5)'
    },
    "& g.ct-series-c > path": {
      fill: '#ffc000',
      stroke: 'rgba(0,0,0,0.5)'
    },
    "& g.ct-series-d > path": {
      fill: '#e74c3c',
      stroke: 'rgba(0,0,0,0.5)'
    },
    "& g:nth-child(5) > text": {
      fill: 'white',
      fontWeight: '400',
    },
    "& g:nth-child(5) > text:nth-child(2)": {
      fill: 'black',
    }
  },
  systemHealthLine: {
    "& g.ct-series-a > .ct-point": {
      stroke: '#ef5350'
    },
    "& g.ct-series-a > .ct-line": {
      stroke: '#ef5350'
    },
    "& g.ct-series-b > .ct-point": {
      stroke: '#26c6da'
    },
    "& g.ct-series-b > .ct-line": {
      stroke: '#26c6da'
    },
  },
};

export default dashboardStyle;
