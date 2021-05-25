--------------
-- TABLE 1 --
--------------

CREATE TABLE happy_table (
  id VARCHAR PRIMARY KEY,  
  title VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  start_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  country VARCHAR NOT NULL,
  coords VARCHAR NOT NULL,
  rank INT NOT NULL,
  venue_name VARCHAR NOT NULL,
  formatted_address VARCHAR NOT NULL
);