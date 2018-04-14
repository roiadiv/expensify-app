import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectorExpense from '../selectors/expenses';

//This component dosnt neew any more to worry or storge a state,
//He rerender by using redux store
//all we need to do to is decide how we want to render this compoennet to that screen
const ExpenseList = (props)=>(
    <div>
    <h1>Expense List</h1>
    {
          props.expenses.map((expense) => {
              return <ExpenseListItem key = {expense.id} {...expense} />
          })
    }
    </div>   
);

const mapStateToProps = (state)=>{
    return {
        expenses :  selectorExpense(state.expenses,state.filters)
    };
};

//this is simmler to what we do in hoc.js
//the function connect have a 2 parts:
//1 - the information and the items we accses to this component from the store!
//this part get a function that have the state of the store
//this function return an object = the props we want from the store
//2 - the component itself we want to upgrade and warrep;
export default connect(mapStateToProps)(ExpenseList);
//The ConnectedExpenseList;