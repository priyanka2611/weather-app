import React, { Component } from 'react';
import Titles from "./TitleComponent/Titles";
import Form from "./TitleComponent/Form"
import './App.css';
import Weather from './TitleComponent/Weather';
import Pastsearch from './TitleComponent/Pastsearch';
const API_KEY = "9635f9094f52721c3f59268cd6eb584c";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    country: undefined,
    error: undefined,
    description: undefined,
    inputVal: null,
    dropSelect: null,
    myArray:  [{ cityVal:null, tempVal: null }]
  }
  SetValues = (e) => {
    this.setState({
      dropSelect: e.target.value
    })
  }

  getWeather = async (e) => {
    let api_call = undefined;
    e.preventDefault();
    const inputVal = e.target.value.trim();
    if (inputVal === '') return;
    //  const longitude = e.target.elements.longitude.value;
    //  const latitude = e.target.elements.latitude.value;
    if (this.state.dropSelect === 'name') {
      api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${API_KEY}`);
    }
    else if (this.state.dropSelect === 'Zipcode') {
      api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${inputVal}&appid=${API_KEY}`);
    }
    //  else if(longitude && latitude){
    //    api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    //  }

    const data = await api_call.json();
    if (api_call.ok) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
        myArray: [{cityVal: data.sys.country},{tempVal: data.main.temp} ]

      })
      console.log(data);
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Check your values !!"
      })

    }

  }

  render() {
    return (
      <div className="App">

        <Titles />
        <Form getWeather={this.getWeather} valuesSet={this.SetValues} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        <Pastsearch getPastValue ={this.getWeather}/>
      </div>
    );
  }
}

export default App;
