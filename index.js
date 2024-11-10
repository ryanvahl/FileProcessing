// include express module
const express = require('express');
// create instance of express
const app = express();
const fileUpload = require('express-fileupload');
// can get port number later by using variable
const PORT = 3000;

//
app.use(fileUpload());

// the '/' is the URL path the get method will respond to
// request object (req) and response object (res) contains useful information about the request and response respectively
// '/' is the route you made for the client to use
app.get('/', (req,res) => {
    // provide a response to client to render
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
});

// first argument to post is the URL path that needs to have a post request to
// '/upload' is the route you made for the client to use
app.post('/upload', (req,res) => {
    // upload path
    const uploadedFile = req.files.uploadFile;

    // check file
    console.log(uploadedFile);

    // upload path
    const uploadPath = __dirname + "\\uploads\\" + uploadedFile.name;

    // check path
    console.log(uploadPath);

    // use provided path to store file locally. Here is where database would come into play
    uploadedFile.mv(uploadPath, (err) => {
        if (err) {
            console.log(err);
            res.send("Failed to upload");
        } else {
            res.send("Successfully uploaded!");
        }
    });
});

//create instance of server
app.listen(PORT, () => {
    console.log("Server is running");
});