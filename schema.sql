--------------
-- TABLE 1 --
--------------

CREATE TABLE happy_table_m2 (
  id INT PRIMARY KEY,  
  year INT NOT NULL,
  country VARCHAR NOT NULL,
  logged_gdp_per_capita DEC NOT NULL,
  support DEC NOT NULL,
  life_exp DEC NOT NULL,
  freedom DEC NOT NULL,
  generosity DEC NOT NULL,
  corruption DEC NOT NULL,
  y_actual DEC NOT NULL,
  y_predicted DEC NOT NULL
);