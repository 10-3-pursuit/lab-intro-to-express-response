const app = require('./app')
// used to be in app.js
// ---- Configuring and Listening for URL res/req on Port ----
const PORT = process.env.PORT || 3003; // saves PORT to a variable so we can use in a callback fx in next lines that also outputs a message to the console for user; however installing nodemon and running nodemon app.js in the terminal shows us a message to let us know the port is listening for requests / responses and updates as this server gets updated 

// app.listen(3003); // this code snippet doesn't give us a way to console.log() a message in terminal like the one in the next line does, but it is all that we need
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
