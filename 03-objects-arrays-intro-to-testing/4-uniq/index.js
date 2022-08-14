/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (Array.isArray(arr) && arr.length) {
    const set = new Set();
    arr.forEach(set.add, set);

    return Array.from(set);
  }
  return [];
  // return [...new Set(arr)];
}
