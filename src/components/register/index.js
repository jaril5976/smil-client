import React from 'react';
import withBody from '../HOC/withBody';
import { registerUser, setDefault } from "../actions/user.action";
import { connect } from "react-redux";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    componentWillMount = () => {
        this.props.setDefault();
    }
    componentWillUnmount = () => {
        console.log('component will unmount just called')
    }
    render(){
        const { user } = this.props;
        return (
            <React.Fragment>
                <h1>This is Register page</h1>
                Email:<input type="text" name="email" onChange={this.handleChange} /><br />
                Password:<input type="password" name="password" onChange={this.handleChange}/><br />
                Name:<input type="text" name="name" onChange={this.handleChange}/> <br />
                <input type = "button" value="Register" onClick={() => this.props.registerUser(this.state)}/>
                {user && user.data && <p style={{color: 'green'}}>You are successfully registers, please login!</p>}
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

export default connect(mapStateToProps, {registerUser, setDefault}) (withBody(Register));
