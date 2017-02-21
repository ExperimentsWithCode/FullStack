import Moment from 'moment'


const formatDate = (theDate) => {
  debugger
  let now = new Date()
  let then = new Date(theDate)
  let delta = now - then
  if (delta < 86400000 * 7){ // less than a week
    return Moment(theDate).fromNow()
  }
  return Moment(theDate).format('MMM Do YYYY, h:mm:ss a');
}

export default formatDate
