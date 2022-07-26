# ICD-9 and ICD-10


## Diagnosis


| Key     | Value Type | Required | Default | Description                                                                                                                                                |
| ------- | ---------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HN      | string(64) | Y        |         | Hospital number                                                                                                                                            |
| TXN     | string(64) | Y        |         | Transaction number of visit or admission                                                                                                                   |
| version | string(32) | Y        |         | version of diagnosis code: e.g. ICD-10, ICD-10 (2008)                                                                                                      |
| code    | string     | Y        |         | Diagnosis code code                                                                                                                                        |
| type    | int        | Y        |         | `0` = Cancel (remove from record), `1` = Principal diagnosis, `2` = Comorbidity, `3` = Complication, `4` = Other diagnosis, `5` = External cause of injury |
| staff   | string     | N        | `NULL`  | Staff or employee number who register the record                                                                                                           |



## Procedure


| Key     | Value Type | Required | Default | Description                                                       |
| ------- | ---------- | -------- | ------- | ----------------------------------------------------------------- |
| HN      | string(64) | Y        |         | Hospital number                                                   |
| TXN     | string(64) | Y        |         | Transaction number of visit or admission                          |
| version | string(32) | Y        |         | version of diagnosis code: e.g. ICD-9, ICD-9 (2000)               |
| code    | string     | Y        |         | Procedure code code                                               |
| type    | bool       | N        | `True`  | `0` or `False` = Cancel (remove from record), `1` or `True` = Add |
| staff   | string     | N        | `NULL`  | Staff or employee number who register the record                  |