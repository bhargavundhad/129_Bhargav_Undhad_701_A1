function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new TypeError('Expected a Date object');
  }
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

module.exports = formatDate;
