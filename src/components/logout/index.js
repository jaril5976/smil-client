import React from 'react';
import Auth from '../helper/auth';

class Logout extends React.Component {
    componentWillMount = () => {
        Auth.logout();
        this.props.history.push('/login')
    }
    render(){
        return (<div><h1>logout</h1></div>);
    }
}


export default Logout;
