var express = require('express');
var app = express();
var PORT = 8000;

// used to serve static files
app.use(express.static('../client'))

app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

