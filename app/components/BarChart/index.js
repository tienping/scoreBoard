/**
 *
 * BarChart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
const Component = React.Component;
const CanvasJSReact = require('./canvasjs.react');
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class BarChart extends React.PureComponent {
    render() {
        const { list } = this.props;

        const options = {
            animationEnabled: true,
            theme: "light1", // "light1", "dark1", "dark2"
            title: {
                // text: "Worpress Featured Plugins",
            },
            axisX:{
                reversed: true,
            },
            data: [{
                type: "bar", // change type to bar, line, area, pie, etc
                // indexLabel: "{y}", //Shows y value on all Data Points
                indexLabel: "{y}",
                indexLabelFontColor: "black",
                indexLabelFontSize: 35,
                dataPoints: list,
                // dataPoints: [
                //     { "label":"Akismet Anti-Spam","y":5000000, color: 'red' },
                //     { "label":"Jetpack","y":4000000},
                //     { "label":"WP Super Cache","y":2000000},
                //     { "label":"bbPress","y":300000},
                // ],
            }],
        }

        return (
            <div style={{ position: 'relative' }}>
                <CanvasJSChart
                    options = {options}
                    /* onRef={ref => this.chart = ref} */
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
