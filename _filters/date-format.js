// _filters/date-format.js
module.exports = function (date, locale) {
    return date.toLocaleDateString(locale);
  };
  