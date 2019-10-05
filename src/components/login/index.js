import React from 'react';
import withBody from '../HOC/withBody';
import { loginUser, setDefault } from "../actions/user.action";
import { connect } from "react-redux";
import Auth from "../helper/auth";
import { history } from "../helper/history";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    componentWillMount = () => {
        this.props.setDefault();
        if(Auth.isLoggedIn())
            this.props.history.push('/')
    }
    render(){
        const { user } = this.props;
        return (
            <React.Fragment>
                <h1>This is Login page</h1>
                Email:<input type="text" name="email" onChange={this.handleChange}/><br />
                Password:<input type="password" name="password" onChange={this.handleChange}/><br />
                <input type = "button" value="Login" onClick={() => this.props.loginUser(this.state, this.props.history)}/>
                {user && user.errors && user.errors.length > 0 && 
                    user.errors.map(o=>(<p style={{color: 'red'}}>{o.error}</p>))
                }
            </React.Fragment>
          );
    }
}

function mapStateToProps(state) {
    return {user: state.user}
}
export default connect(mapStateToProps, {loginUser, setDefault}) (withBody(Login));
