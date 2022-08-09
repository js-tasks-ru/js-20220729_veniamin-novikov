/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (typeof obj !== ('undefined' || null)) {
    const result = {};
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== ('undefined' || null)) {
        result[obj[key]] = key;
      }
    });
    return result;
  }
}
