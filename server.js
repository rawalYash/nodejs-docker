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

app.use('/hello-people', (req, res) => {
    try {
        return res.status(200).json({
            status: true,
            message: 'Hello peoples'
        })
    } catch (err) {
        console.log(err)
    }
})

app.use('/hello-guyss', (req, res) => {
    try {
        return res.status(200).json({
            status: true,
            message: 'Hello guys'
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

app.use('/ThirdApi', (req, res) => {
    try {
        console.log('shjdsfj')
        return res.status(200).json({
            status: true,
            message: 'Hello thirdAPI'
        })
    } catch (err) {
        console.log(err)
    }
})

app.use('/ForthApi', (req, res) => {
    try {
        console.log('shjdsfj')
        return res.status(200).json({
            status: true,
            message: 'Hello ForthApi'
        })
    } catch (err) {
        console.log(err)
    }
})

app.use('/FifthApi', (req, res) => {
    try {
        console.log('shjdsfj')
        return res.status(200).json({
            status: true,
            message: 'Hello FifthApi'
        })
    } catch (err) {
        console.log(err)
    }
})

app.use('/sixthApi', (req, res) => {
    try {
        console.log('shjdsfj')
        return res.status(200).json({
            status: true,
            message: 'Hello FifthApi'
        })
    } catch (err) {
        console.log(err)
    }
})


app.use('/seventhApi', (req, res) => {
    try {
        console.log('shjdsfj')
        return res.status(200).json({
            status: true,
            message: 'Hello seventhApi'
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



app.listen(8081, () => {
    console.log(`server running on port 8081`)
})