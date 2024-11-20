# Invoice Management System

A Invoice Management System designed to streamline document processing, extraction, and management. This application supports the upload of PDF, image, and Excel files, extracts relevant information using the Gemini API. It provides a responsive React-based UI and uses Redux Toolkit for state management.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

### Backend Features
- File Upload (PDF, Images, Excel)
- Data extraction using [Gemini API](https://gemini-docs.com/)

### Frontend Features
- User-friendly interface built with React
- State management using Redux Toolkit
- Data fetching and caching with TanStack Query
- Responsive Design for mobile and desktop views

---

## Tech Stack

### Backend
- **Node.js**: Server-side runtime
- **Express**: Backend framework
- **Multer**: Middleware for handling file uploads
- **Axios**: HTTP client for API integration
- **Gemini API**: Document extraction service


### Frontend
- **React**: Frontend library
- **Redux Toolkit**: State management
- **TanStack Query**: Data fetching and caching
- **CSS**: Styling


 ### Setup Instructions
  - Prerequisites
  - Node.js and npm installed
  - Gemini API key (obtain from Gemini)
  - Backend Setup
  - Navigate to the backend folder:
    `cd server`

- Install dependencies:
    `npm install`
- Create a .env file in the backend directory and add the following:

 `PORT=5000
 GEMINI_API_KEY=your_gemini_api_key`


- Start the server:
    `npm start`

- Install dependencies:

  `npm install`


- Start the React development server:

  `npm start`

- File Upload and Extraction
- Server API (http://localhost:5000/api/process-file)

- Accepts file uploads (PDF, image, Excel)
- Extracts data using Gemini API

- Get All Invoices

## Screenshots

- **Dashboard**:  
  ![Dashboard](public/Screenshot (289).png)

- **Upload File**:  
  ![Upload File](public/Screenshot(290).png)

- **Invoice List**:  
  ![Invoice List](public/Screenshot(291).png)

- **Invoice List**:  
  ![Invoice List](public/Screenshot(292).png)  


## Demo Video

Uploading an Excel file? Watch the demo video:

[Watch Demo Video](public/Dmovideo.mp4)


Contact
For any questions or feedback, feel free to reach out:

GitHub:

Link:







