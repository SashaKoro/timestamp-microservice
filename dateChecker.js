const dateChecker = (date) => {
  let numDate = parseInt(date);
  let dateTime;
  let unix;

  if (numDate) {
    dateTime = new Date(numDate * 1000).toDateString();
    unix = numDate;
  } else {
    dateTime = new Date(date).toDateString();
    unix = (new Date(dateTime).getTime() / 1000);
  }
  if (dateTime === 'Invalid Date') {
    return { unix: null, naturalDate: null, };
  }

  let dateArr = dateTime.split(' ').slice(1);
  dateArr[1] += ',';
  let naturalDate = dateArr.join(' ');

  return { unix, naturalDate };
}

module.exports = { dateChecker };
