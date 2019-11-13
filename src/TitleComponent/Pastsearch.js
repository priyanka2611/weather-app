import React, { Component } from 'react';


class Pastsearch extends Component {

    render() {
       return(
           <>
           {
               this.props.history.length <1?
               <h2>No history found</h2> :
               <ul>

               {this.props.history.map(item =>
               {
                   return (
                   <li>{item.city} : temp : {item.temp}</li>
                   )
               })
               }</ul>
           }
           </>
       );
    }
}

export default Pastsearch;