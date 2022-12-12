const express = require('express') // loading the express package/module
const app = express() // starting out express server
const port = 3000; // define the entrypoint/gateway for our server

app.use(express.static('public')) // serve files located in a "public" folder

// Home route
app.get('/', (req, res) => { // defining how to handle a request coming from the homepage
  res.sendFile(`${__dirname}/views/index.html`)
})

// Dog route
app.get('/dog', (req, res) => { // defining how to handle a request coming from the dog page
  res.sendFile(`${__dirname}/views/dog.html`)
})
// About route
app.get('/about', (req, res) => { // defining how to handle a request coming from the about page
    res.send('Welcome to the About page')
  })

  // Contact route
app.get('/contact', (req, res) => { // defining how to handle a request coming from the contact page
    res.send('Welcome to the Contact page')
})

app.listen(port, () => { // setting our server to listen at a specific gateway
  console.log(`Example app listening on port ${port}`)
})