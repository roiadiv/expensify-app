import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import  ExpenseForm  from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

//At the first timewe save this test he pass,
//At the secode, he did not, becouse the date is change by using moment() - the point time change
//we use mock file for this - for the moment function
test('should render ExpenseForm correctly',()=>{
    const wrapper = shallow(<ExpenseForm />);  
   expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]} />);  
   expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm />);  
    expect(wrapper).toMatchSnapshot();//for the state without the error massge
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();//when we run the submit function and we dont have an amount or description - make a error massge
});


test('should set description on input change',()=>{
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);  
    expect(wrapper).toMatchSnapshot();//for the state without the error massge
    wrapper.find('input').at(0).simulate('change',{
        target : {value}
    });

    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();//when we run the submit function and we dont have an amount or description - make a error massge
});

test('should set note on textarea change',()=>{
    const value = 'new note';
    const wrapper = shallow(<ExpenseForm />);  
    expect(wrapper).toMatchSnapshot();//for the state without the error massge
    wrapper.find('textarea').simulate('change',{
        target : {value}
    });

    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();//when we run the submit function and we dont have an amount or description - make a error massge
});

//
test('should set amount if valid input',()=>{
    const value = '23.5';
    const wrapper = shallow(<ExpenseForm />);  
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change',{
        target : {value}
    });

    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();//when we run the submit function and we dont have an amount or description - make a error massge
}); 

test('should not set amount if invalid input',()=>{
    const value = '23.563';
    const wrapper = shallow(<ExpenseForm />);  
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change',{
        target : {value}
    });

    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();//when we run the submit function and we dont have an amount or description - make a error massge
});

test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn();//creat a new spy and store him in inSubmitSpy
    const wrapper = shallow(<ExpenseForm expense= {expenses[1]} onSubmit = {onSubmitSpy} />);  
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });

    expect(wrapper.state('error')).toBe('');//the test pass if the onSubmitSpy call if not, the test fail 
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        amount: expenses[1].amount,
        note: expenses[1].note,
        createdAt: expenses[1].createdAt,
    })
    expect(wrapper).toMatchSnapshot();
});

test('sholud set new date onDateChange',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now); 
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('sholud set calendarFocused onDateChange',()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused}); 
    expect(wrapper.state('calendarFocused')).toEqual(focused)
})