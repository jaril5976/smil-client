// use base request library 
import Auth from './auth'
import Requests from './requests'
import ApiResponse from './api-response'

export default class ApiClient{
  constructor(){
    this.apiTarget = {};
    this.payload = {};
    this.token = null;
  }

  /**
   * @param target {String}
   * @return this
   */
  target(target){
    this.apiTarget = target;
    return this;
  }

  /**
   * @param key {Mix} Object or string
   * @param value {Any}
   * @return this
   */
  set(key, value){
    if (typeof key === "object"){
      this.payload = Object.assign(this.payload, key)
    }else{
      this.payload[key] = value;
    }
    
    
    return this;
  }

  /**
   * @param token {String}
   * @return this
   */
  token(token){
    this.token = token;
    return this;
  }

  /**
   * @return this
   */
  auth(){
    this.token = Auth.token;
    return this;
  }

  /**
   *  @return promise
   */ 
  async exec(){
    const resp = await Requests.post(
      this.apiTarget,
      this.payload, 
      this.token
    );
    let _resp = this.isValidResponse(resp);
    return _resp;
  }

  isValidResponse(resp) {
    if(resp){
      return new ApiResponse(resp)
    } else {
      return new ApiResponse({
        server_error:'Application Server is not responding.'
      })
    }
  }

}

