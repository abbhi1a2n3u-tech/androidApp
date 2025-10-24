import postgres from "postgres";

const connectionString = "postgresql://postgres:8535011326@db.kkymczgouhlhxbrpoqri.supabase.co:5432/postgres";

export const sql = postgres(connectionString, {
  ssl: {
    rejectUnauthorized: false,
  },
});