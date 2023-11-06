
DROP DATABASE IF EXISTS pair_prog_db;
CREATE DATABASE pair_prog_db;

\c pair_prog_db;

CREATE TABLE ids (
 key SERIAL PRIMARY KEY,
 alias TEXT NOT NULL,
 lastname TEXT NOT NULL,
 dob DATE NOT NULL,
 adult BOOLEAN NOT NULL
);
