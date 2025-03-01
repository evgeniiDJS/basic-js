import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  function countCats(arr) {
  var num = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let x = 0; x < arr[i].length; x++) {
     num += arr[i][x] === '^^';
    }
  }
  return num;
}

}
