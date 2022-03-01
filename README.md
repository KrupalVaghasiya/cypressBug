
### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)

## Run

```bash
docker run -i -v "%cd%":/legrande-cypress -t cypress-image:latest --spec cypress/integration/examples/*.js