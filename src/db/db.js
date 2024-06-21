import Database from "better-sqlite3";

const db = new Database('cativa-fidelidade.db');

const initDb = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS agencies (
      id INTEGER PRIMARY KEY,
      agency STRING NOT NULL,
      email STRING NOT NULL UNIQUE,
      phone STRING NOT NULL UNIQUE
    )
  `

  db.exec(query)
}

export { db, initDb}