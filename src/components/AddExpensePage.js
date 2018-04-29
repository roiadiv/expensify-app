import React from 'react';//using jsx
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component{    
    onSubmit = (expense)=>{
        this.props.startAddExpense(expense);
        this.props.history.push('/');//redirect by using browser ruoting
    }
    render(){
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
             onSubmit = {this.onSubmit}
            />
        </div>   
        );
    }
}

// const AddExpensePage = (props)=>(
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm 
//         onSubmit = {(expense)=>{
//             props.onSubmit(expense);
//             props.history.push('/');//redirect by using browser ruoting
//         }}
//         />
//     </div>   
// ); 

//as a same we have map for state, we have one for dispatch
const mapDispatchToProps = (dispatch)=>({
    startAddExpense:(expense)=> dispatch(startAddExpense(expense))   
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);