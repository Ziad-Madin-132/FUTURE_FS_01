const oracledb = require('oracledb');

// مسار مكتبات Instant Client
oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_23_0' });

const dbConfig = {
    user: 'system',      // مثال: "system"
    password: '12345',
    connectString: 'localhost/XE'
};

async function executeQuery(query, params = []) {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(query, params, { autoCommit: true });
        return result;
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) await connection.close();
    }
}

module.exports = { executeQuery };