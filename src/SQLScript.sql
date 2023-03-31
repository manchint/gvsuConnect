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
    ride_from varchar(10),
    ride_to varchar(10),
    ride_date date,
    details varchar(20),
    location varchar(50),
    price int,
    category varchar(10),
    foreign key (username) references users(username)
);

create table `gvsuConnect`.images (
	image_id int primary key auto_increment,
    name varchar(30) NOT NULL,
    post_id int,
    foreign key (post_id) references posts(post_Id)
);

-- TO BE ADDED
drop table if exists `gvsuConnect`.place_to_visit;
create table `gvsuConnect`.place_to_visit (
	p_Id int primary key auto_increment,
    location varchar(50),
    travel_info varchar(100),
    imagesLinks varchar(500)
);

drop table if exists `gvsuConnect`.messages;
create table `gvsuConnect`.messages (
	from_user varchar(10),
    to_user varchar(10),
    msg varchar(30),
    ts DATETIME default CURRENT_TIMESTAMP,
	foreign key (from_user) references users(username),
	foreign key (to_user) references users(username)
);

drop table if exists `gvsuConnect`.comments;
create table `gvsuConnect`.comments (
	post_id int,
    msg varchar(30),
    comment_user varchar(10),
    ts DATETIME default CURRENT_TIMESTAMP,
    foreign key (comment_user) references users(username),
    foreign key (post_id) references posts(post_Id)
);

-- ONLY ISSUES FOR NODE JS
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Teju@2411';

-- flush privileges;