export default function errorArray(errorArr){
        let error = [];
        for(var i=0; i < errorArr.length; i++){   
            error[errorArr[i].field] = errorArr[i].error; 
        }
        return error;
}