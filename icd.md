# Diagnosis and Procedure Code


## Diagnosis Code
* Need: every visit (OPD/IPD)
* URL: `https://fill-in.sati.co.th/code`
* Socket.IO namespace: `/`
  
    
### Arguments for hook event
* Hook event: `sio.on('diagnosisCode', hn, txn, reason, choice)`
  
| Arguments | Value Type                | Required | Description                                   |
| --------- | ------------------------- | -------- | --------------------------------------------- |
| hn        | string(64)                | Y        | list of HN which Fill in&reg; requires code   |
| txn       | string(64)&vert;null      | Y        | list of TXN which Fill in&reg; requires code. |
| reason    | string(64)                | Y        | list of reason why Fill in&reg; requires code |
| choice    | Object of array of string | N        | Key: Coding standard, value: list of choice   |
  
#### Example of choice
```JSONC
{"ICD10-2016": ["E119","E129"], "ICD10-TM-2016": ["E119","E129"]}
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
* Hook event: `sio.on('procedureCode', hn, txn, reason, choice)`
  
| Arguments | Value Type                | Required | Description                                   |
| --------- | ------------------------- | -------- | --------------------------------------------- |
| hn        | string(64)                | Y        | list of HN which Fill in&reg; requires code   |
| txn       | string(64)&vert;null      | Y        | list of TXN which Fill in&reg; requires code. |
| reason    | string(64)                | Y        | list of reason why Fill in&reg; requires code |
| choice    | Object of array of string | N        | Key: Coding standard, value: list of choice   |
  
#### Example of choice
```JSONC
{"ICD9-CM-2015": ["8611","8622"]}
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