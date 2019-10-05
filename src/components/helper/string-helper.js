export default class StringHelper {
    static titleCase = (str) => {
      const splitStr = str.toLowerCase().split(' ');
      for (let i = 0; i < splitStr.length; i += 1) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(' ');
    }
  
    static truncateString = (str, length) => (str.length > length ? `${str.substring(0, length - 3)}...` : str)
  }
  