const removeFormatting = (inp) => {
  let phn = "";
  for (var i = 0; i < inp.length; i++) {
    if (/^\d+$/.test(inp[i])) phn += inp[i];
  }
  return phn;
};

module.exports = removeFormatting;
