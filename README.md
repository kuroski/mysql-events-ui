# mysql-events-ui

A implementation from [rodrigogs](https://github.com/rodrigogs) [mysql-events](https://github.com/rodrigogs/mysql-events) project

## Install

1. You must have a mysql database running, you can create your own or just run `docker-compose up -d`

2. Configure the environment variables creating a .env based on .env.sample

3. Install the dependencies

```sh
npm install
```

4. Run express server to listen from database events

```sh
npm start
```

5. Start client application

```sh
npm run serve
```