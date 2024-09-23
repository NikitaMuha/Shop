# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Docker**: [Download Docker](https://www.docker.com/get-started)
- **Git** (optional): If you plan to clone the repository
- **NPM**: [Download NPM](https://www.npmjs.com/get-npm)

## How to Run

### Build the Docker Image

To create a Docker image for your Angular application, run the following command:

docker build . -t angularapp -f Dockerfile

### Run the Docker Image 

docker run -p 4001:4001 angularapp

Once the container is running, open your web browser and navigate to:

http://localhost:4001
