# SocialNetwork-API

#### Description:

Simple API functionality in NodeJS, the app mocks a social network functionality where the User, after the registration and log in is able to:
read, write, edit, delete and comment posts. The comments also can be updated or deleted.
The app uses MySQL database, the script to create the sample tables are located in the database folder.
The app does not have a defined front end (yet perhaps?) so to send the requests will need to use Postman or similar.

#### NPM Packages used:

- express
- mysql
- bcrypt
- crypto
- dotenv
- jsonwebtoken

#### How to run:

- Fork the repository;
- 'cd' into the folder;
- run 'npm i' to install the packages;
- use Postman to send the requests:
  Endpoints:
  - **/** Will return a 404;
  - **/login** send as POST request with 'username' and 'password' in the JSON request body;
  - **/register** send as POST request with 'username','password' and 'retypePassword' in the JSON request body;
  - **/write** send as POST request with 'author' and 'content' in the JSON request body (please note the user has to be registered or it will return an error);
  - **/delete** send as DELETE request with 'postId' as URL parameter referring to the post guid;
  - **/update** send as PATCH request with 'postId' as URL parameter and the new 'content' in the request body;
  - **/readOne** send as GET request with postId as URL parameter ;
  - **/comment/write** send as POST request with 'author', 'comment', and 'post' (referring to the post guid) in the request body;
  - **/comment/remove** send as DELETE request with 'commentId' in the request body;
  - **/comment/edit** send as PATCH request with 'comment', 'commentId' in the request body;

#### Info:

Author: [Gio86krt](https://github.com/Gio86krt) \
Date: 2022-10-04
