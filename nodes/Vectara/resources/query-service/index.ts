import type { INodeProperties } from 'n8n-workflow';

export const queryServiceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Query Service"
					]
				}
			},
			"options": [
				{
					"name": "Query",
					"value": "Query",
					"action": "Query",
					"description": "Query",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/query"
						}
					}
				},
				{
					"name": "Stream Query",
					"value": "Stream Query",
					"action": "Stream Query",
					"description": "Stream Query",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/stream-query"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Query Service"
					],
					"operation": [
						"Query"
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
						"Query Service"
					],
					"operation": [
						"Query"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"type": "json",
			"default": "[\n  {\n    \"corpusKey\": [\n      {\n        \"dim\": [\n          {}\n        ],\n        \"semantics\": \"DEFAULT\"\n      }\n    ],\n    \"rerankingConfig\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Query Service"
					],
					"operation": [
						"Query"
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
						"Query Service"
					],
					"operation": [
						"Query"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/stream-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Query Service"
					],
					"operation": [
						"Stream Query"
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
						"Query Service"
					],
					"operation": [
						"Stream Query"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"type": "json",
			"default": "[\n  {\n    \"corpusKey\": [\n      {\n        \"dim\": [\n          {}\n        ],\n        \"semantics\": \"DEFAULT\"\n      }\n    ],\n    \"rerankingConfig\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Query Service"
					],
					"operation": [
						"Stream Query"
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
						"Query Service"
					],
					"operation": [
						"Stream Query"
					]
				}
			}
		},
];
