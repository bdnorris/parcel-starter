export default function once<T extends (...args: unknown[]) => unknown>(func: T): (...args: Parameters<T>) => ReturnType<T> {
  let ran: boolean = false;
  let result: ReturnType<T>;
  return function(this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> {
    if (ran) return result;
    result = func.apply(this, args) as ReturnType<T>;
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