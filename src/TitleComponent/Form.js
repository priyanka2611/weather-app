import React, { Component } from 'react';
 
class Form extends Component {
    render() {
        return (
         <div>
                <select onChange={this.props.valuesSet}>
                    <option value="">Select the filter</option>
                    <option value="name">Name</option>
                    <option value="lat">Latitude</option> 
                    <option value="Zipcode">Zipcode</option>
                </select>
                {
                    this.props.dropSelect === 'lat' 
                    ?
                    <>
                    <input type="text" name="lat" placeholder="Enter Value Lat" onChange={this.props.getWeather} />
                    <input type="text" name="longitude" placeholder="Enter Long" onChange= {this.props.getWeather} />
                    </>
                    :
                <input type="text" name="city" placeholder="Enter Value" onChange={this.props.getWeather} />
                }
           </div>
        );
    }
}

export default Form