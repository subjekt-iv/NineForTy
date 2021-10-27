CREATE DATABASE nineForty;
USE nineForty;


CREATE table users(
userID int NOT null AUTO_INCREMENT,
firstName varchar(50) NOT NULL,
lastName varchar(50) NOT NULL,
userName varchar(50) NOT NULL,
email varchar(50) NOT NULL,
password varchar(100) NOT NULL,
avatar varchar(50) NOT NULL,
PRIMARY KEY (userID)
);

CREATE TABLE `nfts` (
  `nftID` int(11) NOT NULL AUTO_INCREMENT,
  `price` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `keyword` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`nftID`),
  KEY `userID` (`userID`),
  CONSTRAINT `nfts_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

CREATE table carrito(
    nftID int NOT NULL,
    userID int NOT NULL,
    FOREIGN KEY (nftID) REFERENCES nfts(nftID),
    FOREIGN KEY (userID) REFERENCES users(userID)
);


INSERT INTO users(userID,firstName,lastName,userName,email,password,avatar)
VALUES (1,'Sammy','Goldbourn','Sammy_Goldbourn','sgoldbourn0@gravatar.com','ttCexikOHTAr','../../img/avatars/1.jpg'),(2,'Jada','Lamburn','Jada_Lamburn','jlamburn1@nbcnews.com','Izh84TS','../../img/avatars/2.jpg'),(3,'Dulcy','Klimkovich','Dulcy_Klimkovich','dklimkovich2@noaa.gov','GPaJfgviZej','../../img/avatars/3.jpg'),(4,'Ariadne','Yokley','Ariadne_Yokley','ayokley3@weebly.com','lAjakHASFrKp','../../img/avatars/4.jpg'),(5,'Jeremiah','Bunt','Jeremiah_Bunt','jbunt4@yandex.ru','9QHbOo','../../img/avatars/5.jpg'),(6,'Marten','Frizell','Marten_Frizell','mfrizell5@bloomberg.com','4R0M9pFRAueA','../../img/avatars/6.jpg'),(7,'Cindelyn','Cahalin','Cindelyn_Cahalin','ccahalin6@google.es','8wgC5xKTWigK','../../img/avatars/7.jpg'),(8,'Killie','Maciunas','Killie_Maciunas','kmaciunas7@xinhuanet.com','zNMfGbCvc','../../img/avatars/8.jpg'),(9,'Lisbeth','Kornalik','Lisbeth_Kornalik','lkornalik8@wikia.com','o1koPdrx0f7L','../../img/avatars/9.jpg'),(10,'Jilli','Philpot','Jilli_Philpot','jphilpot9@hao123.com','RLIAHlOA','../../img/avatars/10.jpg');


INSERT INTO nineforty.nfts (nftID, price, userID, name, keyword, description, createdAt, updatedAt, image) VALUES(1, 1, 1, 'Sisters of Sorrow', '2D', 'Dark smoke twins on digital render of a photo', '2021-10-27 20:22:16', '2021-10-27 20:35:09', 'SISTERS_OF_SORROW.jpeg');
INSERT INTO nineforty.nfts (nftID, price, userID, name, keyword, description, createdAt, updatedAt, image) VALUES(2, 3, 2, 'Me Degusto', '3D', 'Colorful and bright design depicting body parts and various objects', '2021-10-27 20:23:04', '2021-10-27 20:38:33', 'Medegusto (1).png');
INSERT INTO nineforty.nfts (nftID, price, userID, name, keyword, description, createdAt, updatedAt, image) VALUES(3, 1, 1, 'Generative', '2D', 'Procedurally generated lines render on a green background', '2021-10-27 20:23:49', '2021-10-27 20:38:33', '2CBDFE21-7978-4C2F-980D-9A2E70F9D10C.jpeg');
INSERT INTO nineforty.nfts (nftID, price, userID, name, keyword, description, createdAt, updatedAt, image) VALUES(4, 3, 3, 'Unidentified Objekt', 'ai', 'UFO on a snowy day', '2021-10-27 19:52:09', '2021-10-27 20:38:33', 'unidentified Objekt.jpeg');
INSERT INTO nineforty.nfts (nftID, price, userID, name, keyword, description, createdAt, updatedAt, image) VALUES(5, 1, 7, 'Candlelight & Fire', 'ai', 'The dark side of AI generated images', '2021-10-27 19:52:09', '2021-10-27 20:39:44', 'Candlelight & Fire.png');
INSERT INTO nineforty.nfts (nftID, price, userID, name, keyword, description, createdAt, updatedAt, image) VALUES(6, 0, 1, 'GUM', 'c4d', 'Render of a car filled with pink goo', '2021-10-27 19:52:09', '2021-10-27 20:39:44', 'GUM.jpeg');
INSERT INTO nineforty.nfts (nftID, price, userID, name, keyword, description, createdAt, updatedAt, image) VALUES(7, 10, 1, 'Arriving Home', '3D', 'The breakthrough of time and space', '2021-10-27 19:52:09', '2021-10-27 20:39:44', 'Arriving Home.jpeg');
INSERT INTO nineforty.nfts (nftID, price, userID, name, keyword, description, createdAt, updatedAt, image) VALUES(8, 1, 5, 'Olympus Falls', 'abstract', 'AI generated data cloud render', '2021-10-27 19:52:09', '2021-10-27 20:39:44', 'Olympus Falls.jpg');
INSERT INTO nineforty.nfts (nftID, price, userID, name, keyword, description, createdAt, updatedAt, image) VALUES(9, 1, 8, 'C-Thru', 'Distortions', 'Losing perception of reality on a photo', '2021-10-27 19:52:09', '2021-10-27 20:39:44', 'C-thru.jpeg');
INSERT INTO nineforty.nfts (nftID, price, userID, name, keyword, description, createdAt, updatedAt, image) VALUES(10, 2, 10, 'EGO', 'crypto', 'Thinking about many things', '2021-10-27 19:52:09', '2021-10-27 20:39:44', 'EGO.jpeg');

INSERT INTO carrito (nftID,userID)
values (1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(3,1),(3,2),(3,3),(5,5);


