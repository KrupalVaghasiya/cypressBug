
## Prerequisites
Download `Docker` from the below link depending on your operating system.

- [Docker](https://docs.docker.com/get-docker/)

## Installation
```bash
$ git clone https://github.com/WeblyLab/Legrande-Cypress.git
$ cd Legrande-Cypress
```

## Instructions
To run our local test into the docker container, first, we need to create a docker image. Docker image creates upon what we write into the `Dockerfile`. `Dockerfile` is nothing it's just a set of information that we want to execute in the Docker container.

#### Build a docker image.

```bash
docker build -t cypress-image .
```
- `-t` allows us to give docker image names.
- `.` (Dot) It represents creating an image at the root of our project directory.

#### Run test in the `docker container`.

```bash
docker run -i -v "%cd%":/legrande-cypress-docker -t cypress-image:latest --spec cypress/integration/examples/*.js
```
**OR**
```bash
docker run -t cypress-image .
```

- `-i` Represent to run the test in the interactive mode so we can see the logs in the terminal.
- `-v` Used to configure a volume to our work directory.
- `%cd%:` It is used to specify the current folder in our local machine in windows.
- `/legrande-cypress-docker` is the working directory that we specified into `Dockerfile`.
- `-t` allows us to give the docker image name(`cypress-image` is our image name) that we want to execute.
- `latest` is used to specify the docker image version. Image version should be anything (Ex. cypress-image:0.0.1,cypress-image:1.1.1) it's not necessary to use `latest`.
- `--spec` allows us to run the specific file. In that case, we want to run all the files.