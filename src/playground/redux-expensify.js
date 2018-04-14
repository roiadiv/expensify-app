import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
////The Action we gonna use is:
//ADD_EXPENSE
const addExpense  = (
    {
        description = '',
        note = '',
        amount= 0,
        createdAt = 0 
    }={}
)=>({
    type: 'ADD_EXPENSE',
    expense:{
    id: uuid(),
    description,
    note,
    amount,
    createdAt
    }
})

//REMOVE_EXPENSE
const removeExpense  = ({id}={})=>({type: 'REMOVE_EXPENSE',id});
//EDIT_EXPENSE
const editExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
})
//SET_TEXT_FILTER
const setTextFilter = (text = '' )=>({
    type:'SET_TEXT_FILTER',
    text
})

//SORT_BY_DATE
const sortByDate = ()=>({
    type:'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount = ()=>({
    type:'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate)=>({
    type:'SET_START_DATE',
    startDate
})
//SET_END_DATE
const setEndDate = (endDate)=>({
    type:'SET_END_DATE',
    endDate
})

//The Expense Reducer
//concat return new array
//push return the lenth of the new array
const expenseReducerDefultState = [];
const expenseReducer = (state = expenseReducerDefultState , action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
        return state.concat(action.expense)//we use conact becouse push change the orignal array, and concat combine the new item in the array
        //we can use  [...state,action.expense] as a same thing -Spreading array operator 
        case 'REMOVE_EXPENSE':
        return state.filter(({id})=> id !== action.id);
        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id === action.id){
                return{
                    ...expense,
                    ...action.updates
                };
            }else{
                return expense
            }
        }) 
        default:
        return state;
    }
}

//The filter Reducer
const filtersReducerDefultState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};
const filtersReducer = (state = filtersReducerDefultState , action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        }

        case 'SORT_BY_DATE':
        return{
            ...state,
            sortBy: 'date'
        }

        case 'SORT_BY_AMOUNT':
        return{
            ...state,
            sortBy: 'amount'
        }

        case 'SET_START_DATE':
        return{
            ...state,
            startDate: action.startDate
        }

        case 'SET_END_DATE':
        return{
            ...state,
            endDate: action.endDate
        }

        default:
        return state;
    }
}

//timestemp (miliseconds) // for the startDate and endDate 
// start from th spot of the date : Juanery 1st 1970 (unix epoch)
//1000 = 1 seconde after Juanery 1st 1970

//get visble expenses
const getVisibleExpenses = (expenses, {text , sortBy , startDate , endDate })=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' ||  expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' ||  expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1:-1;
        }else if(sortBy ==='amount'){
            return a.amount < b.amount? 1:-1;
        }
    });
};

//Store creation
const store = createStore(
    combineReducers(
        {
            expenses: expenseReducer,
            filters: filtersReducer
        }
    )
);
 
store.subscribe(()=>{
    const state = store.getState();
    const  visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

//the dispatch run the two reducers we make!
const itemOne = store.dispatch(addExpense({description: 'Rent', amount: 100 , createdAt: -21000}));
const itemTwo = store.dispatch(addExpense({description: 'Coffe', amount: 300, createdAt: -1000}));

//console.log(itemOne.expense.id);

// //remove expense
// store.dispatch(removeExpense({id: itemOne.expense.id}));    

// //edit expense
// store.dispatch(editExpense(itemTwo.expense.id,{amount:500}));

// //set filter text
//store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

// //switch from date to amount
store.dispatch(sortByAmount());

// //switch from amount to date
// store.dispatch(sortByDate());

// //set startDate
//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

// //set endDate
//store.dispatch(setEndDate(999));

const demoState = {
        expenses : [{
            id:'sadasdsadas',
            description: 'Janury rent',
            note: 'This was the last payment for that address',
            amount: 3242,
            createdAt:0
        }],
        filters:{
            text: 'rent',
            sortBy: 'amount',//amount or date
            startDate: undefined,
            endDate: undefined
        }
}


// const user = {
//     name:'dsa',
//     age:3
// }

//use the spreading operator on object - we have to install a plugin for that!
// const  newOne = {...user, bob:"adsda"};
// console.log(newOne);