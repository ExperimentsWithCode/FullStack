import FormatDate from '../../util/format_date_util.js'
import React from 'react';


const authorBoxDisplay = (author, theDate, isQuestion) => {
  let theClass = (isQuestion) => isQuestion ? "author-info question" : "author-info"
  return (
    <div className={theClass(isQuestion)}>
      <p>{FormatDate(theDate)}</p>
      <p>{author.username}</p>
    </div>
  );
}
export default authorBoxDisplay
