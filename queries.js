const Pool = require('pg').Pool
const pool = new Pool({
    user: 'textsdb',
    host: 'textsdb',
    database: 'textsdb',
    password: 'textsdb',
    port: 5432,
})


const getText = (request, response) => {
   pool.query('SELECT * FROM texts ORDER BY random() LIMIT 1', (error, results) => {
//        pool.query('SELECT 99 as id, "HARD-CODED" as pictureText FROM texts LIMIT 1', (error, results) => {
            if (error) {
            throw error
        }
        response.status(200).json(results.rows[0])
    })
}

module.exports = {
    getText,
}