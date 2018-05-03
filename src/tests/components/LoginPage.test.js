import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test('should render Header correct',()=>{
    const wrapper = shallow(<LoginPage startLogin = {()=>{}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click',()=>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin = {startLogin} />);  
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled(); 
});
