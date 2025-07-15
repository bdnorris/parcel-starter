export default function throttle<T extends (...args: unknown[]) => void>(
	func: T,
	delay: number,
): (...args: Parameters<T>) => void {
	let wait: boolean = false;

	return (...args: Parameters<T>): void => {
		if (wait) {
			return;
		}
		func(...args);
		wait = true;
		setTimeout((): void => {
			wait = false;
		}, delay);
	};
}

/*
https://www.paulsblog.dev/advanced-javascript-functions-to-improve-code-quality/#throttle

// Define the function that updates the layout
function updateLayout() {
  // Update the layout...
}

// Create a throttled version of the function
const throttledUpdateLayout = throttle(updateLayout, 250);

// Listen for window scroll events and call the throttled function
window.addEventListener("scroll", throttledUpdateLayout);
*/
