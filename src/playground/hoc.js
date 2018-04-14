/// highre oreder compoents - HOC - a component(HOC) that renders another component(Reguler Component)
//The adventage of use HOC is:
//reuse of code
//render hijacking
//props manipulation 
// abstarct state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

///the function that wrapped the regular component
//That function return the HOC component
const withAdminWarning = (WrappedComponent)=>{
    return (props) => (
    <div>
        {props.isAdmin && <p>This is praivte info. please dont share</p>}
        <WrappedComponent {...props}/>
    </div>
    )
}

const requireAuthentication = (WrappedComponent)=>{
    return (props) => (
    <div>
        {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please login to view the info</p>)}
    </div>
    )
}

//the new component we make  - that if you a admin you will get this massge
const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin = {false} info = 'this is the ditales' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {true} info = 'this is the ditales' />, document.getElementById('app'));