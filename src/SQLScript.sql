-- DATA BASE
DROP SCHEMA `gvsuConnect`;
CREATE SCHEMA `gvsuConnect` ;

-- TABLES
drop table if exists users;
create table users (
	username varchar(10) primary key,
    fname varchar(20),
    lname varchar(20),
    email varchar(50),
    pass varchar(200),
    profile_pic Binary
);

drop table if exists posts;
create table posts (
	post_Id int primary key auto_increment,
    post_msg varchar(500)
);

drop table if exists marketplace;
create table marketplace (
	item_Id int primary  key auto_increment,
    username varchar(10),
    item_name varchar(50),
    item_desc varchar(200),
    foreign key (username) references users(username)
);

drop table if exists rides;
create table rides (
	ride_Id int primary key auto_increment,
    username varchar(10),
    ride_from varchar(10),
    ride_to varchar(10),
    ride_date date,
    foreign key (username) references users(username)
);

drop table if exists accommodation;
create table accommodation (
	acc_ID int primary key auto_increment,
    username varchar(10),
    details varchar(20),
    location varchar(50),
    price int,
    foreign key (username) references users(username)
);

drop table if exists place_to_visit;
create table place_to_visit (
	p_Id int primary key auto_increment,
    username varchar(10),
    details varchar(20),
    location varchar(50),
    travel_info varchar(100),
    foreign key (username) references users(username)
);

drop table if exists links;
create table links (
	URL varchar(100) primary key,
    link_msg varchar(20)
);

drop table if exists user_groups;
create table user_groups (
	group_Id int primary key auto_increment,
    name varchar(50),
    group_desc varchar(100)
);

drop table if exists group_members;
create table group_members (
	group_Id int,
    username varchar(10),
	foreign key (group_Id) references user_groups(group_Id),
	foreign key (username) references users(username)
);

drop table if exists professor;
create table professor (
	email varchar(35) primary key,
    dept varchar(25),
    phone varchar(17),
    fax varchar(17),
    office varchar(35)
);

drop table if exists class;
create table class (
	course_number varchar(8),
    email varchar(35),
    semester varchar(20),
    class_year varchar(4),
    class_info varchar(30),
	foreign key (email) references professor(email),
    PRIMARY KEY (course_number, semester, class_year)
)