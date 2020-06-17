create database Course
go
use Course
go
create table menu 
(
	id int primary key, 
	name nvarchar(50),
	link nvarchar(MAX),
	meta nvarchar(50),
	hide bit,
	[order] int, 
	datebegin smalldatetime
)

create table services 
(
	id int primary key, 
	name nvarchar(50),
	[description] nvarchar(max),
	link nvarchar(max), 
	detail ntext, 
	meta nvarchar(50),
	hide bit,
	[order] int, 
	datebegin smalldatetime

)

create table teachers 
(
	id int primary key,
	name nvarchar(50),
	img nvarchar(30),
	[description] nvarchar(max),
	link nvarchar(max),
	meta nvarchar(50),
	hide bit,
	[order] int, 
	datebegin smalldatetime
)
create table gallery
(
	id int primary key, 
	name nvarchar(50),
	img nvarchar(30),
	[description] nvarchar(max),
	link nvarchar(max), 
	detail ntext, 
	meta nvarchar(50),
	hide bit,
	[order] int, 
	datebegin smalldatetime
)

