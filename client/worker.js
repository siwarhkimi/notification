console.log('Service Worker Loaded...');

self.addEventListener('push', e => {
	const data = e.data.json();
	console.log('Push Recieved...');
	self.registration.showNotification(data.title, {
		body: 'Notified by Siwar',
		icon: 'https://cdn.dribbble.com/users/5513584/screenshots/12983021/media/8272e15aba68d2631ea6d58ef1b3aa49.png'
	})
})