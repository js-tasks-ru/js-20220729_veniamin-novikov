/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let result = '';
  if (size < 1) {
    return result;
  }
  let buffer = [];
  for (const c of string) {
    if (buffer.length) {
      if (buffer[0] === c) {
        if (buffer.length >= size) {
          // skip extra symbol
        } else {
          buffer.push(c);
          result += c;
        }
      } else {
        buffer = [];
        buffer.push(c);
        result += c;
      }
    } else {
      buffer.push(c);
      result += c;
    }
  }
  return result;
}
