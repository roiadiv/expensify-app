
import {createStore} from 'redux';


//action generetors
const incrementCount = ({incrementBy = 1} = {})=> ({
    type: 'INCREMENT',
    incrementBy

})

const decrementCount = ({decrementBy = 1}={})=>({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({setValue})=>({
    type:'SET',
    setValue
})

const resetCount = ()=>({
    type:'RESET'
})

//Reducers
//1 - Redeucer are pure function, a pure function is one that depends on the prams we send
//exemple for none pure function:
//let a =5;
//const add = (b)=>{return a+b};
// we change/use value that came from out the function!
//the pure function i  our case, need to consider by the state and the action we fire

//2 - Reduser Never change the state or the action, we return a new object that !!!!represent the new state!!!!!
const countReducer =  (state = {count:0} ,action)=>{

    switch(action.type){
        case 'INCREMENT':
   //     const incrementBy = typeof action.incrementBy === 'number'?action.incrementBy:1; 
        //console.log(action.incrementBy);
        return {  count : state.count+action.incrementBy};

        case 'DECREMENT':
       // const decrementBy = typeof action.decrementBy === 'number'?action.decrementBy:1; 
        return {  count : state.count-action.decrementBy};

        case 'SET':
        return {count : action.setValue}

        case 'RESET':
        return{ count : 0}

        default:
        return state;
    }
};


//inntialize the defulte state - like the constarctor  
const store = createStore(countReducer());
//vert simmler to the this.setState that we use, get the prevState and return the new one

//The functions inside the store
//1 - getState - get the data
console.log(store.getState());


//3 - subscribe - get a function and call her every time the store change
//we can use unsubscribe to stop calling to the method every single time
//sunscribe return the unsubsribe function
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

//2 - Action - set the data - by use dispatch
//Action is and object that sent to the store! 
//The action we gonna make is: inccrement, decremnt and reset
//!!!!we must to provide a type for action!!!!

//increment action
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 115}));


store.dispatch(setCount({setValue:1000000000}));
//decrement action
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });
// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch(decrementCount());

store.dispatch(resetCount());

unsubscribe();

//reset action
store.dispatch({
    type: 'RESET'
});

