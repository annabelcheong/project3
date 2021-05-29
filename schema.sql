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


year	logged_GDP_per_capita	support	life_exp	freedom	generosity	corruption

--------------
-- TABLE 2 --
-- PURPOSE --
-- Overall: To allow user to predict happiness score --
-- Immediate: To allow X test values to be scaled along with the user input X values
--------------

CREATE TABLE X_test_new_index_table (
  year DEC NOT NULL,
  logged_GDP_per_capita DEC NOT NULL,
  support DEC NOT NULL,
  life_exp DEC NOT NULL,
  freedom DEC NOT NULL,
  generosity DEC NOT NULL,
  corruption DEC NOT NULL
);
