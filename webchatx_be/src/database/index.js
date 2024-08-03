import mysql from "mysql2/promise";

let dbConnPool = null;

const initDBConnectPool = () => {
  dbConnPool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    database: "webchatx",
    password: "123456",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // 最大空闲连接数，默认等于 `connectionLimit`
    idleTimeout: 60000, // 空闲连接超时，以毫秒为单位，默认值为 60000 ms
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  });
};

export { initDBConnectPool, dbConnPool };
