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
import type { CustomFieldEntryPayloadV1 } from './CustomFieldEntryPayloadV1';
import {
    CustomFieldEntryPayloadV1FromJSON,
    CustomFieldEntryPayloadV1FromJSONTyped,
    CustomFieldEntryPayloadV1ToJSON,
} from './CustomFieldEntryPayloadV1';
import type { IncidentTimestampValuePayloadV2 } from './IncidentTimestampValuePayloadV2';
import {
    IncidentTimestampValuePayloadV2FromJSON,
    IncidentTimestampValuePayloadV2FromJSONTyped,
    IncidentTimestampValuePayloadV2ToJSON,
} from './IncidentTimestampValuePayloadV2';

/**
 * 
 * @export
 * @interface IncidentEditPayloadV2
 */
export interface IncidentEditPayloadV2 {
    /**
     * Set the incident's custom fields to these values
     * @type {Array<CustomFieldEntryPayloadV1>}
     * @memberof IncidentEditPayloadV2
     */
    custom_field_entries?: Array<CustomFieldEntryPayloadV1>;
    /**
     * Assign the incident's timestamps to these values
     * @type {Array<IncidentTimestampValuePayloadV2>}
     * @memberof IncidentEditPayloadV2
     */
    incident_timestamp_values?: Array<IncidentTimestampValuePayloadV2>;
    /**
     * Explanation of the incident
     * @type {string}
     * @memberof IncidentEditPayloadV2
     */
    name?: string;
    /**
     * Severity to change incident to
     * @type {string}
     * @memberof IncidentEditPayloadV2
     */
    severity_id?: string;
    /**
     * Detailed description of the incident
     * @type {string}
     * @memberof IncidentEditPayloadV2
     */
    summary?: string;
}

/**
 * Check if a given object implements the IncidentEditPayloadV2 interface.
 */
export function instanceOfIncidentEditPayloadV2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IncidentEditPayloadV2FromJSON(json: any): IncidentEditPayloadV2 {
    return IncidentEditPayloadV2FromJSONTyped(json, false);
}

export function IncidentEditPayloadV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentEditPayloadV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'custom_field_entries': !exists(json, 'custom_field_entries') ? undefined : ((json['custom_field_entries'] as Array<any>).map(CustomFieldEntryPayloadV1FromJSON)),
        'incident_timestamp_values': !exists(json, 'incident_timestamp_values') ? undefined : ((json['incident_timestamp_values'] as Array<any>).map(IncidentTimestampValuePayloadV2FromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'severity_id': !exists(json, 'severity_id') ? undefined : json['severity_id'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
    };
}

export function IncidentEditPayloadV2ToJSON(value?: IncidentEditPayloadV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'custom_field_entries': value.custom_field_entries === undefined ? undefined : ((value.custom_field_entries as Array<any>).map(CustomFieldEntryPayloadV1ToJSON)),
        'incident_timestamp_values': value.incident_timestamp_values === undefined ? undefined : ((value.incident_timestamp_values as Array<any>).map(IncidentTimestampValuePayloadV2ToJSON)),
        'name': value.name,
        'severity_id': value.severity_id,
        'summary': value.summary,
    };
}

