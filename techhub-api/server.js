import express from 'express'
import { randomUUID } from 'node:crypto'
import { query } from './database/connection.js'
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.get('/posts', async (req, res) => {
    const posts = await query(
        `SELECT posts.*,
            json_build_object (
                'id', users.id,
                'name', users.name,
                'role', users.role,
                'profileImageUrl', users.profileImageUrl
            ) AS "user"
        FROM posts
        INNER JOIN users ON users.id = posts."authorId";
    `)

    res.send(posts)
})

app.post('/post', async (req, res) => {
    const { content } = req.body;

    const id = randomUUID()
    const createdAt = new Date().toISOString();

    const queryData = {
        text: `INSERT INTO posts (id, content, "createdAt", "authorId") VALUES ($1, $2, $3, '1')`,
        values: [id, content, createdAt],
    }

    await query(queryData);

    res.status(201).send()
})

const PORT = 3000

app.listen(3000, () => {
    console.log(`Techhub's API running on port ${PORT}`)
})
