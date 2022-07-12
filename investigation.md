# Fill-in: Standard Format for Diagnostic Report of Laboratory, Pathology, Imaging, and Other Investigations

Normally, laboratory investigation contains subitems
```markdown
Investigation name:
* Subitem 1: result1 [, normal range 1]
* Subitem 2: result2 [, normal range 2]
```

Please prepare data into acceptable formats below, otherwise please contact us.

## Standard of input

### 1. Flatten style
Simple and fastest to parse style. All subitems are flatten and joined with investigation abbreviation as `{investigation}:{subitem}`.  
```JSONC
[
    {
        "TXN": "55555",
        "reportId": "Ac5586",
        "study": "CBC:Hb",
        "report": 12.3
    },
    {
        "TXN": "55555",
        "reportId": "Ac5586",
        "study": "CBC:WBC",
        "report": 12345
    },
    {
        "TXN": "567",
        "reportId": "999dsc558d",
        "study": "CBC:Hb",
        "report": 11.1
    }
]
```

| Key       | Value Type | Required | Default | Description                                                     |
| --------- | ---------- | -------- | ------- | --------------------------------------------------------------- |
| TXN       | string(64) | Y        |         | Transaction number of visit or admission                        |
| reportId  | string(64) | Y        |         | Unique number of each investigation                             |
| study     | string     | Y        |         | Abbreviation of investigation                                   |
| report    | string     | number   | `NULL`  | result of investigation, can be string, integer, or float.      |
| collected | datetime   | Y        |         | Datetime when the specimen is collected, or the study is begun. |
| issued    | datetime   |          |         | Datetime when the result is issued.                             |


### 2. Nested JSON


### 3. DataSoft&reg;


## Laboratory nomenclature

