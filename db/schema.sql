\c feelings_db

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS actions CASCADE;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR (10),
  -- email VARCHAR (30),
  pword VARCHAR (10)

);


CREATE TABLE actions
(
  post_id SERIAL PRIMARY KEY,
  post VARCHAR (1000),
  user_id INT REFERENCES users (id)
);


-- should i reference the images as well to the user
-- should i have a seperate post id with a serial primary key
-- or just keep it referencing to the post