import validator from 'validator';//make us to ansure the email adress
import React from 'react';//using jsx
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';//reset all the css of any kind of browser
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';


const store = configureStore();

const jsx = (
    <div>
        <Provider store = {store}>
            <AppRouter />
        </Provider>
    </div>
)

ReactDOM.render(<p>Loading</p>,document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx,document.getElementById('app'));
});


