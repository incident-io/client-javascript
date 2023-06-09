/* tslint:disable */
/* eslint-disable */
/**
 * incident.io
 * This is the API reference for incident.io.  It documents available API endpoints, provides examples of how to use it, and instructions around things like authentication and error handling.  The API is hosted at:  - https://api.incident.io/  And you will need to create an API key via your [incident.io dashboard](https://app.incident.io/settings/api-keys) to make requests.  # Making requests  Here are the key concepts required to make requests to the incident.io API.  ## Authentication  For all requests made to the incident.io API, you\'ll need an API key.  To create an API key, head to the incident dashboard and visit [API keys](https://app.incident.io/settings/api-keys). When you create the key, you\'ll be able to choose what actions it can take for your account: choose carefully, as those roles can only be set when you first create the key. We\'ll only show you the token once, so make sure you store it somewhere safe.  Once you have the key, you should make requests to the API that set the `Authorization` request header using a \"Bearer\" authentication scheme:  ``` Authorization: Bearer <YOUR_API_KEY> ```  ## Errors  We use standard HTTP response codes to indicate the status or failure of API requests.  The API response body will be JSON, and contain more detailed information on the nature of the error.  An example error when a request is made without an API key:  ```json {   \"type\": \"authentication_error\",   \"status\": 401,   \"request_id\": \"8e3cc412-b49d-4957-9073-2c19d2c61804\",   \"errors\": [     {       \"code\": \"missing_authorization_material\",       \"message\": \"No authorization material provided in request\"     }   ] } ```  Note that the error:  - Contains the HTTP status (`401`) - References the type of error (`authentication_error`) - Includes a `request_id` that can be provided to incident.io support to help  debug questions with your API request - Provides a list of individual errors, which go into detail about why the error  occurred  The most common error will be a 422 Validation Error, which is returned when the request was rejected due to failing validations.  These errors look like this:  ```json {   \"type\": \"validation_error\",   \"status\": 422,   \"request_id\": \"631766c4-4afd-4803-997c-cd700928fa4b\",   \"errors\": [     {       \"code\": \"is_required\",       \"message\": \"A severity is required to open an incident\",       \"source\": {         \"field\": \"severity_id\"       }     }   ] } ```  This error is caused by not providing a severity identifier, which should be at the `severity_id` field of the request payload. Errors like these can be mapped to forms, should you be integrating with the API from a user-interface.  ## Compatibility  We won\'t make breaking changes to existing API services or endpoints, but will expect integrators to upgrade themselves to the latest API endpoints within 3 months of us deprecating the old service.  We will make changes that are considered backwards compatible, which include:  - Adding new API endpoints and services - Adding new properties to responses from existing API endpoints - Reordering properties returned from existing API endpoints - Adding optional request parameters to existing API endpoints - Altering the format or length of IDs - Adding new values to enums  It is important that clients are robust to these changes, to ensure reliable integrations.  As an example, if you are generating a client using an openapi-generator, ensure the generated client is configured to support unknown enum values, often configured via the `enumUnknownDefaultCase` parameter.  When breaking changes are unavoidable, we\'ll create a new service version on a separate path, and run them in parallel.  For example:  - https://api.incident.io/v1/incidents - https://api.incident.io/v2/incidents  For any questions, email support@incident.io. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExternalIssueReferenceV1 } from './ExternalIssueReferenceV1';
import {
    ExternalIssueReferenceV1FromJSON,
    ExternalIssueReferenceV1FromJSONTyped,
    ExternalIssueReferenceV1ToJSON,
} from './ExternalIssueReferenceV1';
import type { UserV1 } from './UserV1';
import {
    UserV1FromJSON,
    UserV1FromJSONTyped,
    UserV1ToJSON,
} from './UserV1';

/**
 * 
 * @export
 * @interface ActionV1
 */
export interface ActionV1 {
    /**
     * 
     * @type {UserV1}
     * @memberof ActionV1
     */
    assignee?: UserV1;
    /**
     * When the action was completed
     * @type {Date}
     * @memberof ActionV1
     */
    completed_at?: Date;
    /**
     * When the action was created
     * @type {Date}
     * @memberof ActionV1
     */
    created_at: Date;
    /**
     * Description of the action
     * @type {string}
     * @memberof ActionV1
     */
    description?: string;
    /**
     * 
     * @type {ExternalIssueReferenceV1}
     * @memberof ActionV1
     */
    external_issue_reference?: ExternalIssueReferenceV1;
    /**
     * Whether an action is marked as follow-up
     * @type {boolean}
     * @memberof ActionV1
     */
    follow_up: boolean;
    /**
     * Unique identifier for the action
     * @type {string}
     * @memberof ActionV1
     */
    id: string;
    /**
     * Unique identifier of the incident the action belongs to
     * @type {string}
     * @memberof ActionV1
     */
    incident_id: string;
    /**
     * Status of the action
     * @type {string}
     * @memberof ActionV1
     */
    status: ActionV1StatusEnum;
    /**
     * When the action was last updated
     * @type {Date}
     * @memberof ActionV1
     */
    updated_at: Date;
}


/**
 * @export
 */
export const ActionV1StatusEnum = {
    Outstanding: 'outstanding',
    Completed: 'completed',
    Deleted: 'deleted',
    NotDoing: 'not_doing'
} as const;
export type ActionV1StatusEnum = typeof ActionV1StatusEnum[keyof typeof ActionV1StatusEnum];


/**
 * Check if a given object implements the ActionV1 interface.
 */
export function instanceOfActionV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "follow_up" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "incident_id" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function ActionV1FromJSON(json: any): ActionV1 {
    return ActionV1FromJSONTyped(json, false);
}

export function ActionV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assignee': !exists(json, 'assignee') ? undefined : UserV1FromJSON(json['assignee']),
        'completed_at': !exists(json, 'completed_at') ? undefined : (new Date(json['completed_at'])),
        'created_at': (new Date(json['created_at'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'external_issue_reference': !exists(json, 'external_issue_reference') ? undefined : ExternalIssueReferenceV1FromJSON(json['external_issue_reference']),
        'follow_up': json['follow_up'],
        'id': json['id'],
        'incident_id': json['incident_id'],
        'status': json['status'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function ActionV1ToJSON(value?: ActionV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assignee': UserV1ToJSON(value.assignee),
        'completed_at': value.completed_at === undefined ? undefined : (value.completed_at.toISOString()),
        'created_at': (value.created_at.toISOString()),
        'description': value.description,
        'external_issue_reference': ExternalIssueReferenceV1ToJSON(value.external_issue_reference),
        'follow_up': value.follow_up,
        'id': value.id,
        'incident_id': value.incident_id,
        'status': value.status,
        'updated_at': (value.updated_at.toISOString()),
    };
}

