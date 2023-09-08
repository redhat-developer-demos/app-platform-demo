const Pool = require('pg').Pool
const pool = new Pool({
    user: 'textsdb',
    host: 'textsdb',
    database: 'textsdb',
    password: 'textsdb',
    port: 5432,
})


const getText = (request, response) => {
    console.log(`Reading from database...`)
    var hardCodedResults = "SELECT id,pictureText FROM (VALUES ('hard-coded-msg', 99)) AS texts(pictureText, id);"

    //pool.query('SELECT * FROM texts ORDER BY random() LIMIT 1', (error, results) => {
    pool.query(hardCodedResults, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0])
    })
}

module.exports = {
    getText,
}