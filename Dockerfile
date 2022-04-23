FROM cypress/base:16.13.0
RUN mkdir /legrande-cypress
WORKDIR /legrande-cypress
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress  ./cypress
RUN npm install --dev
RUN npm install
ENTRYPOINT ["npm","cypress","run"]