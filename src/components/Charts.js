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
    state = {
        filter: null,
        hovered: null,
        highlighting: false,
     }
   


    render() {
        const { classes } = this.props
        const {filter, hovered, highlighting} = this.state;
        
        const highlightPoint = d => {
            if (!filter) {
              return false;
            }
            const leftRight = d.x <= filter.right && d.x >= filter.left;
            const upDown = d.y <= filter.top && d.y >= filter.bottom;
            return leftRight && upDown;
        };

        return (
            <div>
                {this.props.submit ? <><div className="root">
                <Card className={classes.block}>
                <XYPlot width={600} height={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <Highlight
                        drag
                        onBrushStart={() => this.setState({highlighting: true})}
                        onBrush={area => this.setState({filter: area})}
                        onBrushEnd={area =>
                        this.setState({highlighting: false, filter: area})
                        }
                        onDragStart={area => this.setState({highlighting: true})}
                        onDrag={area => this.setState({filter: area})}
                        onDragEnd={area =>
                        this.setState({highlighting: false, filter: area})
                        }
                    />
                    <MarkSeries
                        className="mark-series-example"
                        strokeWidth={2}
                        opacity="0.8"
                        sizeRange={[5, 15]}
                        style={{pointerEvents: highlighting ? 'none' : ''}}
                        colorType="literal"
                        getColor={d => (highlightPoint(d) ? '#EF5D28' : '#12939A')}
                        onValueMouseOver={d => this.setState({hovered: d})}
                        onValueMouseOut={d => this.setState({hovered: false})}
                        data={this.props.data_outliers}
                        size={2}
                    />
                    {hovered && <Hint value={hovered} />}
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
                        style={{pointerEvents: highlighting ? 'none' : ''}}
                        colorType="literal"
                        getColor={d => (highlightPoint(d) ? '#EF5D28' : '#12939A')}
                        onValueMouseOver={d => this.setState({hovered: d})}
                        onValueMouseOut={d => this.setState({hovered: false})}
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
                        style={{pointerEvents: highlighting ? 'none' : ''}}
                        colorType="literal"
                        getColor={d => (highlightPoint(d) ? '#EF5D28' : '#12939A')}
                        onValueMouseOver={d => this.setState({hovered: d})}
                        onValueMouseOut={d => this.setState({hovered: false})}
                    />
                </XYPlot>
                </Card>
            </div></> : null}
            </div>
        )
    }
}

Charts.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(Charts);
