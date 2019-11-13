import React, { Component } from 'react';
import './MixStyle.css';
class Pastsearch extends Component {

    render() {
       return(<div>
        <h3 className ="h3">PAST SEARCHES</h3>
           <>
           {
               this.props.history.length <1?
               <h2 className ="h3">No history found !</h2> :
               <ul className = "Box">

               {this.props.history.map(item =>
               {
                   return (
                   <li className = "Box">{item.city || "no city name"} : temp : {item.temp}</li>
                   )
               })
               }</ul>
           }
           </>
           </div>
       );
    }
}

export default Pastsearch;