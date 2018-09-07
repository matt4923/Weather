import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    console.log('action received', action);
    
    switch (action.type) {
        case FETCH_WEATHER: //want to append city data to existing city array
            //NEVER DO THIS... MANIPULATING EXISTING STATE ARRAY. SHOULD RETURN NEW OBJECT INSTEAD
            //state.push(action.payload.data) 
            //return state.concat([action.payload.data]); SAME AS vvv
            //append to existing weather array
            //console.log('case: ', [action.payload.data, ...state]) 
            return [action.payload.data, ...state]; // [ city, city, city ] NOT [city, [city, city]]
        default:
            return state;
    }
}
