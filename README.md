# HeapSpill

### Live Site
http://HeapSpill.com

## Overview
Inspired by Stack Overflow, HeapSpill seeks to provide a platform for community driven answers. It is built using Ruby on Rails, React with Redux, and Sass.


### Features
* Sign up/in with email
* Ask/Edit questions
* Answer questions
* Vote on answers
* Sort questions
* Fuzzy search


### Sort Questions
Sorting is currently performed on the front end. This project uses the JavaScript's built in sort method, with custom callback methods. Sorting can be applied to questions or answers with specific methods for each. Sort methods are set as constants mapped to hashes reflecting the options available for each sort target. This allows for sorts to be called quickly and effectively.

```javascript
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
```


### Voting
Votes are polymorphic associations in the database. This allows nice minimal code to process both questions and answer voting. One function handles both voting types by passing in a flag 'A', or 'Q' to denote the association type. This is passed in as a single variable with 'id' and separated in processing. Hashes are used to quickly convert html element values into the appropriate vote database column values.


```JavaScript
// location:
// ./frontent/components/current_question/current_question_display.jsx

const voteTypes = {'A': 'Answer', 'Q': 'Question'}
const voteVals = {'upvote': 1, 'downvote': -1,
  'upvote active': 0, 'downvote active': 0}

//...

extractVote({type, id}){
  let subject
  let getVote = (vote) => (this.props.current_user.id == vote.user_id)
  if (type === 'Question'){
    subject = this.state.currentQuestion
  } else {
    let getAnswer = (subject) => (subject.id == id)
    subject = this.state.currentQuestion.answers.find(getAnswer);
  }
  return subject.votes.find(getVote)
}

extractVoteObject(e){
  let subject
  const voteSubjects = {}
  let voteData = {}
  voteData['id'] = e.currentTarget.attributes.value.value.slice(1)
  voteData['type'] = voteTypes[ e.currentTarget.attributes.value.value.slice(0,1) ]
  voteData['val'] = voteVals[e.currentTarget.attributes.class.value]
  voteData['vote'] = this.extractVote(voteData)
  return voteData
}
```
