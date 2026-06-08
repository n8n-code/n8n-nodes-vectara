import type { INodeProperties } from 'n8n-workflow';

export const adminServiceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service"
					]
				}
			},
			"options": [
				{
					"name": "Create Corpus",
					"value": "Create Corpus",
					"action": "Create Corpus",
					"description": "Create Corpus",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/create-corpus"
						}
					}
				},
				{
					"name": "Delete Corpus",
					"value": "Delete Corpus",
					"action": "Delete Corpus",
					"description": "Delete Corpus",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/delete-corpus"
						}
					}
				},
				{
					"name": "List Corpora",
					"value": "List Corpora",
					"action": "List Corpora",
					"description": "List Corpora",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/list-corpora"
						}
					}
				},
				{
					"name": "Reset Corpus",
					"value": "Reset Corpus",
					"action": "Reset Corpus",
					"description": "Reset Corpus",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/reset-corpus"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/create-corpus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service"
					],
					"operation": [
						"Create Corpus"
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
						"Admin Service"
					],
					"operation": [
						"Create Corpus"
					]
				}
			}
		},
		{
			"displayName": "Corpus",
			"name": "corpus",
			"type": "json",
			"default": "{\n  \"customDimensions\": [\n    {}\n  ],\n  \"filterAttributes\": [\n    {\n      \"level\": \"FILTER_ATTRIBUTE_LEVEL__UNDEFINED\",\n      \"type\": \"FILTER_ATTRIBUTE_TYPE__UNDEFINED\"\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "corpus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service"
					],
					"operation": [
						"Create Corpus"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/delete-corpus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service"
					],
					"operation": [
						"Delete Corpus"
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
						"Admin Service"
					],
					"operation": [
						"Delete Corpus"
					]
				}
			}
		},
		{
			"displayName": "Corpus Id",
			"name": "corpusId",
			"type": "number",
			"default": 0,
			"description": "The Corpus ID to be deleted.",
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
						"Admin Service"
					],
					"operation": [
						"Delete Corpus"
					]
				}
			}
		},
		{
			"displayName": "Customer Id",
			"name": "customerId",
			"type": "number",
			"default": 0,
			"description": "The Customer ID that contains the corpus to be deleted.",
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
						"Admin Service"
					],
					"operation": [
						"Delete Corpus"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/list-corpora",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service"
					],
					"operation": [
						"List Corpora"
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
						"Admin Service"
					],
					"operation": [
						"List Corpora"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"description": "A regex to match corpora against.",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service"
					],
					"operation": [
						"List Corpora"
					]
				}
			}
		},
		{
			"displayName": "Num Results",
			"name": "numResults",
			"type": "number",
			"default": 0,
			"description": "The maximum results to return.",
			"routing": {
				"send": {
					"property": "numResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service"
					],
					"operation": [
						"List Corpora"
					]
				}
			}
		},
		{
			"displayName": "Page Key",
			"name": "pageKey",
			"type": "string",
			"default": "",
			"description": "A key that is passed in to retrieve a specific page of results.",
			"routing": {
				"send": {
					"property": "pageKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service"
					],
					"operation": [
						"List Corpora"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/reset-corpus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Service"
					],
					"operation": [
						"Reset Corpus"
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
						"Admin Service"
					],
					"operation": [
						"Reset Corpus"
					]
				}
			}
		},
		{
			"displayName": "Corpus Id",
			"name": "corpusId",
			"type": "number",
			"default": 0,
			"description": "The Corpus ID to be reset.",
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
						"Admin Service"
					],
					"operation": [
						"Reset Corpus"
					]
				}
			}
		},
		{
			"displayName": "Customer Id",
			"name": "customerId",
			"type": "number",
			"default": 0,
			"description": "The Customer ID that contains the corpus to be reset.",
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
						"Admin Service"
					],
					"operation": [
						"Reset Corpus"
					]
				}
			}
		},
];
