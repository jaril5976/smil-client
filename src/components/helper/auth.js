import Cookies from './cookies';

export default class Auth {
	static isLoggedIn(role = null){
		let token = Auth.token;
		let user = Auth.user;
		if (token === ''){
			return false;
		} else {
			return true;
		}
	}

	static logout(){
		Auth.token = '';
		Auth.user = '';
	}

	static get token(){
	  return Cookies.get('CRMtoken');
	}

	static get user(){
		let user = Cookies.get('CRMuser')
		if (user === '')
			return {};
		else
	   	return JSON.parse(user);
	}

	static set token(token){
    	Cookies.set('CRMtoken', token, {domain: 'localhost'});
	  	return true;
	}

	static set user(user){
	  Cookies.set('CRMuser', user, {domain: 'localhost'});
	  return true;
	}
}
