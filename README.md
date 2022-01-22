# Legrande (https://legrandehealth.com/)

## Overview

Legrande is a healthcare website. It provide best service with less time cost.

![Dashboard](./docs/images/d2.gif)
![Discuss](./docs/images/d1.gif)

## Stack Information

| Concern                | Solution                                                       |
| ---------------------- | -------------------------------------------------------------- |
| Server                 | [Node](https://nodejs.org/)                                    |
| Server Framework       | [uWebSockts.js](https://github.com/uNetworking/uWebSockets.js) |
| Database (Legacy)      | [RethinkDB](https://www.rethinkdb.com/)                        |
| Database               | [PostgreSQL](https://www.postgresql.org/)                      |
| PubSub & Cache         | [Redis](https://redis.io)                                      |
| Data Transport         | [GraphQL](https://github.com/graphql/graphql-js)               |
| Real-time Connectivity | [trebuchet](https://github.com/mattkrick/trebuchet-client)     |
| Client Cache           | [Relay](https://facebook.github.io/relay/)                     |
| UI Framework           | [React](https://facebook.github.io/react/)                     |
| Styling                | [Emotion](https://emotion.sh/)                                 |

## Setup

### Prerequisites

- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Watchman](https://facebook.github.io/watchman/docs/install.html) (Development only)

### Installation

```bash
$ git clone https://github.com/ParabolInc/parabol.git
$ cd parabol
$ cp .env.example .env # Add your own vars here
$ yarn
$ yarn db:start
$ yarn dev
```

By default, the app will run at: http://localhost:3000/

If `yarn db:start` failed and `localhost:5050` isn't working, a docker
container, volume or image may be corrupted and need to be pruned.

Build for production and start application:

```bash
$ yarn && yarn build && yarn start
```

### RethinkDB

- Migrations are stored in `packages/server/database/migrations`
- RethinkDB Dashboard is at [http://localhost:8080](http://localhost:8080)

### PostgreSQL

- pgadmin is at [http://localhost:5050](http://localhost:5050)
- Connect using the values of `PGADMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD` from your `.env`
- Click "Add New Server" and fill out the forms with your `.env` values

  - General.name = POSTGRES_DB
  - Connection.host = 'postgres' (hardcoded from docker-compose dev.yml, not from .env!)
  - Connection.username = POSTGRES_USER
  - Connection.password = POSTGRES_PASSWORD
  - Connection.maintenanceDatabase = POSTGRES_DB
  - Connection.port = POSTGRES_PORT

- Fill out the form with values from your `.env`. Set the host to `postgres`

## Getting Involved

Parabol offers equity for qualified contributions.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more information on how to
get involved and how to get compensated.

## Have feedback, ideas or feature requests?

Please review our [Discussions](https://github.com/ParabolInc/parabol/discussions) to see if there's already a similar suggestion, and if not please feel free to [start a new one](https://github.com/ParabolInc/parabol/discussions/new).

## Helpful VSCode extensions

We use [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) for IntelliSense and syntax highlighting.

## Releases

For details on all releases, refer to [CHANGELOG.md](./CHANGELOG.md).

## Parabol Core Team

- [jordanh](https://github.com/jordanh)
- [ackernaut](https://github.com/ackernaut)
- [mattkrick](https://github.com/mattkrick)

## License

Copyright (c) 2016-present, Parabol, Inc.

This codebase is dual-licensed under the GNU AFFERO GENERAL PUBLIC LICENSE,
Version 3.0 while holding, at Parabol's sole discretion, the right to create
new licenses. For details please read [LICENSE](LICENSE).
