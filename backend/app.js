const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
//     next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

// app.use((req, res, next) => {
//     res.send('Hello, this is express.');
//     next();
// });

app.get("/api/posts", (req, res, next) => {
    const posts = [
        {
            id: "fadf12421l", 
            title: "First server-side post",
            content: "This is coming from the server"
        },
        {
            id: "ksajflaj132",
            title: "Second server-side post",
            content: "This is also coming from the server"
        },
        {
            id: "kkjhkjha1123",
            title: "Third server-side post",
            content: "This is coming from the server, too"
        }
    ];
    res.status(200).json({
        message: "Posts fetched successfully.",
        posts: posts,
    });
    // let data = JSON.parse(res.body);
    console.log(res.message)
    // res.send();
    // res.send(data.posts);
});

module.exports = app;