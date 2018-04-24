import React from 'react';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectorExpense from '../selectors/expenses';
import numeral from 'numeral';


export const ExpensesSummary = ({expensesCount,expensesTotal})=>{
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    return(
    <div>
           <h1>Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div> 
    );  
};

const mapStateToProps = (state)=>{
    const visibleExpenses = selectorExpense(state.expenses,state.filters);
    return {
        expensesCount :  visibleExpenses.length,
        expensesTotal :  selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
