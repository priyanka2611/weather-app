import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
         <div>

              
                <select onChange={this.props.valuesSet}>
                    <option value="">Select the filter</option>
                    <option value="name">Name</option>
                    {/* <option value="latitude">Latitude</option> */}
                    <option value="Zipcode">Zipcode</option>
                </select>
                <input type="text" name="city" placeholder="Enter Value" onChange={this.props.getWeather} />
           </div>
        );
    }
}

export default Form;