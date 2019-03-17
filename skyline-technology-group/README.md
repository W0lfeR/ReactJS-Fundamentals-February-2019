# Project Specification

**“Skyline Technology Group”** is a web application for a PC Store. 
The client side is a single page app, dynamically updating with **React**, using **JSX**, 
**React JS** and **Bootstrap**. The server is built on **Express JS** and it is using 
**Mongo Db** for storing the data. **Redux** is used as a state management library. 
Redux is a predictable state container for JavaScript apps. 
It helps you write applications that behave consistently, 
run in different environments (client, server, and native), 
and are easy to test. The application consists of users, computer products and orders. 
Each user can register, login and logout. 
 Admins can add, edit and delete computer entries and approve orders.

# Functionality 

##### •	User Login 
    - o Login in current application using email and password of already registered user. 
##### •	User Register 
    - o Register a new user by providing email, password and username. 
##### •	User Logout 
    - o Logouts from the application. 
##### •	Menu
    - o Add computer to the cart
##### •	Cart
    - o Users add computers to the cart
    - o Users have option to remove product from the cart or refresh the quantity to one
    - o Users have option to checkout or to continue shopping
##### •	My orders
    - o List user orders
##### •	Computer add 
    - o Admin route only
    - o Create a new computer entry and save it to the database
##### •	Computer edit 
    - o Admin route only
    - o Edit existing computer entry and save it to the database
##### •	Computer delete
    - o Admin route only
    - o Remove computer entry from the database
##### •	Pending orders 
    - o Admin route only
    - o View all pending orders
    - o Approve order

