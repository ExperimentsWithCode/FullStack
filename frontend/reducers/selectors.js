import { values } from 'lodash';
import Moment from 'moment'

// export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
// 	const foundItem = pokemonDetail.items.find(item => item.id === itemId);
// 	return foundItem || {};
// }

const newest = (s1, s2) => {
    let left = new Date(s1.created_at);
    let right = new Date(s2.created_at);
    if (left < right){return 1}
    else if (left > right){return -1}
    else {return 0}
  }

const votes = (s1, s2) => {
    let left = s1.vote_count;
    let right = s2.vote_count;
    if (left < right){return 1}
    else if (left > right){return -1}
    else {return 0}
  }

const active = (s1, s2) => {
    let l1 = new Date(s1.last_active)
    let l2 = new Date(s1.created_at)
    let r1 = new Date(s2.last_active)
    let r2 = new Date(s2.created_at)
    let left = l1 > l2 ? l1 : l2
    let right = r1 > r2 ? r1 : r2
    left = new Date(left);
    right = new Date(right);
    if (left < right){return 1}
    else if (left > right){return -1}
    else {return 0}
  }


const oldest = (s1, s2) => {
    let left = new Date(s1.created_at);
    let right = new Date(s2.created_at);
    if (left < right){return -1}
    else if (left > right){return 1}
    else {return 0}
  }


const methodsAvailableQ = {'newest': newest, 'active': active,
  'votes': votes, 'default': newest}

const methodsAvailableA = {'active': active, 'oldest': oldest,
  'votes': votes, 'default': active}

const getMethods = {'q': methodsAvailableQ, 'a': methodsAvailableA}

const getSort = (type, sort) => {
  let sortMethod
  if (getMethods[type][sort] === undefined){
    sortMethod = getMethods[type]['default']
  } else {
    sortMethod = getMethods[type][sort]
  }
  return sortMethod
}

export const selectAllQuestions = (questions, sort ) => {
  let sorted_questions
  if (questions.questions[0] !== undefined){
    sorted_questions = questions.questions.sort( getSort('q', sort) )
  } else {
    sorted_questions = {};
  }
  return sorted_questions;
}

export const selectAllAnswers = (state, sort ) => {
  let answers = state.currentQuestion.answers
  let sorted_answers
  if (answers[0] !== undefined){
    sorted_answers = answers.sort( getSort('a', sort) )
  } else {
    sorted_answers = {};
  }
  return sorted_answers;
}
