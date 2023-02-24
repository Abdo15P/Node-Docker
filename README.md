# Node-Docker
Docker practice project

This is a practice project to start working with containers. I worked on this project to get more acquaintance with docker and container technology in general. This project
was done following [this FreeCodeCamp video](https://www.youtube.com/watch?v=9zUHg7xjIqQ).

## Approach

- Create a node.js app locally.

- Create a Dockerfile including needed dependencies and your app. Also, create .dockerignore file.

- Build the image from the Dockerfile.

- Run the image, include the port to communicate.

- Mount the local directory to the app directory (using volumes).

- Set the app to restart automatically when code is updated.

- Use docker-compose to automate multiple container deployment.

- Make a docker compose file for development and production modes (multi-staging).

- Modify the Dockerfile for development and production modes.

- Add all needed conatainers to the docker compose files.

- Add swarm settings (for orchestration) to docker compose files.



After checking that everything is working locally:

- Push image to Azure Conatiner Registry

- On an Azure VM, pull the image and run the conatainers.


## Tools Used


Docker,Docker Desktop

Azure Conatiner Registry
