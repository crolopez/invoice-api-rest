# Invoice API REST

Simple API REST to manage invoices with the purpose of gaining knowledge about CI/CD and serverless applications in Azure.

## Prerequisites

- [**Node.js**](https://nodejs.org/)
- [**Yarn**](https://classic.yarnpkg.com/)
- [**MongoDB**](https://www.mongodb.com/)

## How to deploy

Just execute:

``` bash
yarn install
yarn build
yarn start
```

You can check an Azure Pipeline example about how to generate the artifact [here](./.azure/ci.yml).

## Configuration

It is necessary to set the `MONGODB_TOKEN` environment variable with a MongoDB connection string in order to manage the status of the invoices.

## RESTful API

### Register an invoice

Request:

`POST /api/`

``` bash
curl -i -H 'Content-Type: application/json' http://localhost:7071/api/ \
-d '{ "invoiceId": "891248192B", "supplier": "Fake supplier", "dateIssued": "2019-10-10 13:30:01 T+0210", "currency": "EUR", "amount": 1000.00, "description": "New projector for confenrece room" }'
```


Response:

``` JSON
{
    "success": true
}
```

### Get invoices

Request:

`GET /api/`

``` bash
curl -i -H 'Content-Type: application/json' http://localhost:7071/api/'
```


Response:

``` JSON
{
    "success": true,
    "invoices": [<list of invoices>]
}
```

### Get an invoice

Request:

`GET /api/<invoiceID>`

``` bash
curl -i -H 'Content-Type: application/json' http://localhost:7071/api/<invoiceID>'
```


Response:

``` JSON
{
    "success": true,
    "invoices": [<requested invoice>]
}
```

### Delete an invoice

Request:

`DELETE /api/<invoiceID>`

``` bash
curl -X DELETE -i -H 'Content-Type: application/json' http://localhost:7071/api/<invoiceID>'
```

Response:

``` JSON
{
    "success": true
}
```
