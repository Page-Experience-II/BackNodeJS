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
    "consumes": "application/json",
    "paths": {
        "/api/v1/validate/account": {
            "post": {
                "x-swagger-router-controller": "users",
                "operationId": "users",
                "summary": "Validate the email account",
                "description": 'Validate user emil',
                "tags": ["User"],
                "description": `[Account validation link](${process.env.URL_BACKEND + ':' + process.env.URL_BACKEND_PORT + "/api/v1/validation"})`,
                "parameters": [
                    // {
                    //     "name": "fullname",
                    //     "in": "formData",
                    //     "type": "string",
                    //     // "collectionFormat": "multi",
                    //     "required": true
                    //     // "items": {
                    //     //     "type": "string"
                    //     // },
                    // },
                    // {
                    //     "name": "lastname",
                    //     "in": "formData",
                    //     "required": true,
                    //     "type": "string"
                    // },
                    // {
                    //     "name": "password",
                    //     "in": "formData",
                    //     "required": true,
                    //     "type": "password"
                    // },
                    // {
                    //     "name": "email",
                    //     "in": "formData",
                    //     "required": true,
                    //     "type": "string"
                    // },
                    // {
                    //     "name": "file",
                    //     "in": "formData",
                    //     "type": "file",
                    //     "required": "true"
                    // }
                    {
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "fullname": {
                                            "type": "string",
                                            "example": "John Dao"
                                        },
                                        "email": {
                                            "type": "string",
                                            "example": 'john.dao@pagex.io'
                                        }

                                    }
                                }
                            }
                        }

                    }
                ],
                "responses": {
                    '302': {
                        "description": "This user email already exists",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "msg": {
                                            "type": "string",
                                            "example": "Account exists"
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 302
                                        }

                                    }
                                }
                            }
                        }
                    },
                    '200': {
                        "description": "Validation code for user account has been generated succesfully",
                        "name": "body",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "booleon",
                                            "example": true
                                        },
                                        "code": {
                                            "type": "number",
                                            "example": 200
                                        },
                                        "data": {
                                            "properties": {
                                                "id": {
                                                    "type": "string",
                                                    "example": "_3456785445675"
                                                },
                                                "validationCode": {
                                                    "type": "string",
                                                    "example": '98789'
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        },
                    },
                    '500': {
                        "description": "An error has occured",
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