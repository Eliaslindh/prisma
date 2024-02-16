import serverlessMysql from "serverless-mysql";

export const db = serverlessMysql({
    config: {
        host: 'localhost',
        password: 'password',
        user: 'root',
        database: 'db',
        port: 3306
    }
})