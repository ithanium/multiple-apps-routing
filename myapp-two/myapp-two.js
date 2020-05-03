const express = require('express')
const app = express()
const port = 3002

app.get('^/', (req, res) => res.send('myapp-two'))

app.get('/*', function (req, res) {
	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

	console.log("myapp-two received GET request: " + fullUrl);
	res.send("myapp-two received GET request: " + fullUrl);
})

app.listen(port, () => console.log(`myapp-two listening on port: ${port}`))
