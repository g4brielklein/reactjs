import pg from 'pg'
import 'dotenv/config'

const { Client } = pg

export async function query(query) {
    const client = new Client({
        user: process.env.PG_USER,
        password: process.env.PG_PW,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DB,
        ssl: process.env.PG_SSL,
    })
    await client.connect()

    const res = await client.query(query)
    
    await client.end()

    return res.rows
}
