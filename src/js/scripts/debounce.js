export default function debounce(func, delay) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
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