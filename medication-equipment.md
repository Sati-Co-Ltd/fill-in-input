# Standard Format for Medication and Equipment


  | Key               | Value Type               | Required | Default | Description                                                                                                                 |
  | ----------------- | ------------------------ | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
  | HN                | string(64)               | Y        |         | Hospital number                                                                                                             |
  | TXN               | string(64)               | Y        |         | Transaction number of visit or admission. **The OPD visit number should not be duplicated with IPD admission number.   **   |
  | orderId           | string                   | Y        |         | Unique number for each row of medication or equipments                                                                      |
  | name              | string                   | Y        |         | name                                                                                                                        |
  | genericName       | string                   | N        |         | Generic name                                                                                                                |
  | ingredient        | JSON object, JSON string | N        |         | ingredient(s) `{'ingredient1':{'dose':30, 'unit':'mg'}}`                                                                    |
  | amount            | float                    | Y        |         | number of dispense                                                                                                          |
  | dosageInstruction | string                   | N        |         | how this row should be taken                                                                                                |
  | dailyDose         | float                    | N        |         | total dose in token day e.g. warfarin (2) 1x2 pc on Monday-Friday: dailyDose = 1 *2 = 2 doses                               |
  | dayInMonth        | float                    | N        |         | taken day in month (28 days), zero for single dose e.g. warfarin (2) 1x2 pc on Monday-Friday: dayInMonth = 20 day           |
  | code              | JSON object, JSON string | N        |         | Standard code for items `{"SNOMEDCT":"", "th:CGD":"aa","TLTM":"00"}`                                                        |
  | consumeTime       | datetime                 | Y        |         | Begining datetime when patient consumes the medication or use the equipments, if not record, use dispense datetime instead. |


## Example
```JSONC
[
    {
        "TXN":"A987654VIP",
        "orderId":"12502",
        "name":"Tylenol 500 mg, paracetamol(500)",
        "genericName": "paracetamol",
        "ingredient": {
            "paracetamol":{
                "dose":"500"
            }
        },
        "dosageInstruction":"1 tab PRN fever q 6 hr",
        "amount":10,
        "dailyDose": 2000,
        "dayInMonth":28,
        "code": {"SNOMEDCT":"", "th:CGD":"aa","TLTM":"00"},
        "consumeTime": "2022-01-23T10:35:42Z"
    },
    {
        "TXN":"A987654VIP",
        "orderId":"12502",
        "name":"Dynastat 40 mg, parecoxib(40)",
        "genericName": "parecoxib",
        "ingredient": {
            "parecoxib":{
                "dose":"40"
            }
        },
        "dosageInstruction":"1 amp iv stat",
        "amount":1,
        "dailyDose": 40,
        "dayInMonth":0,
        "code": {"SNOMEDCT":"", "th:CGD":"aa","TLTM":"00"},
        "consumeTime": "2022-01-23T10:35:42Z"
    },
]
```

## Equipments and procedure

  | Key         | Value Type               | Required | Default | Description                                                                                                                 |
  | ----------- | ------------------------ | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
  | HN          | string(64)               | Y        |         | Hospital number                                                                                                             |
  | TXN         | string(64)               | Y        |         | Transaction number of visit or admission. **The OPD visit number should not be duplicated with IPD admission number.   **   |
  | orderId     | string                   | Y        |         | Unique number for each row of  equipments or procedure                                                                      |
  | name        | string                   | Y        |         | name                                                                                                                        |
  | genericName | string                   | N        |         | Generic name                                                                                                                |
  | amount      | float                    | Y        |         | number of dispense                                                                                                          |
  | code        | JSON object, JSON string | N        |         | Standard code for items `{"SNOMEDCT":"", "th:CGD":"aa","TLTM":"00"}`                                                        |
  | consumeTime | datetime                 | Y        |         | Begining datetime when patient consumes the medication or use the equipments, if not record, use dispense datetime instead. |



## Example
```JSONC
[
    
    {
        "TXN":"A987654VIP",
        "orderId":"A12502",
        "name":"splint Lt ankle",
        "genericName": "application of splint",
        "amount":1,
        "code": {"SNOMEDCT":"", "th:CGD":"aa","TLTM":"00"},
        "consumeTime": "2022-01-23T10:35:42Z"
    },
    {
        "TXN":"A987654VIP",
        "orderId":"A12502",
        "name":"Axillary crutch, size L",
        "genericName": "axillary crutch",
        "amount":1,
        "code": {"SNOMEDCT":"", "th:CGD":"aa","TLTM":"00"},
        "consumeTime": "2022-01-23T10:35:42Z"
    }
]
```