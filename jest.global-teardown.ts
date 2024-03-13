import pg from 'pg'

export default async () => {
  console.info('\nDeleting schema...')

  console.log(process.env.DATABASE_URL)

  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
  })

  await client.connect()
  await client.query(`DROP SCHEMA IF EXISTS "${process.env.DB_SCHEMA}" CASCADE`)
  await client.end()

  console.info('Deleted schema.\n')
}
