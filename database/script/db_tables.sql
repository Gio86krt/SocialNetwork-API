create database if not exists `socialnetwork`;
use `socialnetwork`;

create table if not exists `users` (
    `guid` varchar(255) primary key unique not null,
    `username` varchar(255),
    `password` varchar(255),
    `token` varchar(255)
);


create table if not exists `posts` (
    `guid` varchar(255) unique not null,
    `author` varchar(255),
    `content` varchar(600),
    `date` DATETIME DEFAULT CURRENT_TIMESTAMP
);


create table if not exists `comments` (
    `guid` varchar(255) unique not null,
    `author` varchar(255),
    `content` varchar(400),
    `post` varchar(255),
    `date` DATETIME DEFAULT CURRENT_TIMESTAMP
)