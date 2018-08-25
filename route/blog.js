const express = require('express')

let setRouter = (app) => {
    let helloWorldFunction = (req,res) => res.send('Hello World');
    let printExample = (req,res) => res.send("print Example");

    app.get('/hello-world',helloWorldFunction);
    app.get('/example',printExample);
}//end set router

module.exports = {
     setRouter: setRouter
}