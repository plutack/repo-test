// import neccessary modules
import express from 'express'

// initialize express instance
const app = express()

// add extensions for express instance to use
var isLoggedIn = false
app.get('/', (req, res) => isLoggedIn ? getVideos() : req.redirect('/login'))

