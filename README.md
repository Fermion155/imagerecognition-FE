![Deployment Pipeline](https://github.com/Fermion155/imagerecognition-FE/actions/workflows/github-ci.yml/badge.svg)
![Language](https://img.shields.io/badge/language-React-blue)

# IMAGE RECOGNITION FRONTEND

## Table of Contents

- [About The Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Future Plans](#future-plans)
- [Ownership](#ownership)

## About The Project

Project was built with **REACT**+**TYPESCRIPT**+**VITE**.

Image recognition frontend is an application that provides a basic UI for image recognition application.

This service uses Amazon Rekognition service to recognize the received images and decide if it is **ALLOWED** or **NOT_ALLOWED** to be used somewhere. The option that the image was **NOT_RECOGNIZED** can also be returned by this UI in case none of the labels returned by Amazon Rekognition match the ones saved in the database.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Fermion155/imagerecognition-FE.git
   ```
2. Navigate to the project directory:
   ```sh
   cd imagerecognition-FE
   ```
3. Define environment variables either in a .env file within the project directory or by exporting them in the shell.

   Environment variable list:

   - VITE_BACKEND_URL - url used for backend service that recognizes images

4. Run application:  
   a. On docker:
   ```sh
   docker-compose up
   ```

## Usage

The application will be accessible at `localhost:5173/`  
From this webpage it is possible to view current categories that are **allowed** or **not allowed**.
In the webpage you can also upload an image no bigger than 1MB in order to analyze and recognize it based on current labies and categories.

## Future Plans

- The ability to add new categories from the UI.
- The ability to delete or disable the categories which are allowed or not allowed.
- Add user authentification feature.

## Ownership

This project is maintained and owned by Paulius Drabužinskis
