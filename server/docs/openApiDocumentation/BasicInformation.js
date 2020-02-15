const swaggerDocument = {
  "swagger": "2.0",
  "info": {
      "title": "PageX",
      "description": "PageX is a solution to connect talented people in one place \
      and help them share and develop their passion.",
      "version": "Beta"
  },
  "produces": ["application/json"],
  "paths": {
      "/content": {
          "post": {
              "x-swagger-router-controller": "home",
              "operationId": "index",
              "tags": ["Content"],
              "description": "[Login 123](https://www.google.com)",
              "parameters": [{
                  "name": "content",
                  "in": "formData",
                  "type": "array",
                  "collectionFormat": "multi",
                  "items": {
                      "type": "integer"
                  }
              },
              { "name": "profileId", "in": "formData", "required": true, "type": "string" },
              { "name": "file", "in": "formData", "type": "file", "required": "true" }],
              "responses": {}
          }
      },
      "/content/:id": {
          "get": {
              "x-swagger-router-controller": "bar",
              "operationId": "impossible",
              "tags": ["Content"],
              "description": "",
              "parameters": [],
              "responses": {
                "test": "hello"
              }
          }
      }
  }
};

module.exports = swaggerDocument;