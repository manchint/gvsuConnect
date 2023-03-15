-- DATA BASE
DROP SCHEMA `gvsuConnect`;
CREATE SCHEMA `gvsuConnect` ;

-- TABLES
drop table if exists `gvsuConnect`.users;
create table `gvsuConnect`.users (
	username varchar(10) primary key,
    fname varchar(20),
    lname varchar(20),
    email varchar(50),
    pass varchar(200),
    profile_pic varchar(20)
);

drop table if exists `gvsuConnect`.posts;
create table `gvsuConnect`.posts (
	post_Id int primary key auto_increment,
    post_msg varchar(500),
    username varchar(10),
    foreign key (username) references users(username)
);

drop table if exists `gvsuConnect`.marketplace;
create table `gvsuConnect`.marketplace (
	item_Id int primary  key auto_increment,
    username varchar(10),
    item_name varchar(50),
    item_desc varchar(200),
    foreign key (username) references users(username)
);

drop table if exists `gvsuConnect`.rides;
create table `gvsuConnect`.rides (
	ride_Id int primary key auto_increment,
    username varchar(10),
    ride_from varchar(10),
    ride_to varchar(10),
    ride_date date,
    foreign key (username) references users(username)
);

drop table if exists `gvsuConnect`.accommodation;
create table `gvsuConnect`.accommodation (
	acc_ID int primary key auto_increment,
    username varchar(10),
    details varchar(20),
    location varchar(50),
    price int,
    foreign key (username) references users(username)
);

drop table if exists `gvsuConnect`.place_to_visit;
create table `gvsuConnect`.place_to_visit (
	p_Id int primary key auto_increment,
    username varchar(10),
    details varchar(20),
    location varchar(50),
    travel_info varchar(100),
    foreign key (username) references users(username)
);

drop table if exists `gvsuConnect`.links;
create table `gvsuConnect`.links (
	URL varchar(100) primary key,
    link_msg varchar(20)
);

drop table if exists `gvsuConnect`.user_groups;
create table `gvsuConnect`.user_groups (
	group_Id int primary key auto_increment,
    name varchar(50),
    group_desc varchar(100)
);

drop table if exists `gvsuConnect`.group_members;
create table `gvsuConnect`.group_members (
	group_Id int,
    username varchar(10),
	foreign key (group_Id) references user_groups(group_Id),
	foreign key (username) references users(username)
);

drop table if exists `gvsuConnect`.professor;
create table `gvsuConnect`.professor (
	email varchar(35) primary key,
    dept varchar(25),
    phone varchar(17),
    fax varchar(17),
    office varchar(35)
);

drop table if exists `gvsuConnect`.class;
create table `gvsuConnect`.class (
	course_number varchar(8),
    email varchar(35),
    semester varchar(20),
    class_year varchar(4),
    class_info varchar(30),
	foreign key (email) references professor(email),
    PRIMARY KEY (course_number, semester, class_year)
);

drop table if exists `gvsuConnect`.messages;
create table `gvsuConnect`.messages (
	from_user varchar(10),
    to_user varchar(10),
    msg varchar(30),
	foreign key (from_user) references users(username),
	foreign key (to_user) references users(username)
);

-- ONLY ISSUES FOR NODE JS
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Teju@2411';

-- flush privileges;