import pg from 'pg'

const pool = new pg.Pool({
	host: process.env.PGHOST,
	port: process.env.PGPORT,
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	database: process.env.PGDATABASE
})

export default pool