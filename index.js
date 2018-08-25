//this is needed to import expressjs into our application
const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')

let routesPath = './route'

//Declaring an instance or creating an application instance
const app = express()

fs.readdirSync(routesPath).forEach(function (file) {
     if (~file.indexOf('.js')){
         console.log('including the following file')
         console.log(routesPath+'/'+file)
         let route = require(routesPath + '/' + file);
         route.setRouter(app);
     }
})// end bootstrap route


//route of the application and call back function inside it
app.get('/hello', (req, res) => res.send('Hello World!'))

//listening the server
app.listen(appConfig.port, () => console.log('Example app listening on port 3000!'))