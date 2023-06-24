import formatPhone from "./formatPhone";

formatPhone = require("./formatPhone");

const phoneInputElement = document.getElementById("phone");

const formatField = (event) => {
  let key = event.data;
  let inp = event.target.value;
  if (!isNaN(key)) phoneInputElement.value = formatPhone(key, inp) || "";
  else phoneInputElement.value = inp.slice(0, inp.length - 1);
  // console.log(`${pre || ""}${mid || ""}${post || ""}`);
};

phoneInputElement.oninput = formatField;
export default formatPhone;
