import { values } from 'lodash';
import Moment from 'moment'

// export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
// 	const foundItem = pokemonDetail.items.find(item => item.id === itemId);
// 	return foundItem || {};
// }

export const selectAllQuestions = (questions ) => {
  let sorted_questions
  if (questions.questions[0] !== undefined){
    sorted_questions = questions.questions.sort( (q1, q2) => {
      // console.log("#########################################")
      let left = new Date(q1.created_at);
      let right = new Date(q2.created_at);
      // console.log(q1)
      // console.log(left)
      // console.log(q2)
      // console.log(right)
      // console.log("........................................")
      // console.log(left < right)
      if (left < right){return 1}
      else if (left > right){return -1}
      else {return 0}
    } )
  } else {
    sorted_questions = {};
  }
  return sorted_questions;
}
