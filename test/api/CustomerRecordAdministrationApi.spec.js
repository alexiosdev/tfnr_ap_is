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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TfnrApIs);
  }
}(this, function(expect, TfnrApIs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TfnrApIs.CustomerRecordAdministrationApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CustomerRecordAdministrationApi', function() {
    describe('customerRecordCopy', function() {
      it('should call customerRecordCopy successfully', function(done) {
        //uncomment below and update the code to test customerRecordCopy
        //instance.customerRecordCopy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordCopyByRequestId', function() {
      it('should call customerRecordCopyByRequestId successfully', function(done) {
        //uncomment below and update the code to test customerRecordCopyByRequestId
        //instance.customerRecordCopyByRequestId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordCopyUpdate', function() {
      it('should call customerRecordCopyUpdate successfully', function(done) {
        //uncomment below and update the code to test customerRecordCopyUpdate
        //instance.customerRecordCopyUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordCopyUpdateByRequestId', function() {
      it('should call customerRecordCopyUpdateByRequestId successfully', function(done) {
        //uncomment below and update the code to test customerRecordCopyUpdateByRequestId
        //instance.customerRecordCopyUpdateByRequestId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordCreate', function() {
      it('should call customerRecordCreate successfully', function(done) {
        //uncomment below and update the code to test customerRecordCreate
        //instance.customerRecordCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordCreateByRequestId', function() {
      it('should call customerRecordCreateByRequestId successfully', function(done) {
        //uncomment below and update the code to test customerRecordCreateByRequestId
        //instance.customerRecordCreateByRequestId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordDelete', function() {
      it('should call customerRecordDelete successfully', function(done) {
        //uncomment below and update the code to test customerRecordDelete
        //instance.customerRecordDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordDeleteByRequestId', function() {
      it('should call customerRecordDeleteByRequestId successfully', function(done) {
        //uncomment below and update the code to test customerRecordDeleteByRequestId
        //instance.customerRecordDeleteByRequestId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordDisconnect', function() {
      it('should call customerRecordDisconnect successfully', function(done) {
        //uncomment below and update the code to test customerRecordDisconnect
        //instance.customerRecordDisconnect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordDisconnectByRequestId', function() {
      it('should call customerRecordDisconnectByRequestId successfully', function(done) {
        //uncomment below and update the code to test customerRecordDisconnectByRequestId
        //instance.customerRecordDisconnectByRequestId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordDisconnectUpdate', function() {
      it('should call customerRecordDisconnectUpdate successfully', function(done) {
        //uncomment below and update the code to test customerRecordDisconnectUpdate
        //instance.customerRecordDisconnectUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordDisconnectUpdateByRequestId', function() {
      it('should call customerRecordDisconnectUpdateByRequestId successfully', function(done) {
        //uncomment below and update the code to test customerRecordDisconnectUpdateByRequestId
        //instance.customerRecordDisconnectUpdateByRequestId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordQuery', function() {
      it('should call customerRecordQuery successfully', function(done) {
        //uncomment below and update the code to test customerRecordQuery
        //instance.customerRecordQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordTransfer', function() {
      it('should call customerRecordTransfer successfully', function(done) {
        //uncomment below and update the code to test customerRecordTransfer
        //instance.customerRecordTransfer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordTransferByRequestId', function() {
      it('should call customerRecordTransferByRequestId successfully', function(done) {
        //uncomment below and update the code to test customerRecordTransferByRequestId
        //instance.customerRecordTransferByRequestId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordTransferUpdate', function() {
      it('should call customerRecordTransferUpdate successfully', function(done) {
        //uncomment below and update the code to test customerRecordTransferUpdate
        //instance.customerRecordTransferUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordTransferUpdateByRequestId', function() {
      it('should call customerRecordTransferUpdateByRequestId successfully', function(done) {
        //uncomment below and update the code to test customerRecordTransferUpdateByRequestId
        //instance.customerRecordTransferUpdateByRequestId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordUpdate', function() {
      it('should call customerRecordUpdate successfully', function(done) {
        //uncomment below and update the code to test customerRecordUpdate
        //instance.customerRecordUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordUpdateByRequestId', function() {
      it('should call customerRecordUpdateByRequestId successfully', function(done) {
        //uncomment below and update the code to test customerRecordUpdateByRequestId
        //instance.customerRecordUpdateByRequestId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordView', function() {
      it('should call customerRecordView successfully', function(done) {
        //uncomment below and update the code to test customerRecordView
        //instance.customerRecordView(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerRecordViewByRequestId', function() {
      it('should call customerRecordViewByRequestId successfully', function(done) {
        //uncomment below and update the code to test customerRecordViewByRequestId
        //instance.customerRecordViewByRequestId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));