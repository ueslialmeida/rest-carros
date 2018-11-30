create database restcarros;

use restcarros;

create table carro(
id int not null auto_increment primary key,
modelo varchar(30) not null,
ano int,
cor varchar(30) not null);