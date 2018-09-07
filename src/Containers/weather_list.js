import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
// import GoogleMap from '../components/google_map';

class WeatherList extends Component {
   renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        // console.log('temps: ', temps);
        // console.log('press: ', pressures);
        // console.log('humidities: ', humidities);
        
        // const { lon, lat } = cityData.city.coord;
        
        return (
            
            <tr key={name}>
                {/* Can't get this damn google maps to work! */}
                {/* <td><GoogleMap lon={lon} lat={lat} /></td> */}
                <td>{cityData.city.name}</td>
                {/* <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color = "red" />
                    </Sparklines>    
                </td>
                <td>
                    <Sparklines height={120} width={180} data={pressures}>
                        <SparklinesLine color = "green" />
                    </Sparklines>    
                </td>
                <td>
                    <Sparklines height={120} width={180} data={humidities}>
                        <SparklinesLine color = "blue" />
                    </Sparklines>    
                </td> */}
                <td>
                    <Chart data={temps} color="orange" units="K" />
                </td>
                
                <td>
                    <Chart data={pressures} color="blue" units="hPa" />
                </td>
                
                <td>
                    <Chart data={humidities} color="green" units="%" />
                </td>
                

            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Tempurature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weatherProp.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weatherProp: weather }; //== {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);
