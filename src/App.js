import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./TitleComponent/Titles";
import Form from "./TitleComponent/Form"
import Weather from './TitleComponent/Weather';

const API_KEY ="9635f9094f52721c3f59268cd6eb584c"
 class App extends Component {
   getWeather = async(e)=>{
     e.preventDefault();
     const city = e.target.elements.city.value;
     const country = e.target.elements.country.value;
    const api_call = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=9635f9094f52721c3f59268cd6eb584c');
    const data = await api_call.json(); 
    console.log(data);
  }
  
  render()
  {
    return (
    <div className="App">
      <p>hello</p>
   <Titles/>
  <Form getWeather={this.getWeather}/>
  <Weather/>
    </div>
    );
  }
}

export default App;
