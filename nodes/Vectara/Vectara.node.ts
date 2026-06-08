import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { adminServiceDescription } from './resources/admin-service';
import { indexServiceDescription } from './resources/index-service';
import { queryServiceDescription } from './resources/query-service';

export class Vectara implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vectara',
		name: 'N8nDevVectara',
		icon: { light: 'file:./vectara.png', dark: 'file:./vectara.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Vectara is a neural search platform, built for developers to get the most out of their data',
		defaults: { name: 'vectara' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVectaraApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Admin Service",
					"value": "Admin Service",
					"description": "Administrative services, such as creating or deleting corpora"
				},
				{
					"name": "Index Service",
					"value": "Index Service",
					"description": "Indexing operations, such as creating and deleting documents"
				},
				{
					"name": "Query Service",
					"value": "Query Service",
					"description": "Query operations, such as performing a standard search"
				}
			],
			"default": ""
		},
		...adminServiceDescription,
		...indexServiceDescription,
		...queryServiceDescription
		],
	};
}
