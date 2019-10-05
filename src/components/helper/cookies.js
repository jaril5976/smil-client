import * as ClientCookies from "js-cookie";
import IsServer from "./is-server";

class Cookies
{
	construct(){
		this.cookie = {};
		this.cookies = {};
	}

	init(req, res){
		if (IsServer()) {
			this.cookie = res.cookie;
			this.cookies = Object.assign(req.cookies, {});
		}
	}

  get(name){
  	if (IsServer()){
  		return this.serverCookiesGet(name)
  	}else{
      return this.cleanVal(ClientCookies.get(name));
  	}
  }

  serverCookiesGet(name){
  	let ret;

  	try{
  		if (this.cookies[name])
  		  ret = this.cookies[name];
  	} catch(e) {
  		console.log(e);
  	}

  	return this.cleanVal(ret);
  }

  set(index, value, options = null){
    let fn = IsServer() ? this.cookie : ClientCookies.set ;

    if (options)
      fn(index, value, options);
    else
      fn(index, value);
  }

  cleanVal(val){
    if (val === null || typeof val === 'undefined')
      return '';
    else
      return val;
  }

}

export default new Cookies;
