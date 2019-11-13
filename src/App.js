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
    history:  []

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
      const historyObj = {
        city : data.sys.country,
        temp: data.main.temp
      }
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      })
      this.setState(prevState =>{
        return {
          history : [...prevState.history,historyObj]
        }
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
    const {temperature,city,country,humidity,description,error,history,dropSelect} = this.state;
    return (
      <div className="App">

        <Titles />
        <Form getWeather={this.getWeather} valuesSet={this.SetValues} dropSelect ={dropSelect} />
        <Weather
          temperature={temperature}
          city={city}
          country={country}
          humidity={humidity}
          description={description}
          error={error}
        />
        <Pastsearch history={history}/>
      </div>
    );
  }
}

export default App;
