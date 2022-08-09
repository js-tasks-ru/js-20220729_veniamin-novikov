/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const items = path.split(".");

  return obj => {
    if (!Object.keys(obj).length) {
      return undefined;
    }
    let temp = undefined;
    for (const item of items) {
      if (temp === undefined) {
        temp = obj[item];
      } else {
        temp = temp[item];
      }
    }
    return temp;
  };
}
