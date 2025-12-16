import "dotenv/config";
import sql from "mssql";

const config: sql.config = {
  server: process.env.DB_SERVER || "",
  database: process.env.DB_NAME || "genara",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  port: parseInt(process.env.DB_PORT || "1433"),
  options: {
    encrypt: true,
    trustServerCertificate: false,
    enableArithAbort: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

let pool: sql.ConnectionPool | null = null;

export async function getPool(): Promise<sql.ConnectionPool> {
  if (!pool) {
    pool = await sql.connect(config);
    console.log("Connected to Azure SQL Database");
  }
  return pool;
}

export async function query<T>(queryString: string, params?: Record<string, any>): Promise<T[]> {
  const pool = await getPool();
  const request = pool.request();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      request.input(key, value);
    });
  }
  const result = await request.query(queryString);
  return result.recordset as T[];
}

export async function execute(queryString: string, params?: Record<string, any>): Promise<sql.IResult<any>> {
  const pool = await getPool();
  const request = pool.request();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      request.input(key, value);
    });
  }
  return request.query(queryString);
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.close();
    pool = null;
  }
}

export { sql };
