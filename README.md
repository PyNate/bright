### Setting up the database
In PostgreSQL, create a database called 'bright'. Alternatively, create a
database with whatever name you prefer and modify the ```database``` field in
knexfile.js to match your chosen name.

install knex and initialize the tables using knex migrate:
```bash
npm install knex -g
NODE_ENV=development knex migrate:latest
```

### Starting the server

First, install the package dependencies with:
```bash
npm install
```

Before running the server, you must build the client code with webpack:
```bash
webpack
```

Finally, run the server on localhost:3000 with the following command:
```bash
npm start
```

### Server API
| Endpoint | Method                        | Action                            |
|:--------:|-------------------------------|-----------------------------------|
| GET      | /events                       | Get all events                    |
| POST     | /events                       | Create a new event                |
| PUT      | /events/{event_id}            | Update an event                   |
| DELETE   | /events/{event_id}            | Delete the event {event_id}       |
| GET      | /events/{event_id}/categories | Get all categories for {event_id} |
| GET      | /categories                   | Get all existing categories       |
| PUT      | /categories/{category_id}     | Update the name of {category_id}  |

##### POST /events
JSON data should be submitted in the following format:
```javascript
{
"title": string, // required"
"description": string, // required
"startDate": datetime, // required
"endDate": datetime, // required
"categories": [ // Array, required
  { // Each category must be an object
    "name": "Existing Category"
    "id": 1 // number: id must be provided for existing categories
  },
  { // For new categories, omit the id field
    "name": "New Category" // string, required
  }
],
"isFeatured": boolean // required
}
```
