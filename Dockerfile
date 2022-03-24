FROM cypress/base:14.19.0
RUN mkdir /legrande-cypress-docker
WORKDIR /legrande-cypress-docker
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress  ./cypress
RUN npm install
ENTRYPOINT ["npm","cypress","run"]