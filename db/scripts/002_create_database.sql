/*  Script to create database tables */
SET search_path TO myschema,public,core;

/* ADMINS TABLE  */
CREATE TABLE core.sample_table(
  id SERIAL NOT NULL,
  value_1 VARCHAR(255) NOT NULL,
  value_2 VARCHAR(255) NOT NULL,
  value_3 VARCHAR(255) NOT NULL,
  value_4 VARCHAR(255) NOT NULL
);

ALTER TABLE core.sample_table
ADD CONSTRAINT PK_core_sample_table PRIMARY KEY (id);
