import express from 'express'
import { randomUUID } from 'node:crypto'
import { query } from './database/connection.js'
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.get('/posts', async (req, res) => {
    const posts = await query(`
        SELECT posts.*,
            json_build_object (
                'id', users.id,
                'name', users.name,
                'role', users.role,
                'profileImageUrl', users."profileImageUrl"
            ) AS "user",
            COALESCE(
                json_agg(
                    json_build_object (
                        'id', comments.id,
                        'content', comments.content,
                        'authorId', comments."authorId",
                        'postId', comments."postId",
                        'createdAt', comments."createdAt",
                        'likes', comments.likes,
                        'user', json_build_object (
                            'id', comment_author.id,
                            'name', comment_author.name,
                            'profileImageUrl', comment_author."profileImageUrl"
                        )
                    )
                ) FILTER (WHERE comments.id IS NOT NULL),
                '[]'::json
            ) AS "comments"
        FROM posts
        INNER JOIN users ON users.id = posts."authorId"
        LEFT JOIN comments ON comments."postId" = posts.id
        LEFT JOIN users comment_author ON comment_author.id = comments."authorId"
        GROUP BY posts.id, users.id;
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

app.post('/:postId/comment', async (req, res) => {
    const { postId } = req.params;
    const { content, authorId } = req.body;
    const id = randomUUID()
    const createdAt = new Date().toISOString();

    const postQuery = {
        text: 'SELECT id FROM posts WHERE id = $1;',
        values: [postId],
    }

    const post = await query(postQuery)

    if (!post.length) {
        res.status(404).send(`Post with id ${postId} not found`)
    }

    const creationQuery = {
        text: `INSERT INTO comments (id, content, "authorId", "postId", "createdAt") VALUES ($1, $2, $3, $4, $5);`,
        values: [id, content, authorId, postId, createdAt]
    }

    await query(creationQuery)

    res.status(201).send()
})

app.patch('/:postId/:commentId/likes', async (req, res) => {
    const { postId, commentId } = req.params;

    const queryPost = {
        text: `SELECT id from posts WHERE id = $1;`,
        values: [postId],
    }

    const post = await query(queryPost)

    if (!post.length) {
        return res.status(404).send(`Post with id ${postId} not found`)
    }

    const queryComment = {
        text: `SELECT id from comments WHERE id = $1;`,
        values: [commentId],
    }

    const comment = await query(queryComment)

    if (!comment.length) {
        return res.status(404).send(`Comment with id ${commentId} not found`)
    }

    const queryData = {
        text: `UPDATE comments SET likes = likes + 1 WHERE "postId" = $1 AND id = $2;`,
        values: [postId, commentId]
    }

    await query(queryData)

    res.status(204).send()
})

const PORT = 3000

app.listen(3000, () => {
    console.log(`Techhub's API running on port ${PORT}`)
})
