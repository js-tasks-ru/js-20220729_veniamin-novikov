/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const comparator = new Intl.Collator(['ru'], { caseFirst: 'upper' });
  return arr.slice().sort((a, b) => comparator.compare(a, b) * (param === 'desc' ? -1 : 1));
}


