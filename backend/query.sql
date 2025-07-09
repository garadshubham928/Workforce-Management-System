CREATE DATABASE samplesuperstore;


Use samplesuperstore;


CREATE TABLE userinfo (
 MobileNumber VARCHAR (10),
 Email VARCHAR(50),
 PassWord VARCHAR (20)
 );


USE samplesuperstore;

CREATE TABLE gallery (
 Username VARCHAR (25),
 Email VARCHAR(50),
 Country VARCHAR (20),
 Position VARCHAR (20),
 Months INTEGER,
 Year INTEGER,
 Manpower INTEGER,
 Type BOOLEAN,
 Createddate DATE
 );
 
INSERT INTO gallery (Username, Email, Country, Position, Months, Year, Manpower, Type, Createddate) VALUES
('john_doe', 'john.doe@email.com', 'USA', 'Manager', 12, 2023, 25, 1, '2023-01-15')
