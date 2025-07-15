export default function memoize<T extends (...args: unknown[]) => unknown>(
	func: T,
): T {
	const cache: Map<string, ReturnType<T>> = new Map();
	return function (
		this: ThisParameterType<T>,
		...args: Parameters<T>
	): ReturnType<T> {
		const key: string = JSON.stringify(args);
		if (cache.has(key)) {
			return cache.get(key) as ReturnType<T>;
		}
		const result = func.apply(this, args) as ReturnType<T>;
		cache.set(key, result);
		return result;
	} as T;
}

/*
https://www.paulsblog.dev/advanced-javascript-functions-to-improve-code-quality/#memoize

// Define the function that performs the calculation
function fibonacci(n) {
    if (n < 2)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create a memoized version of the function
const memoizedFibonacci = memoize(fibonacci);

// Call the memoized function with multiple input values
console.time('total')
console.time('sub1')
const result1 = memoizedFibonacci(30);
console.timeEnd('sub1')
console.time('sub2')
const result2 = memoizedFibonacci(29);
console.timeEnd('sub2')
console.time('sub3')
const result3 = memoizedFibonacci(30);
console.timeEnd('sub3')
console.timeEnd('total')
*/
