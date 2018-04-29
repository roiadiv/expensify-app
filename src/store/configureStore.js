import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expenseReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk';
//applyMiddleware - let us to add Middleware to our store 
//thunk - a Middleware that provide us use
//Store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(
        combineReducers(
            {
                expenses: expenseReducer,
                filters: filtersReducer
            },
        ),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};


 