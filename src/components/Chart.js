import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor() {
        super(props)
        this.state = {
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge',
                    'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={data}
                    options={{
                        maintainAspectRatio: false
                    }} />
            </div>
        )
    }
}

export default Chart;