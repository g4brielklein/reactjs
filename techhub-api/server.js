import express from 'express'
import pg from 'pg'
import { randomUUID } from 'node:crypto'
import 'dotenv/config'

const { Client } = pg

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('GOT /')
})

app.post('/post', async (req, res) => {
    const { content } = req.body;

    const id = randomUUID()
    const createdAt = new Date().toISOString();

    const client = new Client({
        user: process.env.PG_USER,
        password: process.env.PG_PW,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DB,
        ssl: process.env.PG_SSL,
    })
    await client.connect()

    await client.query(`INSERT INTO posts (id, content, "createdAt", "authorId") VALUES ('${id}', '${content}', '${createdAt}', '1')`);

    await client.end()

    res.status(201).send()
})

const PORT = 3000

app.listen(3000, () => {
    console.log(`Techhub's API running on port ${PORT}`)
})
