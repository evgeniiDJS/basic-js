import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
   if (!Array.isArray(members)) return false;
  let teamName = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") teamName.push(members[i].trim()[0]);
  }

  return teamName.join("").toUpperCase().split("").sort().join("");
  
}
