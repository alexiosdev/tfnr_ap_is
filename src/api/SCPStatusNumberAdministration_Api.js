/**
 * TFNR APIs
 * # Introduction  This document describes the new SMS/800 Toll-Free Number (TFN) Registry APIs exposed to all Responsible Organization (Resp Org) users requiring to access the SMS/800 TFN Registry via APIs.  The SMS/800 TFN Registry Application Program Interfaces (APIs) follow a standard RESTful model using the Richardson Maturity Model level 1 approach with the standard HTTP verbs @GET, @POST, @PUT, @DELETE to represent the CRUD operations against the defined resources. The PUT verb is used for full and partial updates, POST for creates, GET for reads, and DELETE for deletes.  # Authentication  SMS/800 Toll-Free Number (TFN) Registry APIs requires access tokens to invoke business API end points. The access token can be obtained in two different ways, using the industry standard OAuth 2.0 password grant flow or by invoking an [/session/open](#tag/session%2Fpaths%2F~1sec~1session~1open%2Fpost) api.  # OAuth 2.0   TFNR APIS support industry standard OAuth 2.0 authentication and authorization for accessing the APIs. The API server supports password grant for obtaining the access tokens which are valid for 60 minutes and refresh grant for refreshing/using the access tokens beyond the initial 60 minutes.    The following endpoints can be used for invoking the OAuth 2.0 functionalities.    Production: https://api-tfnregistry.somos.com/token    Sandbox: https://api-devp-tfnregistry.somos.com/token    To use OAuth 2.0 password grant flow, you will be required to provide four values, user-name, password, clientKey and clienkSecret. You can get the clientKey and clientSecret by invoking the [/session/open](#tag/session%2Fpaths%2F~1sec~1session~1open%2Fpost) api. You are required to invoke this only once to obtain the keys.  Never share your secret keys. Keep them guarded and secure.   Access Tokens have an expiration period of 60 minutes and needs to be refreshed using the refresh grant type of OAuth2.0 standards.    /token api can be used for both password and refresh grants. To obtain the accesstoken for the first time, the following information needs to be posted as part of the body   ```json  grant_type=password&username={logonid}&password={pass}  ```  ```json  grant_type=refresh_token&refresh_token={retoken}  ```   and the header should include the following information   ```json  Authorization : Basic (base64 encoded  clientKey:clientSecret) ```  both the password grant and refresh grant returns the following json body   ```json  {    \"scope\":\"default\",    \"token_type\":\"Bearer\",    \"expires_in\":3600,    \"refresh_token\":\"ca5a51f18b2edf4eaa9e4b871e42b58a\",    \"access_token\":\"f2c66f146278aaaf6513b585b5b68d1d\" } ``` # Invoking APIS    It is IMPORTANT to note that, at this time SMS/800 Toll-Free Number (TFN) Registry APIs only supports one active session for any given user name for all channels (WBA, TFNR Application and Enhanced Platform). If the user tries to open multiple sessions, the previous session will be automatically terminated.  Also, at this time APIs do not support parallel requests due to the limitation of the existing system. So, users should only send one request at a time and wait till the response is returned by the server. If the backed server returns a 202 with a RequestId, the user should NOT submit another request till the user does the polling and obtain the response of the previous request.    # Polling    Some of the TFNR APIs when invoked has the possibility of exceeding the defined timeout for a synchronous call, and so there is a possibility that the apis will return a HTTP 202 code with a RequestId that a client will use to poll for a response. This is common for search and reserve APIs and users are responsible to capture the RequestId and use the APIs provided to do the polling and obtain the actual response of the api invocation. In certain cases when the users do the polling, they might get a 202 again if the request is still being processed, in this case the user is required to wait for few seconds and do the polling till he gets the final response back from the server.    # Throttling    Users will be throttled at the RespOrg Level with a rate limit of 12000 requests/minute per RespOrg in Production and 3000 requests/minute per RespOrg in Developer Portal environment.
 *
 * OpenAPI spec version: v1
 * Contact: productsupport@somos.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AuditStatusNumberRequest from '../model/AuditStatusNumberRequest';
import AuditStatusNumberResponse from '../model/AuditStatusNumberResponse';
import DeleteNumberRequest from '../model/DeleteNumberRequest';
import DeleteNumberResponse from '../model/DeleteNumberResponse';
import SCPQueryNumberResponse from '../model/SCPQueryNumberResponse';
import SCPResendRequest from '../model/SCPResendRequest';
import SCPResendResponse from '../model/SCPResendResponse';
import TimeoutResponse from '../model/TimeoutResponse';

/**
* SCPStatusNumberAdministration_ service.
* @module api/SCPStatusNumberAdministration_Api
* @version v1
*/
export default class SCPStatusNumberAdministration_Api {

    /**
    * Constructs a new SCPStatusNumberAdministration_Api. 
    * @alias module:api/SCPStatusNumberAdministration_Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the sCPStatusNumberDeletebyRequestId operation.
     * @callback module:api/SCPStatusNumberAdministration_Api~sCPStatusNumberDeletebyRequestIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteNumberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SCP Status Number Delete - Sync Timeout 
     * This API is used to delete a customer record (CR), or pointer record from given SCPs. The status of a record for an SCP is reflected by one of several possible status values that are automatically generated by IP or returned by the SCP. The SCP status values for the requested record are shown in the response message.
     * @param {String} authorization Bearer access_token
     * @param {Number} requestId RequestId returned due to timeout
     * @param {module:api/SCPStatusNumberAdministration_Api~sCPStatusNumberDeletebyRequestIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteNumberResponse}
     */
    sCPStatusNumberDeletebyRequestId(authorization, requestId, callback) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling sCPStatusNumberDeletebyRequestId");
      }

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling sCPStatusNumberDeletebyRequestId");
      }


      let pathParams = {
        'requestId': requestId
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeleteNumberResponse;

      return this.apiClient.callApi(
        '/scp/delete/number/{requestId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scpStatusNumberAudit operation.
     * @callback module:api/SCPStatusNumberAdministration_Api~scpStatusNumberAuditCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuditStatusNumberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SCP Status Number Audit 
     * This API is used to audit the status of a customer record (CR), or pointer record at given SCPs by number. The status of a record for an SCP is reflected by one of several possible status values that are automatically generated by IP or returned by the SCP. The SCP status values for the requested record are shown in the response message.
     * @param {String} authorization Bearer access_token
     * @param {module:model/AuditStatusNumberRequest} body 
     * @param {module:api/SCPStatusNumberAdministration_Api~scpStatusNumberAuditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuditStatusNumberResponse}
     */
    scpStatusNumberAudit(authorization, body, callback) {
      let postBody = body;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling scpStatusNumberAudit");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling scpStatusNumberAudit");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuditStatusNumberResponse;

      return this.apiClient.callApi(
        '/scp/audit/number', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scpStatusNumberAuditbyRequestId operation.
     * @callback module:api/SCPStatusNumberAdministration_Api~scpStatusNumberAuditbyRequestIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuditStatusNumberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SCP Status Number Audit - Sync Timeout 
     * This API is used to audit the status of a customer record (CR, or pointer record at given SCPs by number. The status of a record for an SCP is reflected by one of several possible status values that are automatically generated by IP or returned by the SCP. The SCP status values for the requested record are shown in the response message.
     * @param {String} authorization Bearer access_token
     * @param {Number} requestId RequestId returned due to timeout
     * @param {module:api/SCPStatusNumberAdministration_Api~scpStatusNumberAuditbyRequestIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuditStatusNumberResponse}
     */
    scpStatusNumberAuditbyRequestId(authorization, requestId, callback) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling scpStatusNumberAuditbyRequestId");
      }

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling scpStatusNumberAuditbyRequestId");
      }


      let pathParams = {
        'requestId': requestId
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuditStatusNumberResponse;

      return this.apiClient.callApi(
        '/scp/audit/number/{requestId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scpStatusNumberDelete operation.
     * @callback module:api/SCPStatusNumberAdministration_Api~scpStatusNumberDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteNumberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SCP Status Number Delete 
     * This API is used to delete a customer record (CR), or pointer record from given SCPs. The status of a record for an SCP is reflected by one of several possible status values that are automatically generated by IP or returned by the SCP. The SCP status values for the requested record are shown in the response message. 
     * @param {String} authorization Bearer access_token
     * @param {module:model/DeleteNumberRequest} body 
     * @param {module:api/SCPStatusNumberAdministration_Api~scpStatusNumberDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteNumberResponse}
     */
    scpStatusNumberDelete(authorization, body, callback) {
      let postBody = body;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling scpStatusNumberDelete");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling scpStatusNumberDelete");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeleteNumberResponse;

      return this.apiClient.callApi(
        '/scp/delete/number', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scpStatusNumberQuery operation.
     * @callback module:api/SCPStatusNumberAdministration_Api~scpStatusNumberQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SCPQueryNumberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SCP Status Query 
     * This API is used to query the status of SCP(s) for one customer record (CR), or pointer record by number. The status of a record for an SCP is reflected by one of several possible status values that are automatically generated by IP or returned by the SCP. The SCP status values for the requested record are shown in the response message. 
     * @param {String} authorization Bearer access_token
     * @param {String} recNum The Dialed Telephone Number identifying the record.
     * @param {Object} opts Optional parameters
     * @param {String} opts.effDtTm Effective date and time of the record 
     * @param {module:api/SCPStatusNumberAdministration_Api~scpStatusNumberQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SCPQueryNumberResponse}
     */
    scpStatusNumberQuery(authorization, recNum, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling scpStatusNumberQuery");
      }

      // verify the required parameter 'recNum' is set
      if (recNum === undefined || recNum === null) {
        throw new Error("Missing the required parameter 'recNum' when calling scpStatusNumberQuery");
      }


      let pathParams = {
      };
      let queryParams = {
        'recNum': recNum,
        'effDtTm': opts['effDtTm']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SCPQueryNumberResponse;

      return this.apiClient.callApi(
        '/scp/query/number', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scpStatusNumberQuerybyRequestId operation.
     * @callback module:api/SCPStatusNumberAdministration_Api~scpStatusNumberQuerybyRequestIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SCPQueryNumberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SCP Status Number Query - Sync Timeout 
     * This API is used to retrieve the status of a record for an SCP. This is reflected by one of several possible status values that are automatically generated by IP or returned by the SCP. The SCP status values for the requested record are shown in the response message. 
     * @param {String} authorization Bearer access_token
     * @param {Number} requestId RequestId returned due to timeout
     * @param {module:api/SCPStatusNumberAdministration_Api~scpStatusNumberQuerybyRequestIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SCPQueryNumberResponse}
     */
    scpStatusNumberQuerybyRequestId(authorization, requestId, callback) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling scpStatusNumberQuerybyRequestId");
      }

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling scpStatusNumberQuerybyRequestId");
      }


      let pathParams = {
        'requestId': requestId
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SCPQueryNumberResponse;

      return this.apiClient.callApi(
        '/scp/query/number/{requestId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scpStatusNumberResend operation.
     * @callback module:api/SCPStatusNumberAdministration_Api~scpStatusNumberResendCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SCPResendResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SCP Resend 
     * This API is used to resend a Customer, or Pointer record to given SCPs. The status of a record for an SCP is reflected by one of several possible status values that are automatically generated by IP or returned by the SCP. The SCP status values for the requested record are shown in the response message. 
     * @param {String} authorization Bearer access_token
     * @param {module:model/SCPResendRequest} body 
     * @param {module:api/SCPStatusNumberAdministration_Api~scpStatusNumberResendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SCPResendResponse}
     */
    scpStatusNumberResend(authorization, body, callback) {
      let postBody = body;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling scpStatusNumberResend");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling scpStatusNumberResend");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SCPResendResponse;

      return this.apiClient.callApi(
        '/scp/resend/number', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scpStatusNumberResendbyRequestId operation.
     * @callback module:api/SCPStatusNumberAdministration_Api~scpStatusNumberResendbyRequestIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SCPResendResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SCP Resend - Sync Timeout 
     * This API is used to resend a Customer, or Pointer record to given SCPs. The status of a record for an SCP is reflected by one of several possible status values that are automatically generated by IP or returned by the SCP. The SCP status values for the requested record are shown in the response message.
     * @param {String} authorization Bearer access_token
     * @param {Number} requestId RequestId returned due to timeout
     * @param {module:api/SCPStatusNumberAdministration_Api~scpStatusNumberResendbyRequestIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SCPResendResponse}
     */
    scpStatusNumberResendbyRequestId(authorization, requestId, callback) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling scpStatusNumberResendbyRequestId");
      }

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling scpStatusNumberResendbyRequestId");
      }


      let pathParams = {
        'requestId': requestId
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SCPResendResponse;

      return this.apiClient.callApi(
        '/scp/resend/number/{requestId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
