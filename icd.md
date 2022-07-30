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
{"ICD10-2016": ["E11.9","E12.9"], "ICD10-TM-2016": ["E11.9","E12.9"]}
```
  
### Parameters for data sending  
* Data sending: `sio.emit('thDiagnosisCode', data)`
* URL: `https://fill-in.sati.co.th/code`
* Socket.IO namespace: `/`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 1000 rows
  
  
| Key     | Value Type | Required | Default | Description                                      |
| ------- | ---------- | -------- | ------- | ------------------------------------------------ |
| HN      | string(64) | Y        |         | Hospital number                                  |
| TXN     | string(64) | Y        |         | Transaction number of visit or admission         |
| version | string(32) | Y        |         | version of diagnosis code: e.g. ICD-10-2016      |
| code    | string     | Y        |         | Diagnosis code code                              |
| type    | int        | Y        |         | Diagnosis type by Thai Medical Record            |
| staff   | string     | N        | `NULL`  | Staff or employee number who register the record |
  

### Type of Diagnosis code by Thai Medical Record
* `0` = Cancel (remove from record)
* `1` = Principal Diagnosis
* `2` = Comorbidity which statistically increases length of stay at least one day
* `3` = Complication which statistically increases length of stay at least one day
* `4` = Other diagnosis
* `5` = External cause of injury
  
  
## Procedure


| Key     | Value Type | Required | Default | Description                                                       |
| ------- | ---------- | -------- | ------- | ----------------------------------------------------------------- |
| HN      | string(64) | Y        |         | Hospital number                                                   |
| TXN     | string(64) | Y        |         | Transaction number of visit or admission                          |
| version | string(32) | Y        |         | version of diagnosis code: e.g. ICD-9, ICD-9 (2000)               |
| code    | string     | Y        |         | Procedure code code                                               |
| type    | bool       | N        | `True`  | `0` or `False` = Cancel (remove from record), `1` or `True` = Add |
| staff   | string     | N        | `NULL`  | Staff or employee number who register the record                  |

## Accepted Coding standard

### Thai

| Coverage Scheme             | Effective date | Diagnosis        | Procedure    | Reimbursement |
| --------------------------- | -------------- | ---------------- | ------------ | ------------- |
| Thai Social Security Scheme |                | ICD10-2016 (WHO) | ICD9-CM-2015 | Thai DRG 6.3  |