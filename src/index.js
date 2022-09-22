const express = require('express')
const mongoose = require("mongoose")
const port = process.env.PORT || 3000
const execute_app = express()
require('dotenv').config({path: '.env'})

const userRoute = require('./routes/user.routes')

execute_app.listen(port, ()=> console.log('server listening on port', port))

execute_app.get('/', (req, res)=> res.send('Programación III'))

execute_app.use(express.json());
execute_app.use('/api', userRoute)

mongoose.connect(process.env['MONGO_DB'], {
    }).then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))