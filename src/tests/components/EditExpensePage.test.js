import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense,removeExpense,history,wrapper;

beforeEach(()=>{
    editExpense = jest.fn();//creat a new spy and store him in inSubmitSpy
    removeExpense = jest.fn();
    history = {push: jest.fn()};//hitory is an object that have a function'push'
    wrapper = shallow(<EditExpensePage
         editExpense = {editExpense}
         removeExpense = {removeExpense}
         history={history}
         expense = {expenses[2]} 
         />); 
});

test('should render EditExpensePage correctly',()=>{   
    expect(wrapper).toMatchSnapshot();//render the addExpense component correctly
});

test('should handle editExpense correctly',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/'); 
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]); 
}); 

test('should handle removeExpense correctly',()=>{
    wrapper.find('button').prop('onClick')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/'); 
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[2].id }); 
}); 