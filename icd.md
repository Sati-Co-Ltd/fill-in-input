# ICD-9 and ICD-10


## ICD-10


| Key   | Value Type | Required | Default | Description                                                                                                                                                |
| ----- | ---------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TXN   | string(64) | Y        |         | Transaction number of visit or admission                                                                                                                   |
| ICD10 | string     | Y        |         | ICD-10 code                                                                                                                                                |
| type  | int        | Y        |         | `0` = Cancel (remove from record), `1` = Principal diagnosis, `2` = Comorbidity, `3` = Complication, `4` = Other diagnosis, `5` = External cause of injury |
| staff | string     | N        | `NULL`  | Staff or employee number who register the record                                                                                                           |



## ICD-9


| Key   | Value Type | Required | Default | Description                                                       |
| ----- | ---------- | -------- | ------- | ----------------------------------------------------------------- |
| TXN   | string(64) | Y        |         | Transaction number of visit or admission                          |
| ICD10 | string     | Y        |         | ICD-10 code                                                       |
| type  | bool       | N        | `True`  | `0` or `False` = Cancel (remove from record), `1` or `True` = Add |
| staff | string     | N        | `NULL`  | Staff or employee number who register the record                  |