import React from 'react';//using jsx
import {Router, Route , Switch,Link, NavLink} from 'react-router-dom';//components that help us to routing our app
import createHistory from 'history/createBrowserHistory'
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRout from './PrivateRout';

//now we acsses to history in any place we want
export const history = createHistory();

//by default the BrowserRouter behind the seen the - he create "browserHistory"
//we do that manuly, and that we can use history anywhere and not just in components
const AppRouter = ()=>(
    // <BrowserRouter>
    <Router history = {history}>
    <div>
        <Switch> 
        <Route path = '/' component = {LoginPage} exact ={true}/>   
        <PrivateRout path = '/dashboard' component = {ExpenseDashboardPage} />  
        <PrivateRout path = '/create' component = {AddExpensePage} />
        <PrivateRout path = '/edit/:id' component = {EditExpensePage} />
        <Route path = '/help' component = {HelpPage} />
        <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
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
