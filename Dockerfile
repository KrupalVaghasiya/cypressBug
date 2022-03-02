FROM cypress/base:14.19.0
WORKDIR /legrande-cypress
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress  ./cypress
COPY ./cypress/plugins/index.js .
RUN npm install cypress --save-dev
RUN npm i --save-dev cypress-mochawesome-reporter
COPY . .
EXPOSE 3000
ENTRYPOINT ["npx","cypress","run"]

# FROM cypress/base:14.19.0
# RUN npm install --save-dev cypress
# RUN $(npm bin)/cypress verify
# RUN $(npm bin)/cypress run

# FROM cypress/base:14.19.0
# WORKDIR /legrande-cypress
# COPY package.json .
# COPY cypress.json .
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npx","cypress","run"]