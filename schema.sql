--------------
-- TABLE 1 --
--------------

CREATE TABLE happy_table (
  id VARCHAR PRIMARY KEY,  
  year INT NOT NULL,
  country VARCHAR NOT NULL,
  logged_GDP_per_capita DEC NOT NULL,
  support DEC NOT NULL,
  life_exp DEC NOT NULL,
  freedom DEC NOT NULL,
  generosity DEC NOT NULL,
  corruption DEC NOT NULL,
  score DEC NOT NULL,
);