//here we show the notification

console.log('Service Worker Loaded...');

self.addEventListener('push', e => {
	const data = e.data.json();
	console.log('Push Recieved...');
	self.registration.showNotification(data.title, {
		body: 'Life is wonderful',
		icon: 'https://www.citypng.com/public/uploads/preview/-11591552248eawydg4hnu.png'
	})
})