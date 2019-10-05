// use base request library 

export default class ApiResponse {
  
  /**
   * @param response {Object} Response object of axios
   * */ 
  constructor(response){
    this.__response = response;
  }

  /**
   * @return boolean
   * */ 
  success(){
    return this.failed() === false;
  }

  /**
   * @return boolean
   * */ 
  failed(){
    let resp = this.response();
    
    if (resp.errors){
      return true;
    }else{
      return false;
    }
  }

  /**
   * @return Object
   * */ 
  errors(){
    if (this.failed()){
      return this.response().errors;
    }else{
      return {};
    }
  }

  /**
   * @return Object
   * */ 
  response(){
    return this.__response;
  }
}