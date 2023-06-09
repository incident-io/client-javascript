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
  CreateRequestBody2,
  ListResponseBody3,
  ShowResponseBody3,
  UpdateRequestBody2,
} from '../models';
import {
    CreateRequestBody2FromJSON,
    CreateRequestBody2ToJSON,
    ListResponseBody3FromJSON,
    ListResponseBody3ToJSON,
    ShowResponseBody3FromJSON,
    ShowResponseBody3ToJSON,
    UpdateRequestBody2FromJSON,
    UpdateRequestBody2ToJSON,
} from '../models';

export interface CustomFieldsV1CreateRequest {
    createRequestBody2: CreateRequestBody2;
}

export interface CustomFieldsV1DeleteRequest {
    id: string;
}

export interface CustomFieldsV1ShowRequest {
    id: string;
}

export interface CustomFieldsV1UpdateRequest {
    id: string;
    updateRequestBody2: UpdateRequestBody2;
}

/**
 * 
 */
export class CustomFieldsV1Api extends runtime.BaseAPI {

    /**
     * Create a new custom field
     * Create Custom Fields V1
     */
    async customFieldsV1CreateRaw(requestParameters: CustomFieldsV1CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowResponseBody3>> {
        if (requestParameters.createRequestBody2 === null || requestParameters.createRequestBody2 === undefined) {
            throw new runtime.RequiredError('createRequestBody2','Required parameter requestParameters.createRequestBody2 was null or undefined when calling customFieldsV1Create.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/custom_fields`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRequestBody2ToJSON(requestParameters.createRequestBody2),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowResponseBody3FromJSON(jsonValue));
    }

    /**
     * Create a new custom field
     * Create Custom Fields V1
     */
    async customFieldsV1Create(requestParameters: CustomFieldsV1CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowResponseBody3> {
        const response = await this.customFieldsV1CreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a custom field
     * Delete Custom Fields V1
     */
    async customFieldsV1DeleteRaw(requestParameters: CustomFieldsV1DeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling customFieldsV1Delete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/custom_fields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a custom field
     * Delete Custom Fields V1
     */
    async customFieldsV1Delete(requestParameters: CustomFieldsV1DeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.customFieldsV1DeleteRaw(requestParameters, initOverrides);
    }

    /**
     * List all custom fields for an organisation.
     * List Custom Fields V1
     */
    async customFieldsV1ListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResponseBody3>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/custom_fields`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListResponseBody3FromJSON(jsonValue));
    }

    /**
     * List all custom fields for an organisation.
     * List Custom Fields V1
     */
    async customFieldsV1List(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResponseBody3> {
        const response = await this.customFieldsV1ListRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get a single custom field.
     * Show Custom Fields V1
     */
    async customFieldsV1ShowRaw(requestParameters: CustomFieldsV1ShowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowResponseBody3>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling customFieldsV1Show.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/custom_fields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowResponseBody3FromJSON(jsonValue));
    }

    /**
     * Get a single custom field.
     * Show Custom Fields V1
     */
    async customFieldsV1Show(requestParameters: CustomFieldsV1ShowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowResponseBody3> {
        const response = await this.customFieldsV1ShowRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the details of a custom field
     * Update Custom Fields V1
     */
    async customFieldsV1UpdateRaw(requestParameters: CustomFieldsV1UpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowResponseBody3>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling customFieldsV1Update.');
        }

        if (requestParameters.updateRequestBody2 === null || requestParameters.updateRequestBody2 === undefined) {
            throw new runtime.RequiredError('updateRequestBody2','Required parameter requestParameters.updateRequestBody2 was null or undefined when calling customFieldsV1Update.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/custom_fields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateRequestBody2ToJSON(requestParameters.updateRequestBody2),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowResponseBody3FromJSON(jsonValue));
    }

    /**
     * Update the details of a custom field
     * Update Custom Fields V1
     */
    async customFieldsV1Update(requestParameters: CustomFieldsV1UpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowResponseBody3> {
        const response = await this.customFieldsV1UpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
