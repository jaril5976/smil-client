import axios from 'axios'
import ObjectToFormData from './object-to-form-data'
import Config from '../app-config'

class Request{
    static async post(requestPath, data = {}, token = null){        
        const requestUrl = Config.API_URL + requestPath;
        const formData = ObjectToFormData(data)
        
        let boundary = ''
        if (window === void 0){
          boundary = `boundary=${formData.getBoundary()}`
        }

        let headers = {
          "Content-Type": `multipart/form-data;${boundary}`,
        };

        if (token){
          headers.authorization = `Base ${token}`
        }

        let response;
        try {
          response = await axios.post(requestUrl, formData, {headers: headers});
        } catch (error) {
          response = error.response;
        }

        return Object.assign({}, response).data
    }

    static async url(requestUrl, data = {}){       
        let response = {};
        try {
            response = await axios.post(requestUrl, data, {
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
            });
        } catch (error) {
            response = error.response;
        }

        return Object.assign({}, response).data
    }
}

export default Request;