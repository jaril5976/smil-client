import axios from 'axios';
import Auth from "../helper/auth";
import ObjectToFormData from '../helper/object-to-form-data'
const REGISTER_API = 'http://localhost:5976/api/user/register';
const LOGIN_API = 'http://localhost:5976/api/user/login';
export const registerUser = data => (dispatch) => {
    const formData = ObjectToFormData(data)
        let boundary = ''
        if (window === void 0){
          boundary = `boundary=${formData.getBoundary()}`
        }
        let headers = {
            "Content-Type": `multipart/form-data;${boundary}`,
        };
        const request = axios.post(REGISTER_API, formData, {headers: headers})
        
        return request.then(
            res => dispatch({type:'REGISTER_USER_SUCCESS', payload : res.data}),
            err => dispatch({type:'REGISTER_USER_ERROR', payload : err.data.errors})
        )
};

export const loginUser = (data, history) => (dispatch) => {
    const formData = ObjectToFormData(data)
    let boundary = ''
    if (window === void 0){
      boundary = `boundary=${formData.getBoundary()}`
    }
    let headers = {
        "Content-Type": `multipart/form-data;${boundary}`,
    };
    const request = axios.post(LOGIN_API, formData, {headers: headers})
    
    return request.then(
        res => {
            dispatch({type:'LOGIN_USER_SUCCESS', payload : res.data})
            if(res.data.data){
                Auth.token = res.data.data.access_token;
                Auth.user = res.data.data.user;
                history.push('/home')
            }
        },
        err => dispatch({type:'LOGIN_USER_ERROR', payload : err.data.errors})
    )
};

export const setDefault = data => (dispatch) => {
    return dispatch({type:'SET_USER_DEFAULT'})
}