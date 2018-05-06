import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectorExpense from '../selectors/expenses';

//This component dosnt neew any more to worry or storge a state,
//He rerender by using redux store
//all we need to do to is decide how we want to render this compoennet to that screen
export const ExpenseList = (props)=>(
    <div className = "content-container">
        <div className= "list-header">
          <div className = "show-for-mobile">Expenses</div>
          <div className = "show-for-desktop">Expens</div>
          <div className = "show-for-desktop">Amount</div>
        </div>
        <div className = "list-budy">
        {
            props.expenses.length === 0 ? (
                <div class="list-item list-item--massage">
                    <span>No expenses</span>
                </div>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key = {expense.id} {...expense} />
                })
            )
        }
        </div>
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