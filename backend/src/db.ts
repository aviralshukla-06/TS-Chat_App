import dotenv from "dotenv";
dotenv.config();
import { Client } from "pg";

const connectionStr = process.env.POSTGRESQL_URI;
// console.log(connectionStr);

if (!connectionStr) {
    throw new Error("PostgreSQL is not defined in environment variables");
}
export const pgClient = new Client({
    connectionString: connectionStr
});

pgClient.connect()
    .then(() => console.log("PostSql connected"))
    .catch(err => console.log("Connection err: ", err))
