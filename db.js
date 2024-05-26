const sql = require("mssql");

const config = {
  user: "ptt-admin",
  password: "PT12345!",
  server: "ptt-test-server.database.windows.net", // You can use 'localhost\\instance' to connect to named instance
  database: "pttdatabase",
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // Change to true for local dev / self-signed certs
  },
};

let pool;

async function getConnection() {
  if (!pool) {
    try {
      console.log("Attempting to connect to the database...");
      pool = await sql.connect(config);
      console.log("SQL Database Connection is successful");
    } catch (err) {
      console.error("SQL Database Connection Failed!", err);
      throw err;
    }
  }
  return pool;
}

module.exports = {
  sql,
  getConnection,
};
