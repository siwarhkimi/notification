const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

//initialize express
const app = express();

//middleware 
app.use(bodyParser());

// To obtain the keys write in the terminal ./node_modules/.bin/web-push generate-vapid-keys
const publicKey = 'BBIbJQXo08xie0qXrQQEWfBhjsrfWKXeXVjru3QfC3jSA3UJsEt9REJOFI1EnW86oJW_YCQhaFuydRdSe8Gag50';
const privateKey = 'l4TvuC5Dd6S-Oi1RsVIvKdS7wLGf8Vs-k1rDYgJaBcE';

webpush.setVapidDetails('mailto:cywarhkimi@gmail.com', publicKey, privateKey);
