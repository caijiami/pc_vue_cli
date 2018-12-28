SET NAMES UTF8;
DROP DATABASE IF EXISTS gaea;
CREATE DATABASE gaea CHARSET=UTF8;
USE gaea;

/*
示例
CREATE TABLE cjm_hico(         表名：自己全名首字母_表名
    id INT,
    src VARCHAR(100)
);
INSERT INTO vm_hico VALUES
(1,'http://127.0.0.1:3000/img/index/logo.png');
*/
CREATE TABLE cjm_header(         
    id INT,
    src VARCHAR(100),
    href VARCHAR(100)
);
INSERT INTO cjm_header VALUES
(1,'http://127.0.0.1:3000/img/index/header/nav.png',''),
(2,'http://127.0.0.1:3000/img/index/header/gaea.png',''),
(3,'http://127.0.0.1:3000/img/index/header/nav_line.jpg','');