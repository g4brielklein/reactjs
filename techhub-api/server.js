import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('GOT /')
})

const PORT = 3000

app.listen(3000, () => {
    console.log(`Techhub's API running on port ${PORT}`)
})
