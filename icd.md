# Diagnosis and Procedure Code
- [Diagnosis and Procedure Code](#diagnosis-and-procedure-code)
  - [Diagnosis Code](#diagnosis-code)
    - [Arguments for hook event](#arguments-for-hook-event)
      - [Object structure of `req`](#object-structure-of-req)
      - [Example of choice](#example-of-choice)
    - [Parameters for data sending](#parameters-for-data-sending)
      - [Parameters](#parameters)
      - [Structure of `data`](#structure-of-data)
    - [Type of Diagnosis code by Thai Medical Record](#type-of-diagnosis-code-by-thai-medical-record)
    - [Example of `data`](#example-of-data)
  - [Procedure Code](#procedure-code)
    - [Arguments for hook event](#arguments-for-hook-event-1)
      - [Object structure of `req`](#object-structure-of-req-1)
      - [Example of choice](#example-of-choice-1)
    - [Parameters for data sending](#parameters-for-data-sending-1)
      - [Parameters](#parameters-1)
      - [Structure of `data`](#structure-of-data-1)
    - [Example of `data`](#example-of-data-1)
  - [Accepted Coding standard](#accepted-coding-standard)
    - [Thai](#thai)

## Diagnosis Code
* Need: every visit (OPD/IPD)
* URL: `https://fill-in.sati.co.th/code`
* Socket.IO namespace: `/`
  
    
### Arguments for hook event
* Hook event: `sio.on('diagnosisCode', req)`
* Only autopilot mode
  
  
| Arguments | Value Type                                         | Required | Description          |
| --------- | -------------------------------------------------- | -------- | -------------------- |
| req       | Array&lt;Object&lt;string,string&vert;bool&gt;&gt; | Y        | list of request code |
  
#### Object structure of `req`
  
| Arguments | Value Type                | Required | Description                                 |
| --------- | ------------------------- | -------- | ------------------------------------------- |
| hn        | string(64)                | Y        | HN which Fill in&reg; requires code         |
| txn       | string(64)&vert;null      | Y        | TXN which Fill in&reg; requires code.       |
| reason    | string(64)                | Y        | reason why Fill in&reg; requires code       |
| choice    | Object of array of string | N        | Key: Coding standard, value: list of choice |
  
#### Example of choice
```JSONC
[
    {
        "HN": "56/9875",
        "TXN": "A9856",
        "reason": "Add diagnosis code? Patient receives metformin.",
        "choice": {"ICD10-2016": ["E119","E129"], "ICD10-TM-2016": ["E119","E129"]}
    }
]
```
  
### Parameters for data sending  
* Data sending: `sio.emit('thDiagnosisCode', data, version, register=true)`
* URL: `https://fill-in.sati.co.th/code`
* Socket.IO namespace: `/`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 1000 rows
    
#### Parameters   
| Parameters | Value Type          | Required | Default          | Description                                            |
| ---------- | ------------------- | -------- | ---------------- | ------------------------------------------------------ |
| data       | array of object     | Y        |                  | patient data, describe below                           |
| version    | array of string(32) | Y        | `["ICD10-2016"]` | version of diagnosis code: e.g. ICD10-2016             |
| register   | bool                | Y        | `true`           | `True` or `1` = add or update, `False` or `0` = delete |
  
   
#### Structure of `data`  
List of Object which contains ...  
   
| Key   | Value Type | Required | Default | Description                                      |
| ----- | ---------- | -------- | ------- | ------------------------------------------------ |
| HN    | string(64) | Y        |         | Hospital number                                  |
| TXN   | string(64) | Y        |         | Transaction number of visit or admission         |
| code  | string     | Y        |         | Diagnosis code code, with/without dot `.`        |
| type  | int        | Y        |         | Diagnosis type by Thai Medical Record            |
| staff | string     | N        | `NULL`  | Staff or employee number who register the record |
  

### Type of Diagnosis code by Thai Medical Record
* `0` = Cancel (remove from record)
* `1` = Principal Diagnosis
* `2` = Comorbidity which statistically increases length of stay at least one day
* `3` = Complication which statistically increases length of stay at least one day
* `4` = Other diagnosis
* `5` = External cause of injury
  
### Example of `data`
```JSONC
[
    {
        "HN":"00000",
        "TXN": "123456789",
        "type": 1,
        "code": "E119",
        "staff": "M9999"
    },
    {
        "HN":"00000",
        "TXN": "123456789",
        "type": 2,
        "code": "I10",
        "staff": "M9999"
    },
    {
        "HN":"00001",
        "TXN": "2345678",
        "type": 1,
        "code": "S90.01",
        "staff": "M9999"
    },
    {
        "HN":"00001",
        "TXN": "2345678",
        "type": 5,
        "code": "X35",
        "staff": "M9999"
    }
]
```


## Procedure Code
* Need: every visit (OPD/IPD)
* URL: `https://fill-in.sati.co.th/code`
* Socket.IO namespace: `/`
  
    
### Arguments for hook event
* Hook event: `sio.on('procedureCode', req)`
* Only autopilot mode
  
  
| Arguments | Value Type                                         | Required | Description          |
| --------- | -------------------------------------------------- | -------- | -------------------- |
| req       | Array&lt;Object&lt;string,string&vert;bool&gt;&gt; | Y        | list of request code |
  
#### Object structure of `req`
  
| Arguments | Value Type                | Required | Description                                 |
| --------- | ------------------------- | -------- | ------------------------------------------- |
| HN        | string(64)                | Y        | HN which Fill in&reg; requires code         |
| TXN       | string(64)&vert;null      | Y        | TXN which Fill in&reg; requires code.       |
| reason    | string(64)                | Y        | reason why Fill in&reg; requires code       |
| choice    | Object of array of string | N        | Key: Coding standard, value: list of choice |
  
#### Example of choice
```JSONC
[
    {
        "HN": "56/9875",
        "TXN": "A9856",
        "reason": "Add Procedure code? Patient has order of biopsy in HIS.",
        "choice": {"ICD9-CM-2015": ["8611","8622"]}
    }
]
```
  
### Parameters for data sending  
* Data sending: `sio.emit('procedureCode', data, version, register=true)`
* URL: `https://fill-in.sati.co.th/code`
* Socket.IO namespace: `/`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 1000 rows
    
    
#### Parameters   
| Parameters | Value Type          | Required | Default          | Description                                            |
| ---------- | ------------------- | -------- | ---------------- | ------------------------------------------------------ |
| data       | array of object     | Y        |                  | patient data, describe below                           |
| version    | array of string(32) | Y        | `["ICD10-2016"]` | version of diagnosis code: e.g. ICD9-CM-2015           |
| register   | bool                | Y        | `true`           | `True` or `1` = add or update, `False` or `0` = delete |
  
   
#### Structure of `data`  
List of Object which contains ...  
   

| Key   | Value Type | Required | Default | Description                                      |
| ----- | ---------- | -------- | ------- | ------------------------------------------------ |
| HN    | string(64) | Y        |         | Hospital number                                  |
| TXN   | string(64) | Y        |         | Transaction number of visit or admission         |
| code  | string     | Y        |         | Procedure code code                              |
| staff | string     | N        | `NULL`  | Staff or employee number who register the record |
  

  
### Example of `data`
```JSONC
[
    {
        "HN":"00000",
        "TXN": "123456789",
        "code": "8611",
        "staff": "M9999"
    },
    {
        "HN":"00000",
        "TXN": "123456789",
        "code": "9071",
        "staff": "M9999"
    },
    {
        "HN":"00001",
        "TXN": "2345678",
        "code": "1721",
        "staff": "M9999"
    },
    {
        "HN":"00001",
        "TXN": "2345678",
        "code": "991",
        "staff": "M9999"
    }
]
```


## Accepted Coding standard

### Thai

| Coverage Scheme             | Effective date | Diagnosis  | Diagnosis  Explain                      | Procedure    | Procedure Explain                                        | Reimbursement |
| --------------------------- | -------------- | ---------- | --------------------------------------- | ------------ | -------------------------------------------------------- | ------------- |
| Thai Social Security Scheme |                | ICD10-2016 | ICD10 updated 2016 WHO original version | ICD9-CM-2015 | ICD9 updated 2015 Clinical Modification version Medicare | Thai DRG 6.3  |