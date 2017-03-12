import { values } from 'lodash';
import Moment from 'moment'

// export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
// 	const foundItem = pokemonDetail.items.find(item => item.id === itemId);
// 	return foundItem || {};
// }

const newest = (q1, q2) => {
    let left = new Date(q1.created_at);
    let right = new Date(q2.created_at);
    if (left < right){return 1}
    else if (left > right){return -1}
    else {return 0}
  }

const active = (q1, q2) => {
    let l1 = new Date(q1.last_active)
    let l2 = new Date(q1.created_at)
    let r1 = new Date(q2.last_active)
    let r2 = new Date(q2.created_at)
    let left = l1 > l2 ? l1 : l2
    let right = r1 > r2 ? r1 : r2
    left = new Date(left);
    right = new Date(right);
    debugger
    if (left < right){return 1}
    else if (left > right){return -1}
    else {return 0}
  }


export const selectAllQuestions = (questions, type ) => {
  let sorted_questions
  if (questions.questions[0] !== undefined){
    sorted_questions = questions.questions.sort( determineSortType(type) )
  } else {
    sorted_questions = {};
  }
  return sorted_questions;
}

const determineSortType = (type) => {
  let sortMethod
  if (type === "newest"){
    sortMethod = newest
  } else if (type === "active"){
    sortMethod = active
  } else { sortMethod = newest }
  return sortMethod
}
// export const selectSearchedQuestions = (questions, query ) => {
//   let sorted_questions
//   if (questions.questions[0] !== undefined){
//     sorted_questions = questions.questions.sort( (q1, q2, query) => {
//       query.split = query.split(" ")
//       let left = new Date(q1.created_at);
//       let right = new Date(q2.created_at);
//       if (left < right){return 1}
//       else if (left > right){return -1}
//       else {return 0}
//     } )
//   } else {
//     sorted_questions = {};
//   }
//   return sorted_questions;
// }
