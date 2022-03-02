# FROM cypress/base:14.19.0
# RUN mkdir /legrande-cypress
# WORKDIR /legrande-cypress
# COPY ./package.json .
# COPY ./cypress.json .
# COPY ./cypress  ./cypress
# RUN npm install
# ENTRYPOINT ["npx","cypress","run"]

FROM cypress/base:14.19.0
RUN npm install --save-dev cypress
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run