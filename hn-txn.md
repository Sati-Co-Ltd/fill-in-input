# Fill-in: Input Format of Data

## Abbreviation
* sio: Socket.IO
* `sio.emit({event}, {data})` : method to send data as an event

## References
* [FHIR](https://hl7.org/FHIR/)


## Patient Data  
* Need: 1st time of visit (only one time)
* Event: patient `sio.emit('patient', data)`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 1000 rows
  
### Data  
List of Object which contains ...  
  
| Key       | Value Type             | Required | Default | Description                                                                                                                                                    |
| --------- | ---------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HN        | string(64)             | Y        |         | Hospital number                                                                                                                                                |
| birthDate | string(date, datetime) | Y        |         | Date or datetime of birth in SQL format (`YYYY-mm-dd` or `YYYY-MM-dd HH:mm:ss`) or ISO8601 format (`YYYY-mm-ddTHH:mm:ss.sssz` or `YYYY-mm-ddTHH:mm:ss.sss+zz`) |
| gender    | bool                   | Y        |         | `True` or `1` = male, `False` or `0` = female                                                                                                                  |
| name      | string                 | N        | `NULL`  | Full name which is temporary stored in cloud                                                                                                                   |

### Example
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
  
  
## Visit data
* Need: every visit (OPD/IPD)
* Event: patient `sio.emit('visit', data)`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 300-500 rows
  
### Data  
List of Object which contains ...  

  | Key             | Value Type           | Required | Default                     | Description                                                                |
  | --------------- | -------------------- | -------- | --------------------------- | -------------------------------------------------------------------------- |
  | TXN             | string(64)           | Y        |                             | Transaction number of visit or admission                                   |
  | type            | bool                 | Y        |                             | `True` or `1` = IPD, `False` or `0` = OPD                                  |
  | visitTime       | datetime             | Y        |                             | Visit datetime                                                             |
  | dischargeTime   | datetime             | Y        |                             | Discharge datetime                                                         |
  | relatedTXN      | Array of string(64)  | N        | `[]`                        | related TXN e.g. TXN of refered OPD, TXN of OPD which patient is admitted. |
  | lengthOfStay    | unsigned int         | N        | `dischargeTime - visitTime` | Adjusted length of staying by remained time and leave day                  |
  | dischargeStatus | unsigned int (0 - 9) | N        |                             | Discharge status as the description in Thai Medical Record Audit Guideline |
  | dischargeType   | unsigned int (0 - 9) | N        |                             | Discharge type as the description in Thai Medical Record Audit Guideline   |
  
  
[Thai Medical Record Audit Guideline](https://online.pubhtml5.com/pcqh/eqfr/#p=20)

### Example
```JSONC
[
    {
        "TXN": "123456789",
        "type": 0,
        "visitTime": "2022-02-02T20:22:02Z",
        "dischargeTime": "2022-02-02T22:22:22Z",
        "dischargeStatus": 2,
        "dischargeType": 1
    },
    {
        "TXN": "2345678",
        "type": 0,
        "visitTime": "2022-02-02T22:22:22Z",
        "dischargeTime": "2022-02-22T02:20:00Z",
        "dischargeStatus": 3,
        "dischargeType": 5
    },
    {
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
* Event: special_record `sio.emit('special_record', recordName, data)`
* Maximum size of data per batch: 1 MB of JSON text &asymp; 300-500 rows
  
### Data  
List of Object which contains ...  

  | Key       | Value Type | Required | Default | Description                                                                    |
  | --------- | ---------- | -------- | ------- | ------------------------------------------------------------------------------ |
  | HN        | string(64) | Y        |         | Hospital number                                                                |
  | TXN       | string(64) | Optional |         | Transaction number of visit or admission, **depend on the criteria of record** |
  | type      | bool       | Y        |         | [type of TXN](#visit-data): `True` or `1` = IPD, `False` or `0` = OPD          |
  | register  | bool       | Y        |         | `True` or `1` = register, `False` or `0` = deregister                          |
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
