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
    switch (items.length) {
    case 1:
      return obj[items[0]];
    case 2:
      return obj[items[0]][items[1]];
    case 3:
      return obj[items[0]][items[1]][items[2]];
    default:
      return undefined;
    }
  };
}
