# Project Name

A clone of Ikea's item details page. This repo is a module of the "Others Also Viewed" section, functioning as a service. It contains its own server and database.

![Screenshot of the service](https://vbao-readme-screenshots.s3.us-west-1.amazonaws.com/fec_others_also_viewed_screenshot.png)

## Related Projects

- [About Service](https://github.com/IKEA-Vikings/kim-service-1)
- [Images Service](https://github.com/IKEA-Vikings/phucci-service-1)
- [Product Size](https://github.com/IKEA-Vikings/vbao-product-size)
- [Proxy](https://github.com/IKEA-Vikings/vbao-proxy)
- [Reviews Service](https://github.com/IKEA-Vikings/josh-service-reviews)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [API](#api)
1. [Database](#database)
1. [Development](#development)
1. [Deployment](#deployment)

## Usage

This repo provides front-end components for the Others Also Viewed module of Ikea's item detail page. This provides the API to the Others Also Viewed service, and makes a GET request to the About service to pull item names and prices, Reviews service for the star ratings, and Images service for images of the products. A placeholder database is in place using MongoDB.

This app can be run locally and can also be deployed via Docker. A Docker-compose file is provided to deploy with a Docker image of MongoDB.

## Requirements

- Node
- Webpack/Webpack-CLI
- MongoDB mongodb-community@4.4
- Docker

## API

API                                  | Description
-------------------------------------|-----------------------------------------------------------------
`GET /similar-products-by-views/:id` | Retrieves product IDs of items that other customers also viewed.

### Request/Response

```javascript
/* Sample Request */
$.get('similar-products-by-views/1', (data) => { ... });

/* Sample Response */
{
  id: 1,
  similar_items: [ 2, 3, 5, 7 ]
}
```

## Database

Schema utilizing mongoDB via Mongoose

```javascript
const similarItemsByViews = new Schema({
  id: Number
  similar_items: {
    type: [Number],
    default: undefined
  }
});
```

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seed Database

From within the root directory:

```sh
npm run seed
```

This script will run a seeding script to insert 100 records into a new Mongo database called `ikea` within a collection called `similar_items_by_views`.

Prior to running the seeding script locally, be sure the Mongo server is started.

```sh
brew services start mongodb-community@4.4
```

### Transpile React

From within the root directory in its own terminal:

```sh
npm run build
```

This script will transpile updates made to files within the `./client` folder to the `./public` folder. This script will continually watch for changes.

### Run Tests

Test scripts will test the database, API, client, and seeding script via Jest and will show coverage of the tests in the terminal.

Prior to running the test be sure the local Mongo server is started. And that the API server is started as well.

```sh
brew services start mongodb-community@4.4
```

From within the root directory:

```sh
npm start
```

In a separate terminal window, from within the root directory:

```sh
npm run test
```

### Sample .env file

The `.env` file should be in the root folder with your `package.json`. The environment variables were created for flexibility. `DATABASE` especially will change during Docker deployment to the name assigned to the image, in this case it is `mongo:27017`. But in local development `localhost` or `127.0.0.1:27017` should work just fine.

```env
DATABASE=localhost
SERVER=localhost
PORT=3005
```

## Deployment

The repo can be deployed directly using Node within an AWS EC2 instance, or deployed via Docker.

### Docker Deployment

Navigate to the folder that contains the `Dockerfile`. Build the docker image:

`docker build -t <app_name> .`

View existing Docker images to check the image creation was successful:

`docker images`

Then we run the app.

`docker run -p <port>:3005 -d <app_name>`

Running containers can be viewed:

`docker ps`

And containers can be stopped:

`docker stop <container id>`

### Docker-compose Deployment

Navigate to the folder with `docker-compose.yaml` file.

```bash
docker-compose build --no-cache
docker-compose up
```

This will read the `docker-compose.yaml` file and build the app. Both the app (client + server) and the MongoDB image (database). `--no-cache` should help with updating the docker-compose file. Otherwise, subsequent updates may not be reflected in what is served via Docker.

Alternatively, `docker-compose up -d` with start and run the containers in the background.

Use `docker-compose ps` to check what containers are currently running.

`docker-compose stop` will stop the container, while `docker-compose down -v` will stop the container and also remove the container and its volumes.
