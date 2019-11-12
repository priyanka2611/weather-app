import React, { Component } from 'react';


class Pastsearch extends Component {

    render() {
        if (this.props.myArray === '') return;
        const pStyle = {
            border: '1px solid black'

        };
        if(this.props.myArray){
        const pastHistory= this.props.myArray.map((listVa)=>{
            return(
                <li>
                    {listVa.cityVal}
                    {listVa.tempVal}
            </li>
            );
        })}
        else
        return;
        return (
            <div>
                <br></br>
                <p>PAST SEARCH</p>
if(this.props.myArray)
               {this.props.myArray.length >0 && pastHistory}
               else 
               return
                {/* <table style={pStyle}>

                    <tr style={pStyle}>
                        <th style={pStyle}>{this.props.myArray[0].cityVal} {this.props.myArray[0].tempVal}</th>
                        <th style={pStyle}>Lastname</th>
                        <th style={pStyle}>Age</th>
                    </tr>

                </table> */}
            </div>
        );
    }
}

export default Pastsearch;