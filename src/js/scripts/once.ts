export default function once(func: Function): Function {
  let ran: boolean = false;
  let result: any;
  return function() {
    if (ran) return result;
    result = func.apply(this, arguments);
    ran = true;
    return result;
  };
}

/*
https://www.paulsblog.dev/advanced-javascript-functions-to-improve-code-quality/#once

// Define the function that sends the request
function requestSomeData() {
  // Send the request...
}

// Create a version of the function that can only be called once
const sendRequestOnce = once(sendRequest);

// Listen for clicks on a button and call the "once" function
const button = document.querySelector("button");
button.addEventListener("click", sendRequestOnce);
*/