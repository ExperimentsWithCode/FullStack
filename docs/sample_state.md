```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {
      username: "sampleUser",
      password: "samplePass",
      confirmPass: "samplePass",  
      errors: ["password must be min 6 characters", "fields cannot be blank"]
    },
    logIn: {
      username: "sampleUser",
      password: "samplePass",
      errors: []
    },
    askQuestion: {
      title: "Sample Question Title [string type]",
      body: "Sample Question Body [text type]",
      tags: "sampletag [may not be implemented]"
      errors: ["title/body can't be blank"]
    },
    answerQuestion: {
      body: "Sample Answer Body [text type]",
      errors: ["body can't be blank"]
    }
  },
  qustionsList: {
    votes: 0,
    answers: 0,
    views: 0,
    title: "Sample Question Title [string type]",
    author: sampleUser,
    tags: {
      id: tagName,
      id2: tagName2,
      id3: etc
    }
  },
  qustion: {
    votes: 0,
    answers: 0,
    views: 0,
    title: "Sample Question Title [string type]",
    author: sampleUser,
    body: "Sample Body [text type]"
    asked: datetime,
    viewed: 0,
    active: datetime,
    tags: {
      id: tagName,
      id2: tagName2
      id3: etc
    }
  },
  answers: {
    answer {
      votes: 0,
      author: sampleUser,
      body: "Sample Body [text type]"
      answer: false
    }
  }
}
```
