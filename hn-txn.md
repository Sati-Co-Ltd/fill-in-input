# Fill-in: Standard Format for Patient, Visit, and Special Record

## Abbreviation
* sio: Socket.IO
* `sio.emit({event}, ...{data})` : method to send data as an event

## References
* [FHIR](https://hl7.org/FHIR/)


## Patient Data  
* Need: 1st time of visit (only one time)
* Event: `patient`
* Hook event: `sio.on('patient', hn)`
* Data sending: `sio.emit('patient', data, register=true)`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 1000 rows
    
### Arguments for hook event

| Arguments | Value Type          | Required | Default | Description                                                   |
| --------- | ------------------- | -------- | ------- | ------------------------------------------------------------- |
| hn        | array of string(64) | Y        |         | list of HN which Fill in&reg; requires `data` in data sending |
  
#### Example of `hn`
```JSONC
["HN11111", "HN22222", "33333", "45678"]
```

### Parameters for data sending 
| Parameters | Value Type      | Required | Default | Description                                            |
| ---------- | --------------- | -------- | ------- | ------------------------------------------------------ |
| data       | array of object | Y        |         | patient data, describe below                           |
| register   | bool            | Y        | `true`  | `True` or `1` = add or update, `False` or `0` = delete |
  
#### Structure of `data`  
List of Object which contains ...  
  
| Key       | Value Type             | Required | Default | Description                                                                                                                                                    |
| --------- | ---------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HN        | string(64)             | Y        |         | Hospital number                                                                                                                                                |
| birthDate | string(date, datetime) | Y        |         | Date or datetime of birth in SQL format (`YYYY-mm-dd` or `YYYY-MM-dd HH:mm:ss`) or ISO8601 format (`YYYY-mm-ddTHH:mm:ss.sssz` or `YYYY-mm-ddTHH:mm:ss.sss+zz`) |
| gender    | bool                   | Y        |         | `True` or `1` = male, `False` or `0` = female                                                                                                                  |
| name      | string                 | N        | `NULL`  | Full name which is temporary stored in cloud                                                                                                                   |

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
Patient data  
* Need: 
  * Coder loads patient data to work desk.
  * Export data requiring patient secret.
* The Secret data will cache in Fill in&reg; within 4 hours
* Event: `patient`
* Hook event: `sio.on('patient', hn, txn, reason, userCode)`
* Data sending: `sio.emit('patient', data)`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 1000 rows
    
### Arguments for hook event

| Arguments | Value Type                        | Required | Default | Description                                                                                            |
| --------- | --------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------ |
| hn        | array of string(64)               | Y        |         | list of HN which Fill in&reg; requires secret `data`                                                   |
| txn       | Array&lt;string(64)&vert;null&gt; | Y        |         | list of TXN which Fill in&reg; requires secret `data`. Returns `null` if request is not related to TXN |
| reason    | array of string(64)               | Y        |         | list of reason why Fill in&reg; requires secret `data`                                                 |
| userCode  | array of string(64)               | Y        |         | list of user employee code who requires secret `data`. Returns user email in case of no employee code  |
  
  
#### Example of arguments
```JSONC
{
    "hn":["HN11111", "HN22222", "33333", "45678"],
    "txn": ["989898", "AD00125", null, "352265"],
    "reason": ["export complete th:sss:NCD menu", "coder work desk", "export high risk patient menu", "export IPD menu"],
    "userCode": ["S123", "c999", "employee@organize.com", "2530"]
}
```

### Parameters for data sending 
| Parameters | Value Type      | Required | Default | Description                  |
| ---------- | --------------- | -------- | ------- | ---------------------------- |
| data       | array of object | Y        |         | patient data, describe below |
  
#### Structure of `data`  
List of Object which contains ...  
  
| Key        | Value Type | Required | Default | Description     |
| ---------- | ---------- | -------- | ------- | --------------- |
| HN         | string(64) | Y        |         | Hospital number |
| title      | string(64) | N        | `NULL`  | title of name   |
| firstname  | string(64) | Y        |         | First name      |
| middlename | string(64) | N        | `NULL`  | Middle name     |
| lastname   | string(64) | Y        |         | Last name       |
  

#### Example of `data`
```JSONC
[
    {
        "HN": "01234",
        "title": "นาย",
        "firstname": "กกกกกกกก",
        "lastname": "ขขขขขขข"
    },
    {
        "HN": "56789",
        "title": "Miss",
        "firstname": "Abcdefg",
        "middlename": "Hijklmn",
        "lastname": "Opqrst Uvwxyz"
    }
]
```
  
## Visit data
* Need: every visit (OPD/IPD)
* Event: patient `sio.emit('visit', data)`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 300-500 rows
  
### Data  
List of Object which contains ...  

  | Key             | Value Type           | Required | Default                     | Description                                                                                                               |
  | --------------- | -------------------- | -------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
  | HN              | string(64)           | Y        |                             | Hospital number                                                                                                           |
  | TXN             | string(64)           | Y        |                             | Transaction number of visit or admission. **The OPD visit number should not be duplicated with IPD admission number.   ** |
  | type            | bool                 | Y        |                             | `True` or `1` = IPD, `False` or `0` = OPD                                                                                 |
  | visitTime       | datetime             | Y        |                             | Visit datetime                                                                                                            |
  | dischargeTime   | datetime             | Y        |                             | Discharge datetime                                                                                                        |
  | relatedTXN      | Array of string(64)  | N        | `[]`                        | related TXN e.g. TXN of refered OPD, TXN of OPD which patient is admitted.                                                |
  | lengthOfStay    | unsigned int         | N        | `dischargeTime - visitTime` | Adjusted length of staying by remained time and leave day                                                                 |
  | dischargeStatus | unsigned int (0 - 9) | N        |                             | Discharge status as the description in [Thai Medical Record Audit Guideline](https://online.pubhtml5.com/pcqh/eqfr/#p=20) |
  | dischargeType   | unsigned int (0 - 9) | N        |                             | Discharge type as the description in [Thai Medical Record Audit Guideline](https://online.pubhtml5.com/pcqh/eqfr/#p=20)   |
  | coverage        | Array of string      | N        | `[]`                        | Care coverage: the input must be in [list of care coverages](care-coverage.md)                                            |
  
[Thai Medical Record Audit Guideline](https://online.pubhtml5.com/pcqh/eqfr/#p=20)



### Example
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
  
## Register, Deregister to Special Records  
To register or deregister patient to special records, i.e. chronic disease, one day surgery, well-baby clinic, antenatal care  
* Need: depend on the criteria of the record
* Event: special_record `sio.emit('special_record', recordName, register, data)`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 300-500 rows
  
## Parameters
| Parameters | Value Type | Required | Default | Description                                           |
| ---------- | ---------- | -------- | ------- | ----------------------------------------------------- |
| recordName | string     | Y        |         | [Special record abbreviation](special-record.md)      |
| register   | bool       | Y        |         | `True` or `1` = register, `False` or `0` = deregister |

### Data  
List of Object which contains ...  

  | Key       | Value Type | Required | Default | Description                                                                    |
  | --------- | ---------- | -------- | ------- | ------------------------------------------------------------------------------ |
  | HN        | string(64) | Y        |         | Hospital number                                                                |
  | TXN       | string(64) | Optional |         | Transaction number of visit or admission, **depend on the criteria of record** |
  | eventTime | datetime   |          | `now()` | register, deregister datetime                                                  |
  | staff     | string     |          | `NULL`  | Staff or employee number who register the record                               |



### Example
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
