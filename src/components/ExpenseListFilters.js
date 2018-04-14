import React from 'react';
import filters from '../reducers/filters';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters';

const ExpenseListFilters = (props)=>(
    <div>
        <input type = "text"  value ={props.filters.text} onChange = {(e)=>{
            props.dispatch(setTextFilter(e.target.value));
        }} />

        <select value = {props.filters.sortBy} onChange = {(e)=>{
            if(e.target.value === 'date'){
                props.dispatch(sortByDate())
            }else if(e.target.value === 'amount'){
                props.dispatch(sortByAmount())
            }
        }}>
            <option value = "date">Date</option>
            <option value = "amount">Amount</option>
        </select>
    </div>

);

const mapSateToProps = (state)=>{
    return {
        filters : state.filters
    }
};

//we give mapSateToProps to use the function dispatch!!!
export default connect(mapSateToProps)(ExpenseListFilters);