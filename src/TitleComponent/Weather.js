import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country && <p>
                    weather info :
    {this.props.temperature}°C  ( {this.props.description})
    </p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>


        );
    }
}



export default Weather;