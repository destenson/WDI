DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS alliance;

CREATE TABLE characters (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	age INTEGER,
	species VARCHAR(255),
	force BOOLEAN
)

CREATE TABLE alliance (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	members INTEGER,
	evil BOOLEAN
)