export default function debounce(func: Function, delay: number): Function {
  let timeout: any = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), delay);
  };
}

/*
https://www.paulsblog.dev/advanced-javascript-functions-to-improve-code-quality/#debounce

// Define the function that updates the layout
function updateLayout() {
  // Update the layout...
}

// Create a debounced version of the function
const debouncedUpdateLayout = debounce(updateLayout, 250);

// Listen for window resize events and call the debounced function
window.addEventListener("resize", debouncedUpdateLayout);
*/