-- schema.sql
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name TEXT,
  birthday DATE,
  salary INTEGER
);
