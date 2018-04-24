

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS actions CASCADE;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username TEXT,
  -- email VARCHAR (30),
  pword VARCHAR (255)
);



CREATE TABLE actions
(
  post_id SERIAL PRIMARY KEY,
  post TEXT,
  user_id INT REFERENCES users (id)
);



-- so userid is referencing the id in the users table


