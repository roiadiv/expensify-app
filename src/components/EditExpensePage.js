import React from 'react';//using jsx
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense,startRemoveExpense} from '../actions/expenses';


export class EditExpensePage extends React.Component{
    //edit
    onSubmit = (expense)=>{
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    //remove
    onRemove = ()=>{
        this.props.startRemoveExpense({id : this.props.expense.id});
        this.props.history.push('/');
    }
    render(){
    return(
    <div>
        <ExpenseForm 
            expense = {this.props.expense}
            onSubmit = {this.onSubmit}
        />
        <button onClick = {this.onRemove}
        >Remove
        </button>
    </div>        
    )}

}

// const EditExpensePage = (props)=>(
//     <div>
//         <ExpenseForm 
//             expense = {props.expense}
//             onSubmit = {(expense)=>{
//                 props.dispatch(editExpense(props.expense.id, expense));
//                 props.history.push('/');
//             }}
//         />
//         <button onClick = {()=>{
//              props.dispatch(removeExpense({id : props.expense.id}));
//              props.history.push('/');
//             }}
//         >Remove
//     </button>
//     </div>
// );

const mapStateToProps = (state, props)=>{
    return {
        expense :  state.expenses.find((expense)=> expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch,props)=>({
    editExpense:(id,expense)=> dispatch(editExpense(id,expense)),
    startRemoveExpense:(data)=> dispatch(startRemoveExpense(data))      
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);