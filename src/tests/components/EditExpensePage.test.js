import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense,startRemoveExpense,history,wrapper;

beforeEach(()=>{
    editExpense = jest.fn();//creat a new spy and store him in inSubmitSpy
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};//hitory is an object that have a function'push'
    wrapper = shallow(<EditExpensePage
         editExpense = {editExpense}
         startRemoveExpense = {startRemoveExpense}
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

test('should handle startRemoveExpense correctly',()=>{
    wrapper.find('button').prop('onClick')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/'); 
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[2].id }); 
}); 