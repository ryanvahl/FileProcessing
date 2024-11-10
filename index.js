// include express module
const express = require('express');
// create instance of express
const app = express();
// can get port number later by using variable
const PORT = 3000;

//create instance of server
app.listen(PORT, () => {
    console.log("Server is running");
});