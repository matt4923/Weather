import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
        /*weird stuff-- binding to itself and replace... research "this" in JavaScript */
        /*Callbacks referencing 'this' may need to be bound like so */
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        // console.log(e.target.value);
        this.setState({ term: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault(); //Don't submit form
        //fetch weather data -- https://openweathermap.org/forecast5 appid = '86984ebc3fbf9016543462edf0617731'
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group"> {/*  boostrap styles */}
                <input 
                    placeholder="Get a 5-day forecast in your favorite cities" 
                    className="form-control" 
                    value={this.state.term} 
                    onChange={this.onInputChange} 
                />
                <span className="input-group-btn"> 
                    <button type="submit" className="btn btn-secondary">Submit</button> 
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
