import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; we use enzyme

//We have to way to test our components
//1. shllow rendering - what gonna rendering
//2. full dom rendering - life cycle events and user actions

//For the header components we gonna use shallow rendering 

//we use Snapshot
//at the first time we run this code, Snapshot file will created
//the file have the data about the component

//at the aother time we run this code, the test will match the data inside the Snapshot file,
//and compre the changes inside the component file

//if thier is a changes the test warring us about us and ask if we want to update the changes,
//we make in the compenent file.
//for save - press 'u'
// after that the Snapshot file update

test('should render Header correct',()=>{
    //From using react-test-renderer
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    //To enzyme
    const wrapper = shallow(<Header  startLogout={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click',()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout = {startLogout} />);  
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled(); 
});