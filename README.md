
### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)

## Run
# For headless mode

To run cypress test in the docker container first you need to build the `cypress-image`.

# To build image
```bash
docker build -t cypress-image .
```
# To run the test
```bash
docker run -i -v "%cd%":/legrande-cypress -t cypress-image:latest --spec cypress/integration/examples/*.js
```

# For headed mode
