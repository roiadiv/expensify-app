import React from 'react';//using jsx
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';//components that help us to routing our app
import Header from '../components/Header';


export const PublicRout =({
    isAunthenticated,
    component:Component,
    ...rest//crate a varible named "rest" that conatin all the props we dont distruct
    })=>(
        <Route {...rest} component = {(props)=>(
            isAunthenticated? (
                <Redirect to="/dashboard"/>
            ):(
                <Component {...props} />
            )
        )}/>
    
);

const mapStateToProps = (state)=>({
    isAunthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRout);