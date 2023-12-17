# Prueba Tecnica Stemy Energy
@Alvaro Gutierrez Hernandez

## Problema 1 - SQL

### Result
1. Devolver el número de Pokémon que ha capturado cada entrenador.
    ```SQL
    SELECT
        trainer.name,
        COUNT(trainer_pokedex.pokemon_id)
    FROM
        trainer
    JOIN
        trainer_pokedex ON trainer.id = trainer_pokedex.trainer_id
    GROUP BY
        trainer.id;
    ```

    ```md
    +-------------+-----------------------------------+
    | name        | COUNT(trainer_pokedex.pokemon_id) |
    +-------------+-----------------------------------+
    | Ash Ketchum |                                 2 |
    | Brock       |                                 2 |
    +-------------+-----------------------------------+
    ```

2. Devolver los pokémon de tipo `Electric` que haya capturado `Ash Ketchum`.Campos o columnas que debe devolver la consulta:
    - `id` de la tabla `pokemon`
    - `level` de la tabla `pokemon`
    - `name` de la tabla `pokemon_species`
    - `captured_at` de la tabla `trainer_pokedex`

    ```SQL
    SELECT
        pokemon.id AS 'ID POKEMON',
        pokemon.level AS 'LEVEL',
        pokemon_species.name AS 'NAME SPECIE',
        trainer_pokedex.captured_at AS 'TIME OF CAPTURE'
    FROM
        pokemon
    JOIN
        pokemon_species ON pokemon.pokemon_species_id = pokemon_species.id
    JOIN
        pokemon_species_type ON pokemon_species.id = pokemon_species_type.pokemon_species_id
    JOIN
        pokemon_type ON pokemon_species_type.pokemon_type = pokemon_type.type
    JOIN
        trainer_pokedex ON pokemon.id = trainer_pokedex.pokemon_id
    JOIN
        trainer ON trainer_pokedex.trainer_id = trainer.id
    WHERE
        trainer.name = 'Ash Ketchum' AND pokemon_type.type = 'Electric';
    ```
    
    ```md
    +------------+-------+-------------+---------------------+
    | ID POKEMON | LEVEL | NAME SPECIE | TIME OF CAPTURE     |
    +------------+-------+-------------+---------------------+
    |        101 |    20 | Pikachu     | 1997-04-01 19:00:00 |
    +------------+-------+-------------+---------------------+
    ```
    
3. Devolver último pokémon que haya capturado `Brock` . Campos o columnas que debe devolver la consulta:
    - `id` de la tabla `pokemon`
    - `level` de la tabla `pokemon`
    - `name` de la tabla `pokemon_species`
    - `captured_at` de la tabla `trainer_pokedex`

    ```SQL
    SELECT
        pokemon.id AS 'ID POKEMON',
        pokemon.level AS 'LEVEL',
        pokemon_species.name AS 'NAME SPECIE',
        trainer_pokedex.captured_at AS 'TIME OF CAPTURE'
    FROM
        pokemon
    JOIN
        pokemon_species ON pokemon.pokemon_species_id = pokemon_species.id
    JOIN
        trainer_pokedex ON pokemon.id = trainer_pokedex.pokemon_id
    JOIN
        trainer ON trainer_pokedex.trainer_id = trainer.id
    WHERE
        trainer.name = 'Brock'
    ORDER BY
        trainer_pokedex.captured_at DESC
    LIMIT 1;
    ```

    ```md
    +------------+-------+-------------+---------------------+
    | ID POKEMON | LEVEL | NAME SPECIE | TIME OF CAPTURE     |
    +------------+-------+-------------+---------------------+
    |        102 |     1 | Cubone      | 1997-04-02 15:31:00 |
    +------------+-------+-------------+---------------------+
    ```


### SQL Create Tables 

```SQL
DROP DATABASE StemyPoke;
CREATE DATABASE StemyPoke;
USE StemyPoke;

--- Create table Pokemon Type
CREATE TABLE pokemon_type (
    type VARCHAR(100) PRIMARY KEY
);

--- Create table Pokemon Species
CREATE TABLE pokemon_species (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

--- Create table Relationships Type and Species
CREATE TABLE pokemon_species_type (
    pokemon_species_id INT,
    pokemon_type VARCHAR(100),
    FOREIGN KEY (pokemon_species_id) REFERENCES pokemon_species(id),
    FOREIGN KEY (pokemon_type) REFERENCES pokemon_type(type)
);

--- Create table Pokedex
CREATE TABLE trainer_pokedex (
    pokemon_id INT,
    trainer_id INT,
    captured_at TIMESTAMP,
    PRIMARY KEY (pokemon_id, trainer_id, captured_at)
);

--- Create table Pokemons
CREATE TABLE pokemon (
    id INT PRIMARY KEY,
    pokemon_species_id INT,
    level INT,
    FOREIGN KEY (id) REFERENCES trainer_pokedex(pokemon_id),
    FOREIGN KEY (pokemon_species_id) REFERENCES pokemon_species(id)
);

--- Create table Trainers
CREATE TABLE trainer (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);
```

### SQL Insert Data

```SQL

--- Insertar registros en la tabla pokemon_type
INSERT INTO pokemon_type (type) VALUES
('Rock'),
('Ground'),
('Electric');

--- Insertar registros en la tabla pokemon_species
INSERT INTO pokemon_species (id, name) VALUES
(22, 'Onix'),
(54, 'Pikachu'),
(104, 'Cubone');

--- Insertar registros en la tabla pokemon_species_type
INSERT INTO pokemon_species_type (pokemon_species_id, pokemon_type) VALUES
(22, 'Rock'),
(22, 'Ground'),
(54, 'Electric'),
(104, 'Ground');

--- Insertar registros en la tabla trainer
INSERT INTO trainer (id, name) VALUES
(1, 'Ash Ketchum'),
(2, 'Brock');

--- Insertar registros en la tabla trainer_pokedex
INSERT INTO trainer_pokedex (pokemon_id, trainer_id, captured_at) VALUES
(100, 1, '1997-04-01 09:00:00'),
(101, 1, '1997-04-01 19:00:00'),
(101, 2, '1997-04-02 15:30:00'),
(102, 2, '1997-04-02 15:31:00');

---  Insertar registros en la tabla pokemon
INSERT INTO pokemon (id, pokemon_species_id, level) VALUES
(100, 22, 10),
(101, 54, 20),
(102, 104, 1);
```