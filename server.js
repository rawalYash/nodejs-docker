const express = require('express');
// const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));



app.use('/hello', (req, res) => {
    try {
        console.log('shjdsfj')
        return res.status(200).json({
            status: true,
            message: 'Hello World'
        })
    } catch (err) {
        console.log(err)
    }
})

app.use('/api/world', (req, res) => {
    try {
        console.log('shjdsfj')
        return res.status(200).json({
            status: true,
            message: 'Hello World222'
        })
    } catch (err) {
        console.log(err)
    }
})

app.use('/secondApi', (req, res) => {
    try {
        console.log('shjdsfj')
        return res.status(200).json({
            status: true,
            message: 'Hello seconAPI'
        })
    } catch (err) {
        console.log(err)
    }
})

app.use('/', (req, res) => {
    try {
        return res.status(200).json({
            status: true,
            message: 'server running smoothly'
        })
    } catch (err) {
        console.log(err)
    }
})



app.listen(8080, () => {
    console.log(`server running on port 8080`)
})