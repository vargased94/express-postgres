CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES ('Alice', 'alice@gmail.com', '2021-01-01 00:00:00'), ('Bob', 'bob@gmail.com', '2021-01-01 00:00:00'), ('Charlie', 'charlie@gmail', '2021-01-01 00:00:00');

