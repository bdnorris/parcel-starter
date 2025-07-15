export default function debounce<T extends (...args: unknown[]) => unknown>(
	func: T,
	delay: number,
): (...args: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout> | null = null;
	return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
		clearTimeout(timeout as ReturnType<typeof setTimeout>);
		timeout = setTimeout(() => func.apply(this, args), delay);
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
