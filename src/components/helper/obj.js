class Obj {
  static get(obj, props, val){
    return Obj._rec_get(obj, props.split('.'), val);
  }

  static _rec_get(obj, props, val) {
    // If we have reached an undefined/null property
    // then stop executing and return the default value.
    // If no default was provided it will be undefined.
    if (obj === undefined || obj === null) {
      return val;
    }

    // If the path array has no more elements, we've reached
    // the intended property and return its value
    if (props.length === 0) {
      return obj;
    }

    // Prepare our found property and path array for recursion
    return Obj._rec_get(obj[props[0]], props.slice(1), val);
  }

  static empty(input){
    return (Object.keys(input).length === 0
            && input.constructor === Object);
  }
}

export default Obj;
