import React from 'react';//using jsx
import {NavLink} from 'react-router-dom';

const Header = ()=> (
    <header>
        <h1>Expense</h1>
        <NavLink to = "/" activeClassName = 'is-active' exact = {true}>Dashboard</NavLink>
        <NavLink to = "/create" activeClassName = 'is-active'>Create Expense</NavLink>
    </header>
);

export default Header;