const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

//initialize express
const app = express();

// Set static path 
app.use(express.static(path.join(__dirname, "client")));


//middleware 
app.use(bodyParser.json());

// To obtain the keys write in the terminal ./node_modules/.bin/web-push generate-vapid-keys
const publicKey = 'BBIbJQXo08xie0qXrQQEWfBhjsrfWKXeXVjru3QfC3jSA3UJsEt9REJOFI1EnW86oJW_YCQhaFuydRdSe8Gag50';
const privateKey = 'l4TvuC5Dd6S-Oi1RsVIvKdS7wLGf8Vs-k1rDYgJaBcE';

webpush.setVapidDetails('mailto:cywarhkimi@gmail.com', publicKey, privateKey);

// Create the subscribe Route 
app.post('/subscribe', (req, res) => {
	// Get pushSubscription object
	const subscription = req.body;

	//send 201 - resource created 
	res.status(201).json({});

	//create payload
	const payload = JSON.stringify({ title: 'Push Test' });

	//Pass the object into sendNotification function
	webpush.sendNotification(subscription, payload)
	.catch(err => console.log('Error: ' + err))
});

const port = 5000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`))