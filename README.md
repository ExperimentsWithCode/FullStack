# HeapSpill

### Live Site
http://HeapSpill.com

## Overview
Inspired by Stack Overflow, HeapSpill seeks to provide a platform for community driven answers. It is built using Ruby on Rails, React with Redux, and Sass.

### Sort Questions
Sorting is currently performed on the front end. This project uses the JavaScript's built in sort method, with custom callback methods. Sorting can be applied to questions or answers with specific methods for each. Sort methods are set as constants mapped to hashes reflecting the options available for each sort target. This allows for sorts to be called quickly and effectively.

'''javascript
// location: ./frontent/reducers/selectors.js
// sorts available for Questions
const methodsAvailableQ = {'newest': newest, 'active': active,
  'votes': votes, 'default': newest}

// sorts available for Answers
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

'''



###Features
* Sign up/in with email
* Ask/Edit questions
* Answer questions
* Vote on answers
* Sort questions
* Fuzzy search
