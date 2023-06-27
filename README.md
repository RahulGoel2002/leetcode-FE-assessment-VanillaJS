# Leetcode FE assessment solution
> **Note**
> To view and run this solution visit [here](https://codesandbox.io/p/github/RahulGoel2002/Leetcode-assessment-solution-VJS/main?file=%2F.codesandbox%2Ftasks.json%3A10%2C28&layout=%257B%2522sidebarPanel%2522%253A%2522GIT%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljdwlh0q000b356jcjgqrjgy%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljdwlh0q000d356j3q4a8xuu%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cljdwlh0q000b356jcjgqrjgy%2522%253A%257B%2522id%2522%253A%2522cljdwlh0q000b356jcjgqrjgy%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljdwlh0q000a356ji28e89hf%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522id%2522%253A%2522cljdwqdh103f4356j3zezakjj%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522cljdx439y05w8356j4yz54odc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Ftasks.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cljdx439y05w8356j4yz54odc%2522%257D%252C%2522cljdwlh0q000d356j3q4a8xuu%2522%253A%257B%2522id%2522%253A%2522cljdwlh0q000d356j3q4a8xuu%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522cljdwm2rt008j356j2zobf1by%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A1234%252C%2522id%2522%253A%2522cljdwm6zn00dj356jidy32gvg%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cljdwm6zn00dj356jidy32gvg%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

## Here is a summary of the solution
### 1. Setting up the project.
  I copy pasted the starter code and started coding in the `index.js` file
### 2. Created a reference to the input element 
  ```js
const phoneInputElement = document.getElementById("phone");
```
### 3. Created a function and passed it as the `onclick` event
```js
const formatField = (event) => {
  // code here
};

phoneInputElement.oninput = formatField;
```

### 4. Take the input value and the key pressed from event object passed to the function
```js
const formatField = (event) => {
  let key = event.data;
  let inp = event.target.value;
};

phoneInputElement.oninput = formatField;
```
### 5. Created a new file `phoneFormat.js` and wrote down the following logic
```js
const formatPhone = (key, inp) => {
  if (!isNaN(key)) {
    let pre = null,
      mid = null,
      post = null;
    let phn = inp;

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
```
This logic adds the formatting we want according to the number of digits in the input.
But here the logic does not do well for already decorated input. We have to come up with a logic to strip down the decoration and return us the bare phone digits.

### 6. created the `removeFormatting.js` file.
```js
const removeFormatting = (inp) => {
  let phn = "";
  for (var i = 0; i < inp.length; i++) {
    if (/^\d+$/.test(inp[i])) phn += inp[i];
  }
  return phn;
};
```
We compare the input string using regex and only pass the numbers.

### 7. export the functions to make them available to other files.
Add the `export default <function-name>` at the end of each file.
Or `module.export = <function-name>` if using cjs.

### 8. Integrate and test everything
Add any required condition handling and write tests. I have used the jest testing framework.

## Q2. Caret jump Handling
My logic to implement this remains a simple one. At each change I record the caret position and after formatting is applied I return the caret to its original position. 
For this I used the `selectionStart` property to get the caret's initial position.
and after every update I set the `selectionStart` and `selectionEnd` property to the previous caret position like so.
```js

const formatField = (event) => {
  let key = event.data;
  let inp = event.target.value;
  var curr_pos = phoneInputElement.selectionStart;

  if (!isNaN(key)) phoneInputElement.value = formatPhone(key, inp) || "";
  else phoneInputElement.value = inp.slice(0, inp.length - 1);
  phoneInputElement.selectionStart = curr_pos;
  phoneInputElement.selectionEnd = curr_pos;
};
```
But this solution works fine for editing the digits but it creates some bugs while inputing the digits.
Thus I add a final check that if the caret is at the end and user enters a number, the caret jumps to the end of the field. Which solved the problem.
Here is the final code 
```js

const formatField = (event) => {
  let key = event.data;
  let inp = event.target.value;
  var curr_pos = phoneInputElement.selectionStart;

  if (inp.length === curr_pos) curr_pos += inp.length;

  if (!isNaN(key)) phoneInputElement.value = formatPhone(key, inp) || "";
  else phoneInputElement.value = inp.slice(0, inp.length - 1);
  phoneInputElement.selectionStart = curr_pos;
  phoneInputElement.selectionEnd = curr_pos;
};
```
With this my Vanilla JS implementation was completed.


