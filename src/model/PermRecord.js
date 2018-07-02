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


import ApiClient from '../ApiClient';
import PermNDUB from './PermNDUB';
import PermNV from './PermNV';
import PermNVDUB from './PermNVDUB';
import PermNVU from './PermNVU';
import PermNY from './PermNY';





/**
* The PermRecord model module.
* @module model/PermRecord
* @version v1
*/
export default class PermRecord {
    /**
    * Constructs a new <code>PermRecord</code>.
    * @alias module:model/PermRecord
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PermRecord</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PermRecord} obj Optional instance to populate.
    * @return {module:model/PermRecord} The populated <code>PermRecord</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermRecord();

            
            
            

            if (data.hasOwnProperty('usrName')) {
                obj['usrName'] = ApiClient.convertToType(data['usrName'], 'String');
            }
            if (data.hasOwnProperty('usrPhone')) {
                obj['usrPhone'] = ApiClient.convertToType(data['usrPhone'], 'String');
            }
            if (data.hasOwnProperty('respOrgId')) {
                obj['respOrgId'] = ApiClient.convertToType(data['respOrgId'], 'String');
            }
            if (data.hasOwnProperty('updList')) {
                obj['updList'] = ApiClient.convertToType(data['updList'], ['String']);
            }
            if (data.hasOwnProperty('viewList')) {
                obj['viewList'] = ApiClient.convertToType(data['viewList'], ['String']);
            }
            if (data.hasOwnProperty('usrClass')) {
                obj['usrClass'] = ApiClient.convertToType(data['usrClass'], 'String');
            }
            if (data.hasOwnProperty('usrGrp')) {
                obj['usrGrp'] = ApiClient.convertToType(data['usrGrp'], 'String');
            }
            if (data.hasOwnProperty('maxLogonAttempts')) {
                obj['maxLogonAttempts'] = ApiClient.convertToType(data['maxLogonAttempts'], 'Number');
            }
            if (data.hasOwnProperty('tmoutInt')) {
                obj['tmoutInt'] = ApiClient.convertToType(data['tmoutInt'], 'Number');
            }
            if (data.hasOwnProperty('telcoCode')) {
                obj['telcoCode'] = ApiClient.convertToType(data['telcoCode'], 'String');
            }
            if (data.hasOwnProperty('autoFlag')) {
                obj['autoFlag'] = ApiClient.convertToType(data['autoFlag'], 'Boolean');
            }
            if (data.hasOwnProperty('fccFlag')) {
                obj['fccFlag'] = ApiClient.convertToType(data['fccFlag'], 'Boolean');
            }
            if (data.hasOwnProperty('nusPerm')) {
                obj['nusPerm'] = PermNVU.constructFromObject(data['nusPerm']);
            }
            if (data.hasOwnProperty('cadPerm')) {
                obj['cadPerm'] = PermNVU.constructFromObject(data['cadPerm']);
            }
            if (data.hasOwnProperty('cprPerm')) {
                obj['cprPerm'] = PermNVU.constructFromObject(data['cprPerm']);
            }
            if (data.hasOwnProperty('ladPerm')) {
                obj['ladPerm'] = PermNVU.constructFromObject(data['ladPerm']);
            }
            if (data.hasOwnProperty('trqPerm')) {
                obj['trqPerm'] = PermNY.constructFromObject(data['trqPerm']);
            }
            if (data.hasOwnProperty('aosPerm')) {
                obj['aosPerm'] = PermNVU.constructFromObject(data['aosPerm']);
            }
            if (data.hasOwnProperty('craPerm')) {
                obj['craPerm'] = PermNY.constructFromObject(data['craPerm']);
            }
            if (data.hasOwnProperty('crrPerm')) {
                obj['crrPerm'] = PermNDUB.constructFromObject(data['crrPerm']);
            }
            if (data.hasOwnProperty('npaPerm')) {
                obj['npaPerm'] = PermNVU.constructFromObject(data['npaPerm']);
            }
            if (data.hasOwnProperty('eagPerm')) {
                obj['eagPerm'] = PermNVU.constructFromObject(data['eagPerm']);
            }
            if (data.hasOwnProperty('orgPerm')) {
                obj['orgPerm'] = PermNVU.constructFromObject(data['orgPerm']);
            }
            if (data.hasOwnProperty('andPerm')) {
                obj['andPerm'] = PermNVU.constructFromObject(data['andPerm']);
            }
            if (data.hasOwnProperty('relPerm')) {
                obj['relPerm'] = PermNVU.constructFromObject(data['relPerm']);
            }
            if (data.hasOwnProperty('nxxPerm')) {
                obj['nxxPerm'] = PermNVU.constructFromObject(data['nxxPerm']);
            }
            if (data.hasOwnProperty('orcPerm')) {
                obj['orcPerm'] = PermNVU.constructFromObject(data['orcPerm']);
            }
            if (data.hasOwnProperty('arpPerm')) {
                obj['arpPerm'] = PermNVU.constructFromObject(data['arpPerm']);
            }
            if (data.hasOwnProperty('cagPerm')) {
                obj['cagPerm'] = PermNVDUB.constructFromObject(data['cagPerm']);
            }
            if (data.hasOwnProperty('carPerm')) {
                obj['carPerm'] = PermNVDUB.constructFromObject(data['carPerm']);
            }
            if (data.hasOwnProperty('csePerm')) {
                obj['csePerm'] = PermNVDUB.constructFromObject(data['csePerm']);
            }
            if (data.hasOwnProperty('claPerm')) {
                obj['claPerm'] = PermNVDUB.constructFromObject(data['claPerm']);
            }
            if (data.hasOwnProperty('dapPerm')) {
                obj['dapPerm'] = PermNY.constructFromObject(data['dapPerm']);
            }
            if (data.hasOwnProperty('eapPerm')) {
                obj['eapPerm'] = PermNVDUB.constructFromObject(data['eapPerm']);
            }
            if (data.hasOwnProperty('enoPerm')) {
                obj['enoPerm'] = PermNVDUB.constructFromObject(data['enoPerm']);
            }
            if (data.hasOwnProperty('gnaPerm')) {
                obj['gnaPerm'] = PermNVDUB.constructFromObject(data['gnaPerm']);
            }
            if (data.hasOwnProperty('nofPerm')) {
                obj['nofPerm'] = PermNVU.constructFromObject(data['nofPerm']);
            }
            if (data.hasOwnProperty('rocPerm')) {
                obj['rocPerm'] = PermNVDUB.constructFromObject(data['rocPerm']);
            }
            if (data.hasOwnProperty('sapPerm')) {
                obj['sapPerm'] = PermNY.constructFromObject(data['sapPerm']);
            }
            if (data.hasOwnProperty('cciPerm')) {
                obj['cciPerm'] = PermNVU.constructFromObject(data['cciPerm']);
            }
            if (data.hasOwnProperty('ncoPerm')) {
                obj['ncoPerm'] = PermNVU.constructFromObject(data['ncoPerm']);
            }
            if (data.hasOwnProperty('nmvPerm')) {
                obj['nmvPerm'] = PermNVU.constructFromObject(data['nmvPerm']);
            }
            if (data.hasOwnProperty('nxlPerm')) {
                obj['nxlPerm'] = PermNVU.constructFromObject(data['nxlPerm']);
            }
            if (data.hasOwnProperty('roiPerm')) {
                obj['roiPerm'] = PermNVU.constructFromObject(data['roiPerm']);
            }
            if (data.hasOwnProperty('bbmPerm')) {
                obj['bbmPerm'] = PermNY.constructFromObject(data['bbmPerm']);
            }
            if (data.hasOwnProperty('srcPerm')) {
                obj['srcPerm'] = PermNVU.constructFromObject(data['srcPerm']);
            }
            if (data.hasOwnProperty('gsaPerm')) {
                obj['gsaPerm'] = PermNVDUB.constructFromObject(data['gsaPerm']);
            }
            if (data.hasOwnProperty('secPerm')) {
                obj['secPerm'] = PermNY.constructFromObject(data['secPerm']);
            }
            if (data.hasOwnProperty('sudPerm')) {
                obj['sudPerm'] = PermNY.constructFromObject(data['sudPerm']);
            }
            if (data.hasOwnProperty('sepPerm')) {
                obj['sepPerm'] = PermNVU.constructFromObject(data['sepPerm']);
            }
            if (data.hasOwnProperty('stdPerm')) {
                obj['stdPerm'] = PermNY.constructFromObject(data['stdPerm']);
            }
            if (data.hasOwnProperty('ducPerm')) {
                obj['ducPerm'] = PermNVU.constructFromObject(data['ducPerm']);
            }
            if (data.hasOwnProperty('nucPerm')) {
                obj['nucPerm'] = PermNVU.constructFromObject(data['nucPerm']);
            }
            if (data.hasOwnProperty('casPerm')) {
                obj['casPerm'] = PermNVDUB.constructFromObject(data['casPerm']);
            }
            if (data.hasOwnProperty('ddtPerm')) {
                obj['ddtPerm'] = PermNVDUB.constructFromObject(data['ddtPerm']);
            }
            if (data.hasOwnProperty('prtPerm')) {
                obj['prtPerm'] = PermNVDUB.constructFromObject(data['prtPerm']);
            }
            if (data.hasOwnProperty('tcoPerm')) {
                obj['tcoPerm'] = PermNVDUB.constructFromObject(data['tcoPerm']);
            }
            if (data.hasOwnProperty('lcnPerm')) {
                obj['lcnPerm'] = PermNVDUB.constructFromObject(data['lcnPerm']);
            }
            if (data.hasOwnProperty('lrnPerm')) {
                obj['lrnPerm'] = PermNVDUB.constructFromObject(data['lrnPerm']);
            }
            if (data.hasOwnProperty('ncnPerm')) {
                obj['ncnPerm'] = PermNVDUB.constructFromObject(data['ncnPerm']);
            }
            if (data.hasOwnProperty('netPerm')) {
                obj['netPerm'] = PermNVDUB.constructFromObject(data['netPerm']);
            }
            if (data.hasOwnProperty('nrnPerm')) {
                obj['nrnPerm'] = PermNVDUB.constructFromObject(data['nrnPerm']);
            }
            if (data.hasOwnProperty('matPerm')) {
                obj['matPerm'] = PermNVU.constructFromObject(data['matPerm']);
            }
            if (data.hasOwnProperty('sidPerm')) {
                obj['sidPerm'] = PermNVDUB.constructFromObject(data['sidPerm']);
            }
            if (data.hasOwnProperty('sspPerm')) {
                obj['sspPerm'] = PermNVDUB.constructFromObject(data['sspPerm']);
            }
            if (data.hasOwnProperty('cosPerm')) {
                obj['cosPerm'] = PermNVDUB.constructFromObject(data['cosPerm']);
            }
            if (data.hasOwnProperty('cpnPerm')) {
                obj['cpnPerm'] = PermNVDUB.constructFromObject(data['cpnPerm']);
            }
            if (data.hasOwnProperty('prcPerm')) {
                obj['prcPerm'] = PermNVU.constructFromObject(data['prcPerm']);
            }
            if (data.hasOwnProperty('prlPerm')) {
                obj['prlPerm'] = PermNVU.constructFromObject(data['prlPerm']);
            }
            if (data.hasOwnProperty('nrcPerm')) {
                obj['nrcPerm'] = PermNVU.constructFromObject(data['nrcPerm']);
            }
            if (data.hasOwnProperty('nrlPerm')) {
                obj['nrlPerm'] = PermNVU.constructFromObject(data['nrlPerm']);
            }
            if (data.hasOwnProperty('spsPerm')) {
                obj['spsPerm'] = PermNVDUB.constructFromObject(data['spsPerm']);
            }
            if (data.hasOwnProperty('ganPerm')) {
                obj['ganPerm'] = PermNVDUB.constructFromObject(data['ganPerm']);
            }
            if (data.hasOwnProperty('gunPerm')) {
                obj['gunPerm'] = PermNVDUB.constructFromObject(data['gunPerm']);
            }
            if (data.hasOwnProperty('spoPerm')) {
                obj['spoPerm'] = PermNY.constructFromObject(data['spoPerm']);
            }
            if (data.hasOwnProperty('cpsPerm')) {
                obj['cpsPerm'] = PermNVU.constructFromObject(data['cpsPerm']);
            }
            if (data.hasOwnProperty('recPerm')) {
                obj['recPerm'] = PermNVU.constructFromObject(data['recPerm']);
            }
            if (data.hasOwnProperty('airPerm')) {
                obj['airPerm'] = PermNVU.constructFromObject(data['airPerm']);
            }
            if (data.hasOwnProperty('cirPerm')) {
                obj['cirPerm'] = PermNV.constructFromObject(data['cirPerm']);
            }
            if (data.hasOwnProperty('hpuPerm')) {
                obj['hpuPerm'] = PermNVDUB.constructFromObject(data['hpuPerm']);
            }
            if (data.hasOwnProperty('ocnPerm')) {
                obj['ocnPerm'] = PermNVDUB.constructFromObject(data['ocnPerm']);
            }
            if (data.hasOwnProperty('clePerm')) {
                obj['clePerm'] = PermNVDUB.constructFromObject(data['clePerm']);
            }
            if (data.hasOwnProperty('nccPerm')) {
                obj['nccPerm'] = PermNVDUB.constructFromObject(data['nccPerm']);
            }
            if (data.hasOwnProperty('nlaPerm')) {
                obj['nlaPerm'] = PermNVDUB.constructFromObject(data['nlaPerm']);
            }
            if (data.hasOwnProperty('nlePerm')) {
                obj['nlePerm'] = PermNVDUB.constructFromObject(data['nlePerm']);
            }
            if (data.hasOwnProperty('ncaPerm')) {
                obj['ncaPerm'] = PermNVDUB.constructFromObject(data['ncaPerm']);
            }
            if (data.hasOwnProperty('racPerm')) {
                obj['racPerm'] = PermNVDUB.constructFromObject(data['racPerm']);
            }
            if (data.hasOwnProperty('rdcPerm')) {
                obj['rdcPerm'] = PermNVDUB.constructFromObject(data['rdcPerm']);
            }
            if (data.hasOwnProperty('enaPerm')) {
                obj['enaPerm'] = PermNVDUB.constructFromObject(data['enaPerm']);
            }
            if (data.hasOwnProperty('crsPerm')) {
                obj['crsPerm'] = PermNY.constructFromObject(data['crsPerm']);
            }
            if (data.hasOwnProperty('crbPerm')) {
                obj['crbPerm'] = PermNVDUB.constructFromObject(data['crbPerm']);
            }
            if (data.hasOwnProperty('nacPerm')) {
                obj['nacPerm'] = PermNVDUB.constructFromObject(data['nacPerm']);
            }
            if (data.hasOwnProperty('cpfPerm')) {
                obj['cpfPerm'] = PermNVDUB.constructFromObject(data['cpfPerm']);
            }
            if (data.hasOwnProperty('rmsPerm')) {
                obj['rmsPerm'] = PermNVDUB.constructFromObject(data['rmsPerm']);
            }
            if (data.hasOwnProperty('wraPerm')) {
                obj['wraPerm'] = PermNVU.constructFromObject(data['wraPerm']);
            }
            if (data.hasOwnProperty('luiPerm')) {
                obj['luiPerm'] = PermNY.constructFromObject(data['luiPerm']);
            }
            if (data.hasOwnProperty('padPerm')) {
                obj['padPerm'] = PermNVU.constructFromObject(data['padPerm']);
            }
            if (data.hasOwnProperty('tadPerm')) {
                obj['tadPerm'] = PermNVU.constructFromObject(data['tadPerm']);
            }
            if (data.hasOwnProperty('talPerm')) {
                obj['talPerm'] = PermNVDUB.constructFromObject(data['talPerm']);
            }
            if (data.hasOwnProperty('tecPerm')) {
                obj['tecPerm'] = PermNVU.constructFromObject(data['tecPerm']);
            }
            if (data.hasOwnProperty('trlPerm')) {
                obj['trlPerm'] = PermNVU.constructFromObject(data['trlPerm']);
            }
        }
        return obj;
    }

    /**
    * User Name/LogonId
    * @member {String} usrName
    */
    usrName = undefined;
    /**
    * Users phone number if found.
    * @member {String} usrPhone
    */
    usrPhone = undefined;
    /**
    * Users RespOrg ID
    * @member {String} respOrgId
    */
    respOrgId = undefined;
    /**
    * List of RespOrgs the user can access/update
    * @member {Array.<String>} updList
    */
    updList = undefined;
    /**
    * List of RespOrgs the user can access/view
    * @member {Array.<String>} viewList
    */
    viewList = undefined;
    /**
    * @member {String} usrClass
    */
    usrClass = undefined;
    /**
    * @member {String} usrGrp
    */
    usrGrp = undefined;
    /**
    * @member {Number} maxLogonAttempts
    */
    maxLogonAttempts = undefined;
    /**
    * @member {Number} tmoutInt
    */
    tmoutInt = undefined;
    /**
    * @member {String} telcoCode
    */
    telcoCode = undefined;
    /**
    * @member {Boolean} autoFlag
    * @default false
    */
    autoFlag = false;
    /**
    * @member {Boolean} fccFlag
    * @default false
    */
    fccFlag = false;
    /**
    * @member {module:model/PermNVU} nusPerm
    */
    nusPerm = undefined;
    /**
    * @member {module:model/PermNVU} cadPerm
    */
    cadPerm = undefined;
    /**
    * @member {module:model/PermNVU} cprPerm
    */
    cprPerm = undefined;
    /**
    * @member {module:model/PermNVU} ladPerm
    */
    ladPerm = undefined;
    /**
    * @member {module:model/PermNY} trqPerm
    */
    trqPerm = undefined;
    /**
    * @member {module:model/PermNVU} aosPerm
    */
    aosPerm = undefined;
    /**
    * @member {module:model/PermNY} craPerm
    */
    craPerm = undefined;
    /**
    * @member {module:model/PermNDUB} crrPerm
    */
    crrPerm = undefined;
    /**
    * @member {module:model/PermNVU} npaPerm
    */
    npaPerm = undefined;
    /**
    * @member {module:model/PermNVU} eagPerm
    */
    eagPerm = undefined;
    /**
    * @member {module:model/PermNVU} orgPerm
    */
    orgPerm = undefined;
    /**
    * @member {module:model/PermNVU} andPerm
    */
    andPerm = undefined;
    /**
    * @member {module:model/PermNVU} relPerm
    */
    relPerm = undefined;
    /**
    * @member {module:model/PermNVU} nxxPerm
    */
    nxxPerm = undefined;
    /**
    * @member {module:model/PermNVU} orcPerm
    */
    orcPerm = undefined;
    /**
    * @member {module:model/PermNVU} arpPerm
    */
    arpPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} cagPerm
    */
    cagPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} carPerm
    */
    carPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} csePerm
    */
    csePerm = undefined;
    /**
    * @member {module:model/PermNVDUB} claPerm
    */
    claPerm = undefined;
    /**
    * @member {module:model/PermNY} dapPerm
    */
    dapPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} eapPerm
    */
    eapPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} enoPerm
    */
    enoPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} gnaPerm
    */
    gnaPerm = undefined;
    /**
    * @member {module:model/PermNVU} nofPerm
    */
    nofPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} rocPerm
    */
    rocPerm = undefined;
    /**
    * @member {module:model/PermNY} sapPerm
    */
    sapPerm = undefined;
    /**
    * @member {module:model/PermNVU} cciPerm
    */
    cciPerm = undefined;
    /**
    * @member {module:model/PermNVU} ncoPerm
    */
    ncoPerm = undefined;
    /**
    * @member {module:model/PermNVU} nmvPerm
    */
    nmvPerm = undefined;
    /**
    * @member {module:model/PermNVU} nxlPerm
    */
    nxlPerm = undefined;
    /**
    * @member {module:model/PermNVU} roiPerm
    */
    roiPerm = undefined;
    /**
    * @member {module:model/PermNY} bbmPerm
    */
    bbmPerm = undefined;
    /**
    * @member {module:model/PermNVU} srcPerm
    */
    srcPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} gsaPerm
    */
    gsaPerm = undefined;
    /**
    * @member {module:model/PermNY} secPerm
    */
    secPerm = undefined;
    /**
    * @member {module:model/PermNY} sudPerm
    */
    sudPerm = undefined;
    /**
    * @member {module:model/PermNVU} sepPerm
    */
    sepPerm = undefined;
    /**
    * @member {module:model/PermNY} stdPerm
    */
    stdPerm = undefined;
    /**
    * @member {module:model/PermNVU} ducPerm
    */
    ducPerm = undefined;
    /**
    * @member {module:model/PermNVU} nucPerm
    */
    nucPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} casPerm
    */
    casPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} ddtPerm
    */
    ddtPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} prtPerm
    */
    prtPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} tcoPerm
    */
    tcoPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} lcnPerm
    */
    lcnPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} lrnPerm
    */
    lrnPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} ncnPerm
    */
    ncnPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} netPerm
    */
    netPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} nrnPerm
    */
    nrnPerm = undefined;
    /**
    * @member {module:model/PermNVU} matPerm
    */
    matPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} sidPerm
    */
    sidPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} sspPerm
    */
    sspPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} cosPerm
    */
    cosPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} cpnPerm
    */
    cpnPerm = undefined;
    /**
    * @member {module:model/PermNVU} prcPerm
    */
    prcPerm = undefined;
    /**
    * @member {module:model/PermNVU} prlPerm
    */
    prlPerm = undefined;
    /**
    * @member {module:model/PermNVU} nrcPerm
    */
    nrcPerm = undefined;
    /**
    * @member {module:model/PermNVU} nrlPerm
    */
    nrlPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} spsPerm
    */
    spsPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} ganPerm
    */
    ganPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} gunPerm
    */
    gunPerm = undefined;
    /**
    * @member {module:model/PermNY} spoPerm
    */
    spoPerm = undefined;
    /**
    * @member {module:model/PermNVU} cpsPerm
    */
    cpsPerm = undefined;
    /**
    * @member {module:model/PermNVU} recPerm
    */
    recPerm = undefined;
    /**
    * @member {module:model/PermNVU} airPerm
    */
    airPerm = undefined;
    /**
    * @member {module:model/PermNV} cirPerm
    */
    cirPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} hpuPerm
    */
    hpuPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} ocnPerm
    */
    ocnPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} clePerm
    */
    clePerm = undefined;
    /**
    * @member {module:model/PermNVDUB} nccPerm
    */
    nccPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} nlaPerm
    */
    nlaPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} nlePerm
    */
    nlePerm = undefined;
    /**
    * @member {module:model/PermNVDUB} ncaPerm
    */
    ncaPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} racPerm
    */
    racPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} rdcPerm
    */
    rdcPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} enaPerm
    */
    enaPerm = undefined;
    /**
    * @member {module:model/PermNY} crsPerm
    */
    crsPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} crbPerm
    */
    crbPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} nacPerm
    */
    nacPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} cpfPerm
    */
    cpfPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} rmsPerm
    */
    rmsPerm = undefined;
    /**
    * @member {module:model/PermNVU} wraPerm
    */
    wraPerm = undefined;
    /**
    * @member {module:model/PermNY} luiPerm
    */
    luiPerm = undefined;
    /**
    * @member {module:model/PermNVU} padPerm
    */
    padPerm = undefined;
    /**
    * @member {module:model/PermNVU} tadPerm
    */
    tadPerm = undefined;
    /**
    * @member {module:model/PermNVDUB} talPerm
    */
    talPerm = undefined;
    /**
    * @member {module:model/PermNVU} tecPerm
    */
    tecPerm = undefined;
    /**
    * @member {module:model/PermNVU} trlPerm
    */
    trlPerm = undefined;








}


