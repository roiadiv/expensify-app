import React from 'react';//using jsx
import {BrowserRouter, Route , Switch,Link, NavLink} from 'react-router-dom';//components that help us to routing our app
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = ()=>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch> 
        <Route path = '/' component = {ExpenseDashboardPage} exact ={true}/>  
        <Route path = '/create' component = {AddExpensePage} />
        <Route path = '/edit/:id' component = {EditExpensePage} />
        <Route path = '/help' component = {HelpPage} />
        <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);
export default AppRouter;



//using switch - the switch stop only when he found the dirst match!
// const routes = (
//     <BrowserRouter>
//     <div>
//         <Header />
//         <Switch> 
//         <Route path = '/' component = {ExpenseDashboardPage} exact ={true}/>  
//         <Route path = '/create' component = {AddExpensePage} />
//         <Route path = '/edit' component = {EditExpensePage} />
//         <Route path = '/help' component = {HelpPage} />
//         <Route component={NotFoundPage} />
//         </Switch>
//     </div>
//     </BrowserRouter>
// );


// exact make the path maching to be absultly
// const routes = (
//     <BrowserRouter>
//         <div> 
//         <Route path = '/' component = {ExpenseDashboardPage} exact ={true}/>  
//         <Route path = '/create' component = {AddExpensePage} />
//         <Route path = '/edit' component = {EditExpensePage} />
//         <Route path = '/help' component = {HelpPage} />
//         </div>
//     </BrowserRouter>
// );
