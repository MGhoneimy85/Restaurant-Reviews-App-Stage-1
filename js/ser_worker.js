if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Service Worker Regisyration Succefully!');
	})
	.catch(function() {
		console.log('Service Worker Regisyration failed!');
	});
}