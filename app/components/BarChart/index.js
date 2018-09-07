/**
 *
 * BarChart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
const CanvasJSReact = require('./canvasjs.react');
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class BarChart extends React.PureComponent {
    state = {
        chart: null,
        data: this.props.list,
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.list });
    }

    render() {
        const options= {
            height: 200,
            animationEnabled: true,
            theme: "light1", // "light1", "dark1", "dark2"
            title: {
                // text: "Worpress Featured Plugins",
            },
            axisX:{
                labelFontSize: 25,
                reversed: true,
            },
            data: [{
                type: "bar", // change type to bar, line, area, pie, etc
                // indexLabel: "{y}", //Shows y value on all Data Points
                indexLabel: "{y}",
                indexLabelFontColor: "black",
                indexLabelFontSize: 30,
                dataPoints: this.state.data,
                // dataPoints: this.props.list,
            }],
        }
        return (
            <div style={{ position: 'relative' }}>
                <CanvasJSChart
                    options = {options}
                    // options = {this.state.options}
                    onRef={(ref) => {
                        this.state.chart = ref;
                    }}
                />
                {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
                <div className="ads-cover" style={{ position: 'absolute', backgroundColor: 'white', height: 10, width: '100%', bottom: 0 }}></div>
            </div>
        );
    }
}

BarChart.propTypes = {
    list: PropTypes.array.isRequired,
};

export default BarChart;
