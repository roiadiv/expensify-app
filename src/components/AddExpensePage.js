import React from 'react';//using jsx
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component{    
    onSubmit = (expense)=>{
        this.props.addExpense(expense);
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
    addExpense:(expense)=> dispatch(addExpense(expense))   
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);