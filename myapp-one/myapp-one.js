const express = require('express')
const app = express()
const port = 3001

app.get('^/', (req, res) => res.send('myapp-one'))

app.get('/*', function (req, res) {
	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

	console.log("myapp-one received GET request: " + fullUrl);
	res.send("myapp-one received GET request: " + fullUrl);
})

app.listen(port, () => console.log(`myapp-one listening on port: ${port}`))
