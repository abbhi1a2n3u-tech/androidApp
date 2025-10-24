import postgres from "postgres";

const connectionString = "postgresql://postgres:8535011326@db.kkymczgouhlhxbrpoqri.supabase.co:5432/postgres";

export const sql = postgres( connectionString ,{
  host: "db.kkymczgouhlhxbrpoqri.supabase.co",
  port: 5432,
  username: "postgres",
  password: "8535011326",
  database: "postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});
