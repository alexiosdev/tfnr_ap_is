# TfnrApIs.PointerTransferResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controlRespOrg** | **String** | Control Resp Org Id | [optional] 
**num** | **String** | Dialed number of the record  | [optional] 
**numStatus** | **Number** | Number Status | [optional] 
**effDtTm** | **String** | Effective date and time of the records | [optional] 
**apprStat** | [**ApprStat**](ApprStat.md) |  | [optional] 
**lstEffDtTms** | [**[LstEffDtTms]**](LstEffDtTms.md) | Last Effective date and time list | [optional] 
**perms** | [**Permissions**](Permissions.md) |  | [optional] 
**prevUsr** | **String** | Logon Id of the previous person to update the customer record  | [optional] 
**lastUpDt** | **String** | Last update data and time | [optional] 
**lastUsr** | **String** | Last User to update the record | [optional] 
**dueDt** | **String** | Due Date | [optional] 
**hldIndFlag** | [**BoolYN**](BoolYN.md) | Indicates whether or not a hold has been placed on the due date | [optional] 
**svcOrderNum** | **String** | Service Order Number. 13 bytes identifier. Range can be from 4 to 13 bytes. First character must be alphabetic. Second thru twelfth characters must be alphanumeric thirteenth character must be alphabetic. Required unless sf field is used either sf or so is required  | [optional] 
**suppFormNum** | **String** | Supplemental Form Number. 6 bytes text string. Maximum of 6 bytes alphanumeric. | [optional] 
**referral** | [**BoolYN**](BoolYN.md) |  | [optional] 
**notes** | **String** | Notes. Naximum of 151 bytes. Any notes on the Service Order or Supplemental Form which need to be stored and for which no specific field exists  | [optional] 
**agent** | **String** | On Line Agent for Customer. 5 bytes text string. Alphanumeric values only | [optional] 
**co** | **String** | Company that sold SMS access | [optional] 
**onAccCust** | **String** | On-line Access Customer. Alphanumeric values only  | [optional] 
**endSubAddr** | **String** | End Subscriber Address(formerly Listing Address) 75 bytes string | [optional] 
**conName** | **String** | Name of Contact. No numbers allowed | [optional] 
**conTel** | **String** | Contact Phone Number | [optional] 
**aos** | [**Aos**](Aos.md) |  | [optional] 
**endSub** | **[String]** | End Subscriber. Not allowed for automation. 75 bytes text string | [optional] 
**destNums** | [**[DestNums]**](DestNums.md) | Destination Telephone Numbers list | [optional] 
**errList** | [**ErrList**](ErrList.md) |  | [optional] 


