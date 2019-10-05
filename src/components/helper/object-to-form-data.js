import FormData from 'form-data';
import IsServer from './is-server';
import Obj from './obj';

const objectToFormData = (obj, form, ns) => {
  let fd = form || new FormData();

  for (let property in obj) {
    if (Obj.get(obj, property) == void 0) {
      continue;
    }

    let val = obj[property]
    let key = (ns) ? (ns + '[' + property + ']') : property
    let isFile = IsServer() ? false : (val instanceof File)
    if(typeof val === 'object' && !isFile) {
      objectToFormData(val, fd, key);
    } else {
      fd.append(key, val);
    }
  }

  return fd;
};

export default objectToFormData
