import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import Auth from '../helper/auth'

export default function PrivateRoute(props){
    console.log('this is Auth', Auth.isLoggedIn())
    return (
        <Fragment>
            { Auth.isLoggedIn() ? props.children : <Redirect to="/login" />}
        </Fragment>
    )
} 