import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

//To avoid dup code we gonna use jest lifecycle methode that called 'beforeEach':
let addExpense,history,wrapper;

beforeEach(()=>{
    addExpense = jest.fn();//creat a new spy and store him in inSubmitSpy
     history = {push: jest.fn()};//hitory is an object that have a function'push'
     wrapper = shallow(<AddExpensePage addExpense = {addExpense} history={history} />); 
});


test('should render AddExpensePage correctly',()=>{
     // const onSubmitSpy = jest.fn();//creat a new spy and store him in inSubmitSpy
    // const history = {push: jest.fn()};//hitory is an object that have a function'push'
    // const wrapper = shallow(<AddExpensePage onSubmit = {onSubmitSpy} history={history} />);   
    expect(wrapper).toMatchSnapshot();//render the addExpense component correctly
});

test('should handle onSubmit correctly',()=>{
    // const onSubmitSpy = jest.fn();//creat a new spy and store him in inSubmitSpy
    // const history = {push: jest.fn()};//hitory is an object that have a function'push'
    // const wrapper = shallow(<AddExpensePage onSubmit = {onSubmitSpy} history={history} />);   
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/'); 
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]); 

}); 