import type { INodeProperties } from 'n8n-workflow';

export const indexServiceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					]
				}
			},
			"options": [
				{
					"name": "Delete",
					"value": "Delete",
					"action": "Delete",
					"description": "Delete",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/delete-doc"
						}
					}
				},
				{
					"name": "Index",
					"value": "Index",
					"action": "Index",
					"description": "Index",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/index"
						}
					}
				},
				{
					"name": "File Upload",
					"value": "File Upload",
					"action": "File Upload",
					"description": "File Upload",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/upload"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/delete-doc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Delete"
					]
				}
			}
		},
		{
			"displayName": "Customer Id",
			"name": "customer-id",
			"required": true,
			"description": "The Customer ID to use for the request.",
			"default": 0,
			"type": "number",
			"routing": {
				"request": {
					"headers": {
						"customer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Delete"
					]
				}
			}
		},
		{
			"displayName": "Corpus Id",
			"name": "corpusId",
			"type": "string",
			"default": "",
			"description": "The Corpus ID that contains the document.",
			"routing": {
				"send": {
					"property": "corpusId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Delete"
					]
				}
			}
		},
		{
			"displayName": "Customer Id",
			"name": "customerId",
			"type": "string",
			"default": "",
			"description": "The Customer ID to issue the request for.",
			"routing": {
				"send": {
					"property": "customerId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Delete"
					]
				}
			}
		},
		{
			"displayName": "Document Id",
			"name": "documentId",
			"type": "string",
			"default": "",
			"description": "The Document ID to be deleted.",
			"routing": {
				"send": {
					"property": "documentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Delete"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/index",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Index"
					]
				}
			}
		},
		{
			"displayName": "Customer Id",
			"name": "customer-id",
			"required": true,
			"description": "The Customer ID to use for the request.",
			"default": 0,
			"type": "number",
			"routing": {
				"request": {
					"headers": {
						"customer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Index"
					]
				}
			}
		},
		{
			"displayName": "Corpus Id",
			"name": "corpusId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "corpusId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Index"
					]
				}
			}
		},
		{
			"displayName": "Customer Id",
			"name": "customerId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "customerId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Index"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "json",
			"default": "{\n  \"customDims\": [\n    {}\n  ],\n  \"section\": [\n    {\n      \"customDims\": [\n        {}\n      ],\n      \"section\": [\n        {}\n      ]\n    }\n  ]\n}",
			"description": "A document to index.",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Index"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"Index"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"File Upload"
					]
				}
			}
		},
		{
			"displayName": "C",
			"name": "c",
			"required": true,
			"description": "Customer ID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "c",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"File Upload"
					]
				}
			}
		},
		{
			"displayName": "O",
			"name": "o",
			"required": true,
			"description": "Corpus ID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "o",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"File Upload"
					]
				}
			}
		},
		{
			"displayName": "D",
			"name": "d",
			"description": "If true, the server returns the extracted document that was indexed",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "d",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"File Upload"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"File Upload"
					]
				}
			}
		},
		{
			"displayName": "Api Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Index Service"
					],
					"operation": [
						"File Upload"
					]
				}
			}
		},
];
