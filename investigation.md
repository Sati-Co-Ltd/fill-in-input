# Fill-in: Standard Format for Diagnostic Report of Laboratory, Pathology, Imaging, and Other Investigations

## Path or Socket.IO event
SIO: investigation `sio.emit('investigation', data)`

## Standard of input

| Key       | Value Type | Required | Default | Description                                                     |
| --------- | ---------- | -------- | ------- | --------------------------------------------------------------- |
| HN        | string(64) | Y        |         | Hospital number                                                 |
| TXN       | string(64) | Y        |         | Transaction number of visit or admission                        |
| reportId  | string(64) | Y        |         | Unique number of each investigation                             |
| study     | string     | Y        |         | Abbreviation of investigation                                   |
| report    | string     | number   | `NULL`  | result of investigation, can be string, integer, or float.      |
| collected | datetime   | Y        |         | Datetime when the specimen is collected, or the study is begun. |
| issued    | datetime   |          |         | Datetime when the result is issued.                             |


Normally, investigation contains subitems
```markdown
Investigation name:
* Subitem 1: result1 [, normal range 1]
* Subitem 2: result2 [, normal range 2]
```  
For example, `CBC` (Complete Blood Count)  
```markdown
CBC:
* Hb: 12.1
* Hct: 48.5
* WBC: 8700
...
```
But, some have only one result: `Film L-S spine lateral view`  
```markdown
Film L-S spine lateral view:
* Report: ...
```


Please prepare data into acceptable formats below, otherwise please contact us.


### 1. Flatten style
Simple and fastest to parse style. All subitems are flatten and joined with investigation abbreviation as `{investigation}:{subitem}`.  

```JSONC
[
    {
        "TXN": "55555",
        "reportId": "Ac5586",
        "study": "lab:CBC:Hb",
        "report": 12.3,
        "collected": "2020-10-30T12:34:56Z",
        "issued": "2020-10-30T13:34:56Z"
    },
    {
        "TXN": "55555",
        "reportId": "Ac5586",
        "study": "lab:CBC:WBC",
        "report": 12345,
        "collected": "2020-10-30T12:34:56Z",
        "issued": "2020-10-30T13:34:56Z"
    },
    {
        "TXN": "567",
        "reportId": "999dsc558d",
        "study": "imaging:film:shoulder:AP:Lt",
        "report": "...............",
        "collected": "2020-10-30T12:34:56Z",
        "issued": "2020-10-31T13:34:56Z"
    }
]
```

### 2. Nested JSON

```JSONC
[
    {
        "TXN": "55555",
        "reportId": "Ac5586",
        "study": "lab:CBC",
        "report": {
            "Hb":12.3,
            "WBC": 12345
        },
        "collected": "2020-10-30T12:34:56Z",
        "issued": "2020-10-30T13:34:56Z"
    },
    {
        "TXN": "567",
        "reportId": "999dsc558d",
        "study": "imaging:film:shoulder:AP:Lt",
        "report": "...............",
        "collected": "2020-10-30T12:34:56Z",
        "issued": "2020-10-31T13:34:56Z"
    }
]
```
### 3. Comma-Separated Value

```JSONC
[
    {
        "TXN": "55555",
        "reportId": "Ac5586",
        "study": "lab:CBC",
        "report": "Hb,12.3
WBC,12345",
        "report": {
            "Hb":12.3,
            "WBC": 12345
        },
        "collected": "2020-10-30T12:34:56Z",
        "issued": "2020-10-30T13:34:56Z"
    },
    {
        "TXN": "567",
        "reportId": "999dsc558d",
        "study": "imaging:film:shoulder:AP:Lt",
        "report": "...............",
        "collected": "2020-10-30T12:34:56Z",
        "issued": "2020-10-31T13:34:56Z"
    }
]
```


### 4. DataSoft&reg;  
The items contains semicolon-separated list of subitems. The report contains semicolon-separated list of report and pipe(|)-separated columns.
```JSONC
[
    {
        "TXN": "55555",
        "reportId": "Ac5586",
        "study": "lab:CBC",
        "items": "Hb;WBC",
        "report": "12.3;12345|;(some note)",
        "collected": "2020-10-30T12:34:56Z",
        "issued": "2020-10-30T13:34:56Z"
    },
    {
        "TXN": "567",
        "reportId": "999dsc558d",
        "study": "imaging:film:shoulder:AP:Lt",
        "report": "...............",
        "collected": "2020-10-30T12:34:56Z",
        "issued": "2020-10-31T13:34:56Z"
    }
]
```


