const { Pool } = require('pg');


const uri = 'postgres://ulopvigp:PCz1gn3OrEaapwbb3coRQj6yfp-VYiAp@salt.db.elephantsql.com:5432/ulopvigp';

const pool = new Pool({
    connectionString: uri
});



module.exports = {
    query: (textQuery, value, callback) => {
        console.log('quering db: ', textQuery, 'Value: ', value);
        return pool.query(textQuery, value, callback);
    }
}