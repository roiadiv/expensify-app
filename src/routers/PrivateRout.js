import React from 'react';//using jsx
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';//components that help us to routing our app
import Header from '../components/Header';


export const PrivateRout =({
    isAunthenticated,
    component:Component,
    ...rest//crate a varible named "rest" that conatin all the props we dont distruct
    })=>(
        <Route {...rest} component = {(props)=>(
            isAunthenticated? (
                <div>
                    <Header/>
                    <Component {...props} />
                </div>
            ):(
                <Redirect to="/"/>
            )
        )}/>
    
);

const mapStateToProps = (state)=>({
    isAunthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRout);