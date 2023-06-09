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


import * as runtime from '../runtime';
import type {
  CreateRequestBody6,
  ListResponseBody10,
  ShowResponseBody8,
} from '../models';
import {
    CreateRequestBody6FromJSON,
    CreateRequestBody6ToJSON,
    ListResponseBody10FromJSON,
    ListResponseBody10ToJSON,
    ShowResponseBody8FromJSON,
    ShowResponseBody8ToJSON,
} from '../models';

export interface IncidentsV1CreateRequest {
    createRequestBody6: CreateRequestBody6;
}

export interface IncidentsV1ListRequest {
    pageSize?: number;
    after?: string;
    status?: Array<string>;
}

export interface IncidentsV1ShowRequest {
    id: string;
}

/**
 * 
 */
export class IncidentsV1Api extends runtime.BaseAPI {

    /**
     * Create a new incident.
     * Create Incidents V1
     */
    async incidentsV1CreateRaw(requestParameters: IncidentsV1CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowResponseBody8>> {
        if (requestParameters.createRequestBody6 === null || requestParameters.createRequestBody6 === undefined) {
            throw new runtime.RequiredError('createRequestBody6','Required parameter requestParameters.createRequestBody6 was null or undefined when calling incidentsV1Create.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/incidents`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRequestBody6ToJSON(requestParameters.createRequestBody6),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowResponseBody8FromJSON(jsonValue));
    }

    /**
     * Create a new incident.
     * Create Incidents V1
     */
    async incidentsV1Create(requestParameters: IncidentsV1CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowResponseBody8> {
        const response = await this.incidentsV1CreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all incidents for an organisation.
     * List Incidents V1
     */
    async incidentsV1ListRaw(requestParameters: IncidentsV1ListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResponseBody10>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/incidents`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListResponseBody10FromJSON(jsonValue));
    }

    /**
     * List all incidents for an organisation.
     * List Incidents V1
     */
    async incidentsV1List(requestParameters: IncidentsV1ListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResponseBody10> {
        const response = await this.incidentsV1ListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a single incident.
     * Show Incidents V1
     */
    async incidentsV1ShowRaw(requestParameters: IncidentsV1ShowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowResponseBody8>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling incidentsV1Show.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/incidents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowResponseBody8FromJSON(jsonValue));
    }

    /**
     * Get a single incident.
     * Show Incidents V1
     */
    async incidentsV1Show(requestParameters: IncidentsV1ShowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowResponseBody8> {
        const response = await this.incidentsV1ShowRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
