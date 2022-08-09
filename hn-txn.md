# Fill-in: Standard Format for Patient, Visit, and Special Record

- [Fill-in: Standard Format for Patient, Visit, and Special Record](#fill-in-standard-format-for-patient-visit-and-special-record)
  - [Abbreviation](#abbreviation)
  - [References](#references)
  - [Patient Data](#patient-data)
    - [Arguments for hook event](#arguments-for-hook-event)
      - [Example of `HN`](#example-of-hn)
    - [Parameters for data sending](#parameters-for-data-sending)
      - [Structure of `data`](#structure-of-data)
      - [Example of `data`](#example-of-data)
  - [Patient Secret Data](#patient-secret-data)
    - [Arguments for hook event](#arguments-for-hook-event-1)
      - [Object structure of `req` (request secret)](#object-structure-of-req-request-secret)
      - [Example of arguments](#example-of-arguments)
    - [Parameters for data sending](#parameters-for-data-sending-1)
      - [Structure of `data`](#structure-of-data-1)
      - [Example of `data`](#example-of-data-1)
  - [Visit data](#visit-data)
    - [Arguments for hook event](#arguments-for-hook-event-2)
      - [Object structure of `req` (request visit data)](#object-structure-of-req-request-visit-data)
      - [Example of `req`](#example-of-req)
    - [Parameters for data sending (Thai visit format)](#parameters-for-data-sending-thai-visit-format)
      - [Structure of `data`](#structure-of-data-2)
      - [Example of `data`](#example-of-data-2)
  - [Register and deregister to Special Records](#register-and-deregister-to-special-records)
    - [Arguments for hook autopilot event](#arguments-for-hook-autopilot-event)
      - [Object structure of `req` (request visit data)](#object-structure-of-req-request-visit-data-1)
      - [Example of `req`](#example-of-req-1)
    - [Arguments for hook coder rewrite event](#arguments-for-hook-coder-rewrite-event)
      - [Object structure of `req` (request visit data)](#object-structure-of-req-request-visit-data-2)
      - [Example of `req`](#example-of-req-2)
    - [Parameters for data sending](#parameters-for-data-sending-2)
      - [Structure of `data`](#structure-of-data-3)
      - [Example of `data`](#example-of-data-3)

## Abbreviation
* sio: Socket.IO
* `sio.emit({event}, ...{data})` : method to send data as an event

## References
* [FHIR](https://hl7.org/FHIR/)


## Patient Data  
* Need: 1st time of visit (only one time)
* URL: `https://fill-in.sati.co.th/hn-txn`
* Socket.IO namespace: `/`
* Event: `patient`
    
### Arguments for hook event
* Socket.IO namespace: `/`
* Hook event: `sio.on('patient', HN)`
  
| Arguments | Value Type          | Required | Default | Description                                                              |
| --------- | ------------------- | -------- | ------- | ------------------------------------------------------------------------ |
| HN        | array of string(64) | Y        |         | list of **hashed HN** which Fill in&reg; requires `data` in data sending |
  
#### Example of `HN`
```JSONC
["HN11111", "r22222", "33333", "45678"]
```

### Parameters for data sending 
* Data sending: `sio.emit('patient', data, register=true)`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 1000 rows
  
| Parameters | Value Type      | Required | Default | Description                                            |
| ---------- | --------------- | -------- | ------- | ------------------------------------------------------ |
| data       | array of object | Y        |         | patient data, describe below                           |
| register   | bool            | Y        | `true`  | `True` or `1` = add or update, `False` or `0` = delete |
  
#### Structure of `data`  
List of Object which contains ...  
  
| Key       | Value Type             | Required | Default | Description                                                                                                                                                    |
| --------- | ---------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HN        | string(64)             | Y        |         | **Hashed** hospital number                                                                                                                                     |
| birthDate | string(date, datetime) | Y        |         | Date or datetime of birth in SQL format (`YYYY-mm-dd` or `YYYY-MM-dd HH:mm:ss`) or ISO8601 format (`YYYY-mm-ddTHH:mm:ss.sssz` or `YYYY-mm-ddTHH:mm:ss.sss+zz`) |
| gender    | bool                   | Y        |         | `True` or `1` = male, `False` or `0` = female                                                                                                                  |
  
  
  
#### Example of `data`
```JSONC
[
    {
        "HN": "01234",
        "birthDate": "1987-06-05",
        "gender": 0
    },
    {
        "HN": "56789",
        "birthDate": "2000-12-31",
        "gender": 1
    }
]
```
  
## Patient Secret Data
* Need: 
  * Coder loads patient data to work desk.
  * Export data requiring patient secret.
* The Secret data will cache in Fill in&reg; within 4 hours
* URL: `https://fill-in.sati.co.th/hn-txn`

    
### Arguments for hook event
* Socket.IO namespace: `/`
* Hook event: `sio.on('patientSecret', req)`
  
| Arguments | Value Type      | Required | Description            |
| --------- | --------------- | -------- | ---------------------- |
| req       | array of object | Y        | list of request secret |
  

#### Object structure of `req` (request secret)

| Arguments | Value Type           | Required | Default | Description                                                   |
| --------- | -------------------- | -------- | ------- | ------------------------------------------------------------- |
| HN        | array of string(64)  | Y        |         | Hashed HN which Fill in&reg; requires secret `data`           |
| TXN       | string(64)&vert;null | N        | `null`  | Hashed TXN which Fill in&reg; requires secret `data`.         |
| reason    | string(64)           | Y        |         | list of reason why Fill in&reg; requires secret `data`        |
| staff     | string(64)           | Y        |         | user&apos; employee code or email who requires secret `data`. |
  
  
#### Example of arguments
```JSONC
[
    {"HN":"55/5555", "TXN": "A90909", "reason":"export complete th:sss:NCD menu", "staff":"S123"},
    {"HN":"e5555", "TXN": "0909", "reason":"coder work desk", "staff":"employee@organization.com"}
]
```
  
### Parameters for data sending  
* Socket.IO namespace: `/`
* Data sending: `sio.emit('patientSecret', data)`
* URL: `https://fill-in.sati.co.th/secret`
* Socket.IO namespace: `/`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 1000 rows
  
| Parameters | Value Type      | Required | Default | Description                  |
| ---------- | --------------- | -------- | ------- | ---------------------------- |
| data       | array of object | Y        |         | patient data, describe below |
  
#### Structure of `data`  
List of Object which contains ...  
  
| Key        | Value Type           | Required | Default | Description            |
| ---------- | -------------------- | -------- | ------- | ---------------------- |
| HN         | string               | Y        |         | Hash of HN in request  |
| TXN        | string               | N        | `null`  | Hash of TXN in request |
| realHN     | string(64)           | Y        |         | Hospital number        |
| realTXN    | string(64)&vert;null | N        | `null`  | Transaction number     |
| title      | string(64)           | N        | `NULL`  | title of name          |
| firstname  | string(64)           | Y        |         | First name             |
| middlename | string(64)           | N        | `NULL`  | Middle name            |
| lastname   | string(64)           | Y        |         | Last name              |
  

#### Example of `data`
```JSONC
[
    {
        "HN": "01234",
        "realHN": "2562525",
        "title": "นาย",
        "firstname": "กกกกกกกก",
        "lastname": "ขขขขขขข"
    },
    {
        "HN": "56789",
        "TXN": "156da19453",
        "realHN": "564654",
        "realTXN": "901234",
        "title": "Miss",
        "firstname": "Abcdefg",
        "middlename": "Hijklmn Opqrst",
        "lastname": "Uvwxyz"
    }
]
```
  
## Visit data
* Need: every visit (OPD/IPD)
* URL: `https://fill-in.sati.co.th/hn-txn`
* Socket.IO namespace: `/`
  
    
### Arguments for hook event
* Socket.IO namespace: `/`
* Hook event: `sio.on('visit', req)`
  
| Arguments | Value Type                                         | Required | Description                |
| --------- | -------------------------------------------------- | -------- | -------------------------- |
| req       | Array&lt;Object&lt;string,string&vert;bool&gt;&gt; | Y        | list of request visit data |
  
#### Object structure of `req` (request visit data)

| Arguments | Value Type          | Required | Default | Description                                         |
| --------- | ------------------- | -------- | ------- | --------------------------------------------------- |
| HN        | array of string(64) | Y        |         | Hashed HN which Fill in&reg; requires `data`        |
| TXN       | string(64)          | Y        |         | Hashed TXN which Fill in&reg; requires `data`.      |
| IPD       | bool                | Y        |         | (`true` or `1` if IPD case, `false` or `0` for OPD) |
  
  
#### Example of `req`
```JSONC
[
    {"HN":"55/5555", "TXN": "A90909", "IPD": false},
    {"HN":"315646", "TXN": "566410909", "IPD": true}
]
```
  

### Parameters for data sending (Thai visit format)  
* Socket.IO namespace: `/`
* Data sending: `sio.emit('thVisit', data, register=true)`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 300-500 rows
  
| Parameters | Value Type      | Required | Default | Description                                            |
| ---------- | --------------- | -------- | ------- | ------------------------------------------------------ |
| data       | array of object | Y        |         | TXN data, describe below                               |
| register   | bool            | N        | `true`  | `True` or `1` = add or update, `False` or `0` = delete |
  

#### Structure of `data`  
List of Object which contains ...  

  | Key             | Value Type           | Required | Default                     | Description                                                                                                                      |
  | --------------- | -------------------- | -------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
  | HN              | string(64)           | Y        |                             | Hashed hospital number                                                                                                           |
  | TXN             | string(64)           | Y        |                             | Hashed Transaction number of visit or admission. **The OPD visit number should not be duplicated with IPD admission number.   ** |
  | type            | bool                 | Y        |                             | `True` or `1` = IPD, `False` or `0` = OPD                                                                                        |
  | visitTime       | datetime             | Y        |                             | Visit datetime                                                                                                                   |
  | dischargeTime   | datetime             | Y        |                             | Discharge datetime                                                                                                               |
  | relatedTXN      | Array of string(64)  | N        | `[]`                        | hashing vaules of related TXN e.g. TXN of refered OPD, TXN of OPD which patient is admitted.                                     |
  | lengthOfStay    | unsigned int         | N        | `dischargeTime - visitTime` | Adjusted length of staying by remained time and leave day                                                                        |
  | dischargeStatus | unsigned int (0 - 9) | N        |                             | Discharge status as the description in [Thai Medical Record Audit Guideline](https://online.pubhtml5.com/pcqh/eqfr/#p=20)        |
  | dischargeType   | unsigned int (0 - 9) | N        |                             | Discharge type as the description in [Thai Medical Record Audit Guideline](https://online.pubhtml5.com/pcqh/eqfr/#p=20)          |
  | coverage        | Array of string      | N        | `[]`                        | Care coverage: the input must be in [list of care coverages](care-coverage.md)                                                   |
  
[Thai Medical Record Audit Guideline](https://online.pubhtml5.com/pcqh/eqfr/#p=20)



#### Example of `data`
```JSONC
[
    {
        "HN":"00000",
        "TXN": "123456789",
        "type": 0,
        "visitTime": "2022-02-02T20:22:02Z",
        "dischargeTime": "2022-02-02T22:22:22Z",
        "dischargeStatus": 2,
        "dischargeType": 1
    },
    {
        "HN":"00001",
        "TXN": "2345678",
        "type": 0,
        "visitTime": "2022-02-02T22:22:22Z",
        "dischargeTime": "2022-02-22T02:20:00Z",
        "dischargeStatus": 3,
        "dischargeType": 5
    },
    {
        "HN":"00001",
        "TXN": "A987654VIP",
        "type": 1,
        "visitTime": "2022-02-02T02:20:00Z",
        "dischargeTime": "2022-02-22T22:22:22Z",
        "relatedTXN": ["2345678"],
        "dischargeStatus": 2,
        "dischargeType": 1,
        "lengthOfStay": 23
    }
]
```
  
## Register and deregister to Special Records  
To register or deregister patient to special records, i.e. chronic disease, one day surgery, well-baby clinic, antenatal care  
* Need: depend on the criteria of the record
* URL: `https://fill-in.sati.co.th/record`
* Socket.IO namespace: `/`
  
### Arguments for hook autopilot event
* Socket.IO namespace: `/autopilot`
* Hook event: `sio.on('specialRecord', req)`
* Only autopilot mode
  
| Arguments | Value Type                                         | Required | Description                         |
| --------- | -------------------------------------------------- | -------- | ----------------------------------- |
| req       | Array&lt;Object&lt;string,string&vert;bool&gt;&gt; | Y        | list of request special record data |
  
#### Object structure of `req` (request visit data)

| Arguments | Value Type          | Required | Description                                   |
| --------- | ------------------- | -------- | --------------------------------------------- |
| HN        | array of string(64) | Y        | HN which Fill in&reg; requires `data`         |
| TXN       | string(64)          | Y        | TXN which Fill in&reg; requires `data`.       |
| reason    | string(64)          | Y        | list of reason why Fill in&reg; requires code |
| choice    | array of boolean    | N        | list of choice                                |
  
  
#### Example of `req`
```JSONC
[
    {"HN":"55/5555", "TXN": "A90909", "reason": "1st diagnosis for DM. Register to special record?", "choice": ["th:sss:NCD:DM", null]},
    {"HN":"315646", "TXN": "566410909", "reason": "Receive drug for HT. Register to special record?", "choice": ["th:sss:NCD:HT", null]}
]
```
    
  
### Arguments for hook coder rewrite event
* Socket.IO namespace: `/rewrite`
* Hook event: `sio.on('specialRecord', req)`
* Rewrite items 
  
| Arguments | Value Type                                         | Required | Description                         |
| --------- | -------------------------------------------------- | -------- | ----------------------------------- |
| req       | Array&lt;Object&lt;string,string&vert;bool&gt;&gt; | Y        | list of request special record data |
  
#### Object structure of `req` (request visit data)

| Arguments | Value Type          | Required | Description                                                                           |
| --------- | ------------------- | -------- | ------------------------------------------------------------------------------------- |
| HN        | array of string(64) | Y        | hashed HN which Fill in&reg; requires `data`                                          |
| TXN       | string(64)          | Y        | hashed TXN which Fill in&reg; requires `data`.                                        |
| reason    | string(64)          | Y        | list of reason why Fill in&reg; requires code                                         |
| staff     | string(64)          | N        | user (staff or employee) &apos;s code who rewrite data, null for fill-in autocomplete |
| key       | string              | Y        | key of item to write back e.g. `"th:sss:NCD:DM"`                                      |
| ~~value~~ | Any                 | N        | ~~value of item to write back~~                                                       |
  
#### Example of `req`
```JSONC
[
    {"HN":"55/5555", "TXN": "A90909", "reason": "Coder ({staff}) added criteria for 1st diagnosis for DM.", "key": "th:sss:NCD:DM", "staff":"C1234"},
    {"HN":"315646", "TXN": "566410909", "reason": "The Fill-in autocomplete added because the patient receive drug for HT.", "key": "th:sss:NCD:HT"}
]
```
   

### Parameters for data sending  
* Data sending: `sio.emit('specialRecord', recordName, data, register=true)`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 300-500 rows
  
| Parameters | Value Type      | Required | Default | Description                                           |
| ---------- | --------------- | -------- | ------- | ----------------------------------------------------- |
| recordName | string          | Y        |         | [Special record abbreviation](special-record.md)      |
| data       | array of object | Y        |         | record data, describe below                           |
| register   | bool            | N        | `True`  | `True` or `1` = register, `False` or `0` = deregister |

#### Structure of `data`  
List of Object which contains ...  

  | Key       | Value Type | Required | Default | Description                                                                    |
  | --------- | ---------- | -------- | ------- | ------------------------------------------------------------------------------ |
  | HN        | string(64) | Y        |         | Hospital number                                                                |
  | TXN       | string(64) | Optional |         | Transaction number of visit or admission, **depend on the criteria of record** |
  | eventTime | datetime   |          | `now()` | register, deregister datetime                                                  |
  | staff     | string     |          | `NULL`  | Staff or employee number who register the record                               |



#### Example of `data`
```JSONC
[
    {
        "HN": "121561",
        "TXN": "123456789",
        "type": 0,
        "eventTime": "2022-02-02T20:22:02Z",
        "register": 1,
        "staff": "1555"
    },
    {
        "HN": "121561",
        "TXN": "123456789",
        "type": 0,
        "eventTime": "2022-02-02T20:22:02Z",
        "register": 0,
        "staff": "1555"
    },
]
```  
