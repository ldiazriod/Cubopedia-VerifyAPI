# Cubopedia-VerifyAPI

This is a simple email verification service built with TypeScript, Node.js, and the Express framework for the Cubopedia project.

![nodeVersion](https://img.shields.io/badge/node-%3E%3D%20v18.12.1-green)
![npmVersion](https://img.shields.io/badge/npm-%3E%3D%209.4.2-blue)

## Getting Started

First of all, you will need Node.js and npm installed on your machine.

After cloning the project, install all required packages by running the following command:

`npm install`

Create a new file called ".env" and use the file [.env.sample](.env.sample) as a guide.

Finally you can run the service by runing the following command:

`npm start`

The service will start at **<http://locahost:PORT>**

PORT is 4001 by default. To change this value, add PORT=portNumber inside .env file.

## API Endpoints

The API has two endpoints:

### /

**Method:** GET

**Request params**: None

**Request Body:** None

**Response:** Ok

### /user/verify/:id/:token

**Method:** GET

**Request params**:

- id: MongoDB user ID
- Token: Verification token sended to the user.

**Request Body:** None

**Response:** Redirection to Frontend page.
