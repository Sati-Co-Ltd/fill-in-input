# Laboratory nomenclature

- CBC  Absolute neutrophil count
- BUN, Cr, eGFR
- Blood Electrolyte, Ca, Mg, P
- UA
- UPCr
- LFT
- Hepatitis B
- anti-HCV
- 75g-OGTT
- Fasting Glucose
- Random Glucose
- Fasting Lipid Profile
- HbA1C
- Coagulation PT PTT
- TFT
- CD4+
- HIV Viral load
- Acetylcholine Receptor Antibody (AChR-Ab)
- Urine osmolarity
- Serum osmolarity
- Anti-native DNA (anti ds-DNA)
- Anti-SM
- Antiphospholipid Antibody
- Antinuclear antibody
- Coagulation Factor  (VIII, IX)

## Standard Nomenclature  
Prefix is `lab:`. Study name and subitem follows the prefix respectively, i.e. `lab:CBC:Hb`, `lab:UPCr`.  

## Complete Blood Count (CBC)

* Fill-in standard key: `lab:CBC`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Hb      | Hemoglobin       | `Hb`                  | `lab:CBC:Hb`          | float      | g/dL                |                               |
| Hct     | Hematocrit       | `Hct`                 | `lab:CBC:Hct`         | float      | %                   | in percentage value e.g. 49.1 |
| WBC     | White Blood Cell | `WBC`                 | `lab:CBC:WBC`         | float      | cell/mm<sup>3</sup> |                               |


## Urine Protein per Creatinine Ratio  
* Fill-in standard key: `lab:UPCr`
* Value type: float
* Unit: mg/g
* Description: 
