import React, { Component } from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeries,
    LineSeries,
    Highlight,
    Hint,
    VerticalBarSeries
  } from 'react-vis';
import '../styles/chart.css'
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const axios = require('axios');

const styles = theme => ({
    block: {
        display: "inline-block",
        zoom: 1,
        padding: "40px",
        margin: "10px",
        boxShadow: "5px 5px 8px #888888",
    } 
});

class Charts extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                {this.props.submit ? 
                    <>
                        <div className="root">
                            <Card className={classes.block}>
                                <XYPlot width={600} height={300}>
                                    <VerticalGridLines color="#808080" />
                                    <HorizontalGridLines />
                                    <XAxis />
                                    <YAxis />
                                    <MarkSeries
                                        className="mark-series-example"
                                        strokeWidth={2}
                                        opacity="0.8"
                                        sizeRange={[5, 15]}
                                        colorType="linear"
                                        data={this.props.data_outliers}
                                        size={2}
                                        color="#FF6347"
                                    />
                                </XYPlot>
                             </Card>
                            <Card className={classes.block}>
                                <XYPlot height={300} width={600}>
                                    <VerticalGridLines />
                                    <HorizontalGridLines />
                                    <XAxis />
                                    <YAxis />
                                    <MarkSeries data={this.props.data_raw} 
                                        className="mark-series-example"
                                        strokeWidth={2}
                                        opacity="0.8"
                                        sizeRange={[5, 15]}
                                        colorType="literal"
                                        size={2}
                                    />
                                </XYPlot>
                            </Card>
                        </div>
                        <div className={classes.root}>
                            <Card className={classes.block}>
                                <XYPlot height={400} width={700} xType="ordinal">
                                    <VerticalGridLines />
                                    <HorizontalGridLines />
                                    <XAxis />
                                    <YAxis />
                                    <VerticalBarSeries data={this.props.data_median} 
                                        className="mark-series-example"
                                        strokeWidth={2}
                                        opacity="0.8"
                                        sizeRange={[5, 20]}
                                        colorType="literal"
                                    />
                                </XYPlot>
                            </Card>
                        </div>
                    </> 
                : null}
            </div>
        )
    }
}

Charts.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(Charts);
