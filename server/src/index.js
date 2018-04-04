const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/palindrome', function(req, res) {
    const { data } = req.body

    const query = data.replace(/[^A-Z0-9]/gi, '').toLowerCase()

    const testPalindrome =
        query ===
        query
            .split('')
            .reverse()
            .join('')

    if (testPalindrome) {
        return res.status(200).send(true)
    }
    return res.status(400).send(false)
})

const server = app.listen(8000)
console.log('Servidor iniciado na porta %s', server.address().port)
