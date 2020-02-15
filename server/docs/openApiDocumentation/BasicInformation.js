const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "title": "PageX",
        "description": "PageX is a solution to connect talented people in one place \
      and help them share and develop their passion.",
        "version": "Beta"
    },
    "servers": [
        {
            "url": 'http://localhost:3000/',
            "description": 'Local server'
        }
    ],
    "produces": ["application/json"],
    "paths": {
        "/signup": {
            "post": {
                "x-swagger-router-controller": "signup",
                "operationId": "index",
                "description": 'Signup new user',
                "tags": ["User"],
                "description": `[Signup link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/signup"})`,
                "parameters": [
                    {
                        "name": "username",
                        "in": "formData",
                        "type": "string",
                        // "collectionFormat": "multi",
                        "required": true
                        // "items": {
                        //     "type": "string"
                        // },
                    },
                    {
                        "name": "lastname",
                        "in": "formData",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "password",
                        "in": "formData",
                        "required": true,
                        "type": "password"
                    },
                    {
                        "name": "email",
                        "in": "formData",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "file",
                        "in": "formData",
                        "type": "file",
                        "required": "true"
                    }
                ],
                "responses": {
                    '200': {
                        description: 'Users were obtained'
                        // content: {
                        //     'application/json': {
                        //         "schema": {
                        //             $ref: '#/components/schemas/Users'
                        //         }
                        //     }
                        // }
                    },
                }
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