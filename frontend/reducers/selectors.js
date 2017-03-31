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

const votes = (q1, q2) => {
    let left = q1.vote_count;
    let right = q2.vote_count;
    if (left < right){return 1}
    else if (left > right){return -1}
    else {return 0}
  }

export const active = (q1, q2) => {
    let l1 = new Date(q1.last_active)
    let l2 = new Date(q1.created_at)
    let r1 = new Date(q2.last_active)
    let r2 = new Date(q2.created_at)
    let left = l1 > l2 ? l1 : l2
    let right = r1 > r2 ? r1 : r2
    left = new Date(left);
    right = new Date(right);
    if (left < right){return 1}
    else if (left > right){return -1}
    else {return 0}
  }



export const selectAllQuestions = (questions, type ) => {
  let sorted_questions
  if (questions.questions[0] !== undefined){
    sorted_questions = questions.questions.sort( determineSortTypeQ(type) )
  } else {
    sorted_questions = {};
  }
  return sorted_questions;
}

const determineSortTypeQ = (type) => {
  let sortMethod
  if (type === "newest"){
    sortMethod = newest
  } else if (type === "active"){
    sortMethod = active
  } else if (type === "votes"){
      sortMethod = votes
  } else { sortMethod = newest }
  return sortMethod
}



export const selectAllAnswers = (state, type ) => {
  let answers = state.currentQuestion.answers
  let sorted_answers
  if (answers[0] !== undefined){
    sorted_answers = answers.sort( determineSortTypeA(type) )
  } else {
    sorted_answers = {};
  }
  return sorted_answers;
}


const determineSortTypeA = (type) => {
  let sortMethod
  if (type === "active"){
    sortMethod = answersActive
  } else if (type === "oldest"){
    sortMethod = answersOldest
  } else if (type === "votes"){
      sortMethod = answersVotes
  } else { sortMethod = answersVotes }
  return sortMethod
}



const answersActive = (a1, a2) => {
    let left = new Date(a1.updated_at);
    let right = new Date(a2.updated_at);
    if (left < right){return 1}
    else if (left > right){return -1}
    else {return 0}
  }

const answersOldest = (a1, a2) => {
    let left = new Date(a1.created_at);
    let right = new Date(a2.created_at);
    if (left < right){return -1}
    else if (left > right){return 1}
    else {return 0}
  }

const answersVotes = (a1, a2) => {
    let left = a1.vote_count
    let right = a2.vote_count;
    if (left < right){return 1}
    else if (left > right){return -1}
    else {return 0}
  }
