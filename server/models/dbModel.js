const {Pool} = require('pg');


const PG_URI = 'postgres://postgres.vrauziozhvpdbzjavsam:Lyx9364715218%40@aws-0-us-west-1.pooler.supabase.com:6543/postgres';

//create pool here for connection
const pool = new Pool({
    connectionString: PG_URI,
})

module.exports = pool;