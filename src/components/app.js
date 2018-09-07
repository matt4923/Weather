import React, { Component } from 'react';
import SearchBar from '../Containers/search_bar';
import WeatherList from '../Containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
