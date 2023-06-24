const removeFormatting = require("./removeFormatting");

const formatPhone = (key, inp) => {
  if (!isNaN(key)) {
    let pre = null,
      mid = null,
      post = null;
    let phn = removeFormatting(inp);

    pre = phn.slice(0, 3);
    if (!(phn.length < 4)) {
      pre = `(${pre}) `;
      mid = phn.slice(3, 6);
    }
    if (!(phn.length < 7)) {
      mid = `${mid}-`;
      post = phn.slice(6, phn.length);
    }
    return `${pre || ""}${mid || ""}${post || ""}`;
  }
  return "";
};

module.exports = formatPhone;
