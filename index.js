// include express module
const express = require('express');
// create instance of express
const app = express();
// can get port number later by using variable
const PORT = 3000;

// request object (req) and response object (res) contains useful information about the request and response respectively
app.get('/', (req,res) => {
    // provide a response to client to render
    res.send("Welcome");
    console.log(req);
});

//create instance of server
app.listen(PORT, () => {
    console.log("Server is running");
});