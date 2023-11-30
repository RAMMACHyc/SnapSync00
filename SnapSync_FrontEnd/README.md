# Project README

## Introduction

Welcome to our project! This application focuses on the backend and frontend aspects of a social media platform where users can create, retrieve, delete, and appreciate posts. Each post consists of a title, a message, a creator, an image (in base64 format), and tags. Tags are stored as an array of strings and can be multiple.

The backend utilizes **mongoose** as the Object Data Modeling (ODM) tool for database management, with MongoDB Atlas serving as the database service.

### Components Overview

#### Form Component
This component handles requests to the backend for creating a new post. It ensures efficient post creation by managing user input effectively.

#### Posts Component
Responsible for retrieving all posts from the backend, this component displays the data comprehensively, including important information. It also integrates buttons for 'like,' 'edit,' and 'delete' actions.

#### Post Component
This specific component defines the visual structure of each individual post. Each post is presented clearly and attractively, displaying all relevant details for the user.

### Technologies Used
- **Frontend**: React, Redux, axios, react-file-base64, moment
- **Backend**: Node.js, Express.js, MongoDB, mongoose

### Development Tools
- **State Management**: Redux for state tracking
- **Async Actions**: Redux-thunk for handling asynchronous actions
- **API Calls**: axios for making API calls
- **Image Handling**: react-file-base64 for managing images
- **Date Management**: moment for handling dates

### Testing
Ensure test coverage reaches at least 50%. Use React Testing Library for testing components.

## Configuration

### Backend Configuration
1. Set up a MongoDB Atlas account and obtain the connection string.
2. Create a `.env` file in the backend directory.
3. Add the MongoDB connection string to the `.env` file as `MONGODB_URI`.

### Frontend Configuration
1. Install dependencies using `npm install`.
2. Create a `.env` file in the frontend directory.
3. Set the backend API endpoint in the `.env` file as `REACT_APP_API_ENDPOINT`.

## Installation

1. Clone the repository: `git clone https://github.com/Karimcherraoui/SnapSync_back.git`
2. Navigate to the backend directory: `cd SnapSync_back`
3. Install backend dependencies: `npm install`
4. Navigate to the frontend directory: `cd ../SnapSync`
5. Install frontend dependencies: `npm install`

## Usage

1. Start the backend server: `npm run start:dev` in the backend directory.
2. Start the frontend application: `npm run dev` in the frontend directory.
3. Access the application at `http://localhost:3005`.

## Architecture

### Backend Structure
- `/models`: Contains mongoose models for data structure.
- `/routes`: Defines routes for handling API requests.
- `/controllers`: Manages the logic for each route.
- `/config`: Configuration files for the server.

### Frontend Structure
- `/src/components`: Contains React components (Form, Posts, Post).
- `/src/actions`: Redux action creators.
- `/src/reducers`: Redux reducers.
- `/src/store`: Redux store configuration.
- `/src/services`: API calls using axios.
- `/src/tests`: Tests using React Testing Library.

