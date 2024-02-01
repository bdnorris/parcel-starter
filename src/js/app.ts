import '../scss/style.scss';

if(document.readyState !== 'loading') {
	runOnStart();
}
else {
	document.addEventListener('DOMContentLoaded', function () {
			runOnStart()
	});
}

function runOnStart() {
	// Run your code here
}