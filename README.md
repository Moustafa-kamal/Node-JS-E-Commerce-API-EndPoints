# Examination-System-Using-JavaScript
An automated online examination system with database support, facilitating exam generation, management, and result processing.
# Description
The Online Examination System is a web-based platform designed to facilitate online exams. It includes user registration, sign-in, and exam-taking functionalities, with timed exams, random question display, and answer submission features.

# Features
Registration: Users can register with their first name, last name, email address, and password. Password validation ensures a minimum length of 8 characters and matching passwords.
Sign-in: Registered users can sign in using their email and password.
Exam Page: The exam page displays questions randomly. Each question includes options for answers, navigation buttons to move between questions, a timer indicator, and a submit button to finalize the exam.
Timeout Handling: If the exam time expires before submission, a timeout page is displayed with a message for the user.
Grading: If the exam is submitted before the time ends, a grades page is displayed with a message for the user.
Marking Questions: Users can mark questions for review, which are then listed separately for easy reference.
Question and Answer Objects: Utilizes function constructors for question and answer objects to manage exam content efficiently.
Technology Stack
Programming Language: JavaScript (Frontend), Java (Backend)
Framework: Spring Boot (Backend)
Database: MySQL
Frontend: HTML, CSS, JavaScript
Version Control: Git
IDE: IntelliJ IDEA
# Usage
Registration: Users register with their personal details on the registration page.
Sign-in: Registered users sign in using their email and password on the sign-in page.
Exam Page: Users are directed to the exam page upon successful sign-in. They can navigate through questions, mark them for review, and submit answers within the allotted time.
Grading/Timeout Page: Depending on submission timing, users are redirected to either the grades page or the timeout page.

# E-Commerce API Endpoints Project

## Overview
Welcome to the E-Commerce API Endpoints Project! This project provides a set of API endpoints that support various functionalities of an e-commerce platform. By working with these endpoints, you will gain hands-on experience in building and understanding the workings of a modern e-commerce system.

## Project Goals
This project is designed to offer a practical learning experience in web development concepts, HTTP protocols, RESTful APIs, and server-side programming. By utilizing the provided endpoints, you will gain insights into building scalable and robust e-commerce solutions.

## Authentication Endpoints
- `/api/v1/register` (POST): Register a new user.
- `/api/v1/login` (POST): Authenticate a user and generate a token.

## User Profile Endpoints
- `/api/v1/profile` (GET): Get the current user's profile.
- `/api/v1/profile` (PATCH): Update the current user's profile.

## Product Endpoints
- `/api/v1/products` (GET): Get a list of products.
- `/api/v1/products/:id` (GET): Get details of a specific product.
- `/api/v1/products` (POST): Create a new product (admin only).
- `/api/v1/products/:id` (PATCH): Update details of a product (admin only).
- `/api/v1/products/:id` (DELETE): Delete a product (admin only).

## Shopping Cart Endpoints
- `/api/v1/cart` (GET): Get the current user's shopping cart.
- `/api/v1/cart/add` (POST): Add a product to the shopping cart.
- `/api/v1/cart/update/:productId` (PATCH): Update a product in the shopping cart.
- `/api/v1/cart/remove/:productId` (DELETE): Remove a product from the shopping cart.
- `/api/v1/cart/clear` (DELETE): Clear the entire shopping cart.

## Order Endpoints
- `/api/v1/orders` (GET): Get a list of orders (admin only).
- `/api/v1/orders/:id` (GET): Get details of a specific order.
- `/api/v1/orders` (POST): Place a new order.
- `/api/v1/orders/:id/cancel` (PATCH): Cancel an existing order.

## Payment Endpoints
- `/api/v1/payment/checkout` (POST): Process payment for an order.
- `/api/v1/payment/result` (POST): Receive result notifications for payment events (e.g., payment succeeded, failed).

## Search and Filter Endpoints (Bonus)
- `/api/v1/search` (GET): Search for products based on certain criteria (e.g., name, category).

## Reviews and Ratings Endpoints (Bonus)
- `/api/v1/products/:id/reviews` (GET): Get reviews for a specific product.
- `/api/v1/products/:id/reviews` (POST): Add a new review for a product.
- `/api/v1/products/:id/ratings` (POST): Add a rating for a product.

## Category Endpoints
- `/api/v1/categories` (GET): Get a list of product categories.
- `/api/v1/categories/:id/products` (GET): Get products belonging to a specific category.

## Admin Endpoints
- `/api/v1/admin/users` (GET): Get a list of all users (admin only).
- `/api/v1/admin/orders` (GET): Get a list of all orders (admin only).
- `/api/v1/admin/products` (GET): Get a list of all products (admin only).
- `/api/v1/admin/categories` (GET): Get a list of all categories (admin only).

