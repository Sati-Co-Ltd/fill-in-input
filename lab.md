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

## Accepted value types

| type           | description                                                                                                                           | example        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| decimal, float | number with decimal point which will be parsed to exacted precision BigDecimal                                                        | `1.23`         |
| boolean        | positive or negative value: `true`, `1`, any string contains`"+"` or `"pos"`,  `false`, `0`, any string contains`"-"` or `"neg"`      | `true`         |
| grade          | negative, `trace`, 1+: any string contains `1`, 2+: any string contains `2`, 3+: any string contains `3`, 4+: any string contains `4` |
| range          | decimal or decimal range                                                                                                              | `0 - 1`, `3-5` |
| string         | Any string                                                                                                                            | `"yellow"`     |

## Complete Blood Count (CBC)

* Fill-in standard key: `lab:CBC`

| subitem    | full name                                 | Fill-in subitem style | Fill-in flatten style | value type | unit                 | description                   |
| ---------- | ----------------------------------------- | --------------------- | --------------------- | ---------- | -------------------- | ----------------------------- |
| Hb         | Hemoglobin                                | `Hb`                  | `lab:CBC:Hb`          | decimal    | g/dL                 |                               |
| Hct        | Hematocrit                                | `Hct`                 | `lab:CBC:Hct`         | decimal    | %                    | in percentage value e.g. 49.1 |
| WBC        | White Blood Cell                          | `WBC`                 | `lab:CBC:WBC`         | decimal    | cell/mm<sup>3</sup>  |                               |
| Neutrophil | Neutrophil                                | `N`                   | `lab:CBC:N`           | decimal    | %                    |                               |
| Eosinophil | Eosinophil                                | `E`                   | `lab:CBC:E`           | decimal    | %                    |                               |
| Basophil   | Basophil                                  | `B`                   | `lab:CBC:B`           | decimal    | %                    |                               |
| Lymphocyte | Lymphocyte                                | `L`                   | `lab:CBC:L`           | decimal    | %                    |                               |
| Monocyte   | Monocyte                                  | `M`                   | `lab:CBC:M`           | decimal    | %                    |                               |
| Platelet   | Platelet                                  | `Plt`                 | `lab:CBC:Plt`         | decimal    | cells/cu.mm.         |                               |
| RBC        | RBC count                                 | `RBC`                 | `lab:CBC:RBC`         | decimal    | x1000000 cells/cu.mm |                               |  |
| MCV        | Mean Corpuscular Volume                   | `MCV`                 | `lab:CBC:MCV`         | decimal    | fl.                  |                               |
| MCH        | Mean Corpuscular Hemoglobin               | `MCH`                 | `lab:CBC:MCH`         | decimal    | pq.                  |                               |
| MCHC       | Mean Corpuscular Hemoglobin Concentration | `MCHC`                | `lab:CBC:MCHC`        | decimal    | g/dl                 |                               |
| MPV        | Mean Platelet Volume                      | `MPV`                 | `lab:CBC:MPV`         | decimal    | fL.                  |                               |
| PDW        | Platelet Distribution Width               | `PDW`                 | `lab:CBC:PDW`         | decimal    | fL.                  |                               |
| ANC        | Absolute Neutrophil Count                 | `ANC`                 | `lab:CBC:ANC`         | decimal    | cells/cu.mm.         |                               |
| ALC        | Absolute Lymphocyte Count                 | `ALC`                 | `lab:CBC:ALC`         | decimal    | cells/cu.mm.         |                               |
| NRBC       | Nucleated Red Blood Cell                  | `NRBC`                | `lab:CBC:NRBC`        | decimal    | /100 WBC             |                               |
| RDW        | Red Cell Distribution Width               | `RDW`                 | `lab:CBC:RDW`         | decimal    | %                    |                               |
| P-LCR      | Platelet Large Cell Ratio                 | `P-LCR`               | `lab:CBC:P-LCR`       | decimal    | %                    |                               |
| RC         | Reticulocyte Count                        | `RC`                  | `lab:CBC:RC`          | decimal    | %                    |                               |

## Urine Protein per Creatinine Ratio  
* Fill-in standard key: `lab:UPCr`
* Value type: decimal
* Unit: mg/g
* Description:

| subitem          | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit  | description |
| ---------------- | ---------------- | --------------------- | --------------------- | ---------- | ----- | ----------- |
| Urine Protein    | Urine Protein    | `UP`                  | `lab:UPCr:UP`         | decimal    | mg/dl |             |
| Urine Creatinine | Urine Creatinine | `UCr`                 | `lab:UPCr:UCr`        | decimal    | mg/dl |             |


## Blood Urea Nitrogen and Creatine
* Fill-in standard key: `lab:bloodNitrogen`
* Value type: decimal
* Unit: mg/g
* Description:

| subitem             | full name                            | Fill-in subitem style | Fill-in flatten style        | value type | unit   | description |
| ------------------- | ------------------------------------ | --------------------- | ---------------------------- | ---------- | ------ | ----------- |
| Blood Urea Nitrogen | Blood Urea Nitrogen                  | `BUN`                 | `lab:bloodNitrogen:BUN`      | decimal    | mg/dl  |             |
| Serum Creatinine    | Serum Creatinine                     | `Cr`                  | `lab:bloodNitrogen:Cr`       | decimal    | mg/dl  |             |
| eGFR                | Estimated Glomerular Filtration Rate | `eGFR`                | `lab:bloodNitrogen:eGFR`     | decimal    | ml/min |             |
| CrCl                | Creatine Clearance Rate              | `CrCl`                | `lab:bloodNitrogen:CrCl`     | decimal    | ml/min |             |
| Uric acid           | Uric acid                            | `uricAcid`            | `lab:bloodNitrogen:uricAcid` | decimal    | mg/dl  |             |



## Serum Electrolytes  
* Fill-in standard key: `lab:serumElectrolyte`

| subitem   | full name         | Fill-in subitem style | Fill-in flatten style       | value type | unit   | description |
| --------- | ----------------- | --------------------- | --------------------------- | ---------- | ------ | ----------- |
| Na        | Serum Sodium      | `Na`                  | `lab:serumElectrolyte:Na`   | decimal    | mmol/L |             |
| K         | Serum Potassium   | `K`                   | `lab:serumElectrolyte:K`    | decimal    | mmol/L |             |
| Cl        | Serum Chloride    | `Cl`                  | `lab:serumElectrolyte:Cl`   | decimal    | mmol/L |             |
| Total Co2 | Serum Bicarbonate | `Total Co2`           | `lab:serumElectrolyte:HCO3` | decimal    | mmol/L |             |
| Ca        | Serum Calcium     | `Ca`                  | `lab:serumElectrolyte:Ca`   | decimal    | mg/dl  |             |
| Mg        | Serum Magnesium   | `Mg`                  | `lab:serumElectrolyte:Mg`   | decimal    | mEq/L  |             |
| P         | Serum Phophorus   | `P`                   | `lab:serumElectrolyte:P`    | decimal    | mg/dl  |             |

## Urine Analysis 
* Fill-in standard key: `lab:UA`

| subitem             | full name                 | Fill-in subitem style | Fill-in flatten style      | value type | unit     | description |
| ------------------- | ------------------------- | --------------------- | -------------------------- | ---------- | -------- | ----------- |
| Color               | Urine Color               | `Color`               | `lab:UA:color`             | string     |          |             |
| Appearance          | Urine Appearance          | `Appearance`          | `lab:UA:appearance`        | string     |          |             |
| pH                  | Urine pH                  | `pH`                  | `lab:UA:pH`                | decimal    |          |             |
| Specific Gravity    | Urine Specific Gravity    | `spGr`                | `lab:UA:spGr`              | decimal    |          |             |
| Albumin             | Urine Albumin             | `Albumin`             | `lab:UA:albumin`           | grade      |          |             |
| Sugar               | Urine Sugar               | `Sugar`               | `lab:UA:sugar`             | grade      |          |             |
| Blood               | Urine Blood               | `Blood`               | `lab:UA:blood`             | grade      |          |             |
| Ketone              | Urine Ketone              | `Ketone`              | `lab:UA:ketone`            | grade      |          |             |
| Bilirubin           | Urine Bilirubin           | `Bilirubin`           | `lab:UA:bilirubin`         | grade      |          |             |
| Urobilinogen        | Urine Urobilinogen        | `Urobilinogen`        | `lab:UA:urobilinogen`      | grade      |          |             |
| Nitrite             | Urine Nitrite             | `Nitrite`             | `lab:UA:nitrite`           | grade      |          |             |
| Leukocyte Esterase  | Urine Leukocyute Esterase | `Leukocyte Esterase`  | `lab:UA:leukocyteEsterase` | grade      |          |             |
| RBC                 | Urine Red Blood Cell      | `RBC`                 | `lab:UA:RBC`               | range      | cell/HPF |             |
| WBC                 | Urine White Blood Cell    | `WBC`                 | `lab:UA:WBC`               | range      | cell/HPF |             |
| Squamous Epithelium | Urine Squamous Epithelium | `Squamous Epithelium` | `lab:UA:epi`               | range      | cell/HPF |             |

## Liver Function Test 
* Fill-in standard key: `lab:LFT`

| subitem              | full name                  | Fill-in subitem style | Fill-in flatten style | value type | unit  | description |
| -------------------- | -------------------------- | --------------------- | --------------------- | ---------- | ----- | ----------- |
| Total Protein        | Total Protein              | `Total Protein`       | `lab:LFT:TP`          | decimal    | g/dl  |             |
| Albumin              | Serum Albumin              | `Albumin`             | `lab:LFT:albumin`     | decimal    | g/dl  |             |
| Globulin             | Serum Globulin             | `Globulin`            | `lab:LFT:Globulin`    | decimal    | g/dl  |             |
| Alkaline Phosphatase | Alkaline Phosphatase       | `ALP`                 | `lab:LFT:ALP`         | decimal    | U/L   |             |
| AST                  | Aspartate Aminotransferase | `AST`                 | `lab:LFT:AST`         | decimal    | U/L   |             |
| ALT                  | Alanine Transaminase       | `ALT`                 | `lab:LFT:ALT`         | decimal    | U/L   |             |
| Total Bilirubin      | Total Bilirubin            | `TB`                  | `lab:LFT:TB`          | decimal    | mg/dl |             |
| Direct Bilirubin     | Direct Bilirubine          | `DB`                  | `lab:LFT:DB`          | decimal    | mg/dl |             |

## Hepatitis Profile 
* Fill-in standard key: `lab:HepatitisProfile`

| subitem  | full name                    | Fill-in subitem style | Fill-in flatten style           | value type | unit | description |
| -------- | ---------------------------- | --------------------- | ------------------------------- | ---------- | ---- | ----------- |
| HBsAg    | Hepatitis B Surface Antigen  | `HBsAg`               | `lab:HepatitisProfile:HBsAg`    | boolean    |      |             |
| Anti-HBs | Hepatitis B Surface Antibody | `Anti-HBs`            | `lab:HepatitisProfile:AntiHBs`  | boolean    |      |             |
| HBcAg    | Hepatitis B Core Antigen     | `HBcAg`               | `lab:HepatitisProfile:HBcAg`    | boolean    |      |             |
| Anti-HBc | Hepatitis B Core Antibody    | `Anti-HBc`            | `lab:HepatitisProfile:AntiHBsc` | boolean    |      |             |
| HBeAg    | Hepatitis B e-Antigen        | `HBeAg`               | `lab:HepatitisProfile:HBeAg`    | boolean    |      |             |
| Anti HCV | Hepatitis C Antibody         | `Anti HCV`            | `lab:HepatitisProfile:AntiHCV`  | boolean    |      |             |

## Blood Sugar Profile 
* Fill-in standard key: `lab:bloodSugar`

| subitem  | full name                        | Fill-in subitem style | Fill-in flatten style     | value type | unit  | description |
| -------- | -------------------------------- | --------------------- | ------------------------- | ---------- | ----- | ----------- |
| FBS      | Fasting Blood Sugar              | `FBS`                 | `lab:bloodSugar:FBS`      | decimal    | mg/dl |             |
| RBS      | Random Blood Sugar               | `RBS`                 | `lab:bloodSugar:RBS`      | decimal    | mg/dl |             |
| 75g-OGTT | 75-g Oral Glucose Tolerance Test | `75g-OGTT`            | `lab:bloodSugar:75g-OGTT` | decimal    | mg/dl |             |
| HbA1c    | Hemoglobin A1c                   | `HbA1c`               | `lab:bloodSugar:HbA1c`    | decimal    | %     |             |

## Lipid Profile 
* Fill-in standard key: `lab:lipid`

| subitem      | full name                                | Fill-in subitem style | Fill-in flatten style   | value type | unit  | description |
| ------------ | ---------------------------------------- | --------------------- | ----------------------- | ---------- | ----- | ----------- |
| Triglyceride | Serum Triglyceride                       | `TG`                  | `lab:lipid:TG`          | decimal    | mg/dl |             |
| Cholesterol  | Serum Cholesterol                        | `Chol`                | `lab:lipid:Chol`        | decimal    | mg/dl |             |
| HDL-Chol     | High Density Lipoprotein Cholesterol     | `HDL-Chol`            | `lab:lipid:HDL`         | decimal    | mg/dl |             |
| LDL-Chol     | Low Density Lipoprotein Cholesterol      | `LDL-Chol`            | `lab:lipid:LDL`         | decimal    | mg/dl |             |
| VLDL-Chol    | Very Low Density Lipoprotein Cholesterol | `VLDL-Chol`           | `lab:lipid:VLDL`        | decimal    | mg/dl |             |
| Chylomicron  | Chylomicron                              | `Chylomicron`         | `lab:lipid:chylomicron` | string     |       |             |

## Coagulogram 
* Fill-in standard key: `lab:coagulogram`

| subitem   | full name                         | Fill-in subitem style | Fill-in flatten style       | value type | unit | description |
| --------- | --------------------------------- | --------------------- | --------------------------- | ---------- | ---- | ----------- |
| PT        | Prothrombin Time                  | `PT`                  | `lab:coagulogram:PT`        | decimal    | sec  |             |
| PTT       | Partial Thromboplastin Time       | `PTT`                 | `lab:coagulogram:PTT`       | decimal    | sec  |             |
| PTT Ratio | Partial Thromboplastin Time Ratio | `PTT-Ratio`           | `lab:coagulogram:PTT-Ratio` | decimal    |      |             |
| INR       | International Normalized Ratio    | `INR`                 | `lab:coagulogram:INR`       | decimal    |      |             |

## Thyroid Function Test
* Fill-in standard key: `lab:TFT`

| subitem | full name                   | Fill-in subitem style | Fill-in flatten style | value type | unit   | description |
| ------- | --------------------------- | --------------------- | --------------------- | ---------- | ------ | ----------- |
| TSH     | Thyroid Stimulating Hormone | `TSH`                 | `lab:TFT:TSH`         | decimal    | uIU/ml |             |
| Free T4 | Free Thyroxine              | `Free T4`             | `lab:TFT:FT4`         | decimal    | ng/dl  |             |
| Free T3 | Free Triiodothyronine       | `Free T3`             | `lab:TFT:FT3`         | decimal    | pg/dl  |             |

## HIV Viral Profile
* Fill-in standard key: `lab:HIV-ViralProfile`

| subitem    | full name                    | Fill-in subitem style | Fill-in flatten style            | value type | unit      | description |
| ---------- | ---------------------------- | --------------------- | -------------------------------- | ---------- | --------- | ----------- |
| Viral Load | HIV Viral Load               | `Viral Load`          | `lab:HIV-ViralProfile:viralLoad` | decimal    | copies/ml |             |
| Anti-HIV   | HIV Antibody                 | `Anti-HIV`            | `lab:HIV-ViralProfile:Anti-HIV`  | boolean    |           |             |
| CD4+       | Cluster of Differentiation 4 | `CD4+`                | `lab:HIV-ViralProfile:CD4+`      | decimal    | cells/uL  |             |

## Autoimmune Antibody
* Fill-in standard key: `lab:autoimmuneAb`

| subitem     | full name                         | Fill-in subitem style | Fill-in flatten style          | value type | unit         | description |
| ----------- | --------------------------------- | --------------------- | ------------------------------ | ---------- | ------------ | ----------- |
| AChR-Ab     | Acetylcholine Receptor Antibody   | `AChR-Ab`             | `lab:autoimmuneAb:AChR-Ab`     | decimal    |              | nmol/ml     |
| Anti ds-DNA | Anti-double-stranded DNA Antibody | `Anti ds-DNA`         | `lab:autoimmuneAb:Anti-ds-DNA` | decimal    |              | IU/ml       |
| Anti-SM     | Anti-Smith Antibody               | `Anti-SM`             | `lab:autoimmuneAb:Anti-SM`     | decimal    | U/ml         |             |
| APS         | Antiphospholipid Antibody         | `APS`                 | `lab:autoimmuneAb:APS`         | decimal    | MPL Units/ml |             |
| ANA         | Antinuclear antibody              | `ANA`                 | `lab:autoimmuneAb:ANA`         | decimal    |              |             |

## Osmolarity
* Fill-in standard key: `lab:Osmolarity`

| subitem   | full name        | Fill-in subitem style | Fill-in flatten style     | value type | unit    | description |
| --------- | ---------------- | --------------------- | ------------------------- | ---------- | ------- | ----------- |
| Serum Osm | Serum Osmolarity | `Serum Osm`           | `lab:Osmolarity:serumOsm` | decimal    | mOsm/kg |             |
| Urine Osm | Urine Osmolarity | `Urine Osm`           | `lab:Osmolarity:urineOsm` | decimal    | mOsm/kg |             |

## Coagulation Factor
* Fill-in standard key: `lab:coagulationFactor`

| subitem               | full name             | Fill-in subitem style   | Fill-in flatten style                        | value type | unit | description |
| --------------------- | --------------------- | ----------------------- | -------------------------------------------- | ---------- | ---- | ----------- |
| Factor VIII           | Factor VIII           | `Factor VIII`           | `lab:coagulationFactor:factorVIII`           | decimal    | %    |             |
| Factor IX             | Factor IX             | `Factor IX`             | `lab:coagulationFactor:factorIX`             | decimal    | %    |             |
| Factor VIII Inhibitor | Factor VIII Inhibitor | `Factor VIII Inhibitor` | `lab:coagulationFactor:factorVIII-Inhibitor` | decimal    | Bu   |             |
| Factor IX Inhibitor   | Factor IX Inhibitor   | `Factor IX Inhibitor`   | `lab:coagulationFactor:factorVIX-Inhibitor`  | decimal    | Bu   |             |

## Tropical Infection Viral Profile
* Fill-in standard key: `lab:tropicalInfection`

| subitem           | full name                            | Fill-in subitem style | Fill-in flatten style                    | value type | unit | description |
| ----------------- | ------------------------------------ | --------------------- | ---------------------------------------- | ---------- | ---- | ----------- |
| NS1 Antigen       | Nonstructural Protein 1 Antigen Test | `NS1 Antigen`         | `lab:tropicalInfection:NS1-Antigen`      | boolean    |      |             |
| Dengue IgM        | Dengue Immunoglobulin M              | `Dengue IgM`          | `lab:tropicalInfection:DengueIgM`        | boolean    |      |             |
| Dengue IgG        | Dengue Immunoglobulin G              | `Dengue IgG`          | `lab:tropicalInfection:DengueIgG`        | boolean    |      |             |
| Scrub Typhus IgM  | Scrub Typhus Immunoglobulin M        | `Scrub Typhus IgM`    | `lab:tropicalInfection:ScrubTyphusIgM`   | boolean    |      |             |
| Scrub Typhus IgG  | Scrub Typhus Immunoglobulin G        | `Scrub Typhus IgG`    | `lab:tropicalInfection:ScrubTyphusIgG`   | boolean    |      |             |
| Leptospirosis IgM | Leptospirosis Immunoglobulin M       | `Leptospirosis IgM`   | `lab:tropicalInfection:LeptospirosisIgM` | boolean    |      |             |
| Leptospirosis IgG | Leptospirosis Immunoglobulin G       | `Leptospirosis IgG`   | `lab:tropicalInfection:LeptospirosisIgG` | boolean    |      |             |

## Cardiac Marker
* Fill-in standard key: `lab:cardiacMarker`

| subitem        | full name                                  | Fill-in subitem style | Fill-in flatten style              | value type | unit  | description |
| -------------- | ------------------------------------------ | --------------------- | ---------------------------------- | ---------- | ----- | ----------- |
| LDH            | Lactate Dehydrogenase                      | `LDH`                 | `lab:cardiacMarker:LDH`            | decimal    | U/L   |             |
| Troponin-T hs  | Troponin T High Sensitivity                | `Troponin-T hs`       | `lab:cardiacMarker:hs-cTnT`        | decimal    | pg/ml |             |
| hs-Troponin I  | High Sensitivity hs-Troponin I             | `hs-Troponin I`       | `lab:cardiacMarker:hs-cTnI`        | decimal    | ng/L  |             |
| Total CK       | Total Creatine Kinase                      | `Total CK`            | `lab:cardiacMarker:totalCK`        | decimal    | U/L   |             |
| CK-MB Activity | Creatine Kinase Myoglobin Binding Activity | `CK-MB-Activity`      | `lab:cardiacMarker:CK-MB-Activity` | decimal    | U/L   |             |
| CK-MB Mass     | Creatine Kinase Myoglobin Binding Mass     | `CK-MB-Mass`          | `lab:cardiacMarker:CK-MB-Mass`     | decimal    | ng/ml |             |
| Pro-BNP        | Pro-hormone B-type Natriuretic Peptide     | `Pro-BNP`             | `lab:cardiacMarker:Pro-BNP`        | decimal    | pg/ml |             |

## Blood Degradation Product
* Fill-in standard key: `lab:bloodDegradation`

| subitem    | full name  | Fill-in subitem style | Fill-in flatten style             | value type | unit  | description |
| ---------- | ---------- | --------------------- | --------------------------------- | ---------- | ----- | ----------- |
| D-dimer    | D-dimer    | `D-dimer`             | `lab:bloodDegradation:D-dimer`    | decimal    | ng/ml |             |
| Fibrinogen | Fibrinogen | `Fibrinogen`          | `lab:bloodDegradation:fibrinogen` | decimal    | mg/dl |             |

## Blood Lactate
* Fill-in standard key: `lab:bloodLactate`

| subitem       | full name     | Fill-in subitem style | Fill-in flatten style          | value type | unit    | description |
| ------------- | ------------- | --------------------- | ------------------------------ | ---------- | ------- | ----------- |
| Blood Lactate | Blood Lactate | `Blood Lactate`       | `lab:bloodLacate:bloodLactate` | decimal    | mmol/dl |             |

## Inflammatory Marker
* Fill-in standard key: `lab:inflammatoryMarker`

| subitem | full name                      | Fill-in subitem style | Fill-in flatten style        | value type | unit  | description |
| ------- | ------------------------------ | --------------------- | ---------------------------- | ---------- | ----- | ----------- |
| ESR     | Erythrocyte Sedimentation Rate | `ESR`                 | `lab:inflammatoryMarker:ESR` | decimal    | mm/hr |             |
| CRP     | C-reactive Protein             | `CRP`                 | `lab:inflammatoryMarker:CRP` | decimal    | mg/L  |             |
| PCT     | Procalcitonin                  | `PCT`                 | `lab:inflammatoryMarker:PCT` | decimal    | ng/ml |             |

## Serum Cortisol
* Fill-in standard key: `lab:serumCortisol`

| subitem                | full name              | Fill-in subitem style    | Fill-in flatten style                    | value type | unit   | description |
| ---------------------- | ---------------------- | ------------------------ | ---------------------------------------- | ---------- | ------ | ----------- |
| Serum Morning Cortisol | Serum Morning Cortisol | `Serum Morning Cortisol` | `lab:serumCortisol:serumMorningCortisol` | decimal    | mcg/dl |             |
| Serum Random Cortisol  | Serum Random Cortisol  | `Serum Random Cortisol`  | `lab:serumCortisol:serumRandomCortisol`  | decimal    | mcg/dl |             |

## Respiratory Tract Infection Viral Profile
* Fill-in standard key: `lab:respiratoryTractInfectionViralProfile`

| subitem          | full name                                 | Fill-in subitem style | Fill-in flatten style                                        | value type | unit | description |
| ---------------- | ----------------------------------------- | --------------------- | ------------------------------------------------------------ | ---------- | ---- | ----------- |
| Influenza A      | Influenza A                               | `Influenza A`         | `lab:respiratoryTractInfectionViralProfile:InfluenzaA`       | boolean    |      |             |
| Influenza B      | Influenza B                               | `Influenza B`         | `lab:respiratoryTractInfectionViralProfile:InfluenzaB`       | boolean    |      |             |
| RSV Antigen      | Respiratory Syncytial Virus Antigen       | `RSV Antigen`         | `lab:respiratoryTractInfectionViralProfile:RSV-Ag`           | boolean    |      |             |
| COVID-19 Antigen | Coronavirus Disease 2019 Antigen          | `COVID-19 Antigen`    | `lab:respiratoryTractInfectionViralProfile:COVID-19 Antigen` | boolean    |      |             |
| COVID-19 IgM     | Coronavirus Disease 2019 Immunoglobulin M | `COVID-19 IgM`        | `lab:respiratoryTractInfectionViralProfile:COVID-19IgM`      | boolean    |      |             |
| COVID-19 IgG     | Coronavirus Disease 2019 Immunoglobulin G | `COVID-19 IgG`        | `lab:respiratoryTractInfectionViralProfile:COVID-19IgG`      | boolean    |      |             |
| Mycoplasma IgM   | Mycoplasma Immunoglobulin M               | `Mycoplasma IgM`      | `lab:respiratoryTractInfectionViralProfile:MycoplasmaIgM`    | boolean    |      |             |
| Mycoplasma IgG   | Mycoplasma Immunoglobulin G               | `Mycoplasma IgG`      | `lab:respiratoryTractInfectionViralProfile:MycoplasmaIgG`    | boolean    |      |             |

## Iron Study
* Fill-in standard key: `lab:ironStudy`

| subitem    | full name                   | Fill-in subitem style | Fill-in flatten style    | value type | unit   | description |
| ---------- | --------------------------- | --------------------- | ------------------------ | ---------- | ------ | ----------- |
| Serum Iron | Serum Iron                  | `SI`                  | `lab:ironStudy:SI`       | decimal    | mcg/dl |             |
| TIBC       | Total Iron Binding Capacity | `TIBC`                | `lab:ironStudy:TIBC`     | decimal    | mcg/dl |             |
| Ferritin   | Ferritin                    | `Ferritin`            | `lab:ironStudy:ferritin` | decimal    | mcg/L  |             |

## Antiglobulin Test
* Fill-in standard key: `lab:antiglobulinTest`

| subitem                    | full name                  | Fill-in subitem style        | Fill-in flatten style      | value type | unit | description |
| -------------------------- | -------------------------- | ---------------------------- | -------------------------- | ---------- | ---- | ----------- |
| Direct Antiglobulin Test   | Direct Antiglobulin Test   | `Direct Antiglobulin Test`   | `lab:antiglobulinTest:DAT` | boolean    |      |             |
| Indirect Antiglobulin Test | Indirect Antiglobulin Test | `Indirect Antiglobulin Test` | `lab:antiglobulinTest:IAT` | boolean    |      |             |

## Complement Level
* Fill-in standard key: `lab:complementLevel`

| subitem   | full name            | Fill-in subitem style | Fill-in flatten style     | value type | unit   | description |
| --------- | -------------------- | --------------------- | ------------------------- | ---------- | ------ | ----------- |
| C3c Level | Complement C3c Level | `C3c Level`           | `lab:complementLevel:C3c` | decimal    | mcg/ml |             |
| C4 Level  | Complement C4 Level  | `C4 Level`            | `lab:complementLevel:C4`  | decimal    | mcg/ml |             |

## Parathyroid Hormone
* Fill-in standard key: `lab:parathyroidHormone`

| subitem    | full name           | Fill-in subitem style | Fill-in flatten style               | value type | unit  | description |
| ---------- | ------------------- | --------------------- | ----------------------------------- | ---------- | ----- | ----------- |
| PTH        | Parathyroid Hormone | `PTH`                 | `lab:parathyroidHormone:PTH`        | decimal    | pg/ml |             |
| Vitamin D  | Vitamin D Level     | `Vitamin D`           | `lab:parathyroidHormone:vitaminD`   | decimal    | ng/ml |             |
| Calcitonin | Calcitonin          | `Calcitonin`          | `lab:parathyroidHormone:calcitonin` | decimal    | pg/ml |             |

## CSF Profile
* Fill-in standard key: `lab:CSF`

| subitem        | full name            | Fill-in subitem style | Fill-in flatten style   | value type | unit  | description |
| -------------- | -------------------- | --------------------- | ----------------------- | ---------- | ----- | ----------- |
| Color          | CSF Color            | `Color`               | `lab:CSF:color`         | string     |       |             |
| Appearance     | CSF Appearance       | `Appearance`          | `lab:CSF:appearance`    | string     |       |             |
| Open Pressure  | Open Pressure        | `Open Pressure`       | `lab:CSF:openPressure`  | decimal    | cmH2O |             |
| Close Pressure | Close Pressure       | `Close Pressure`      | `lab:CSF:closePressure` | decimal    | cmH2O |             |
| RBC            | CSF Red Blood Cell   | `RBC`                 | `lab:CSF:RBC`           | decimal    |       |             |
| WBC            | CSF White Blood Cell | `WBC`                 | `lab:CSF:WBC`           | decimal    |       |             |
| Neutrophil     | CSF Neutrophil       | `Neutrophil`          | `lab:CSF:N`             | decimal    | %     |             |
| Lymphocyte     | CSF Lymphocyte       | `Lymphocyte`          | `lab:CSF:L`             | decimal    | %     |             |
| Protein        | CSF Protein          | `Protein`             | `lab:CSF:protein`       | decimal    | mg/dl |             |
| Glucose        | CSF Glucose          | `Glucose`             | `lab:CSF:glucose`       | decimal    | mg/dl |             |
| Gram Stain     | CSF Gram Stain       | `Gram Stain`          | `lab:CSF:Gram`          | string     |       |             |
| Culture        | CSF Culture          | `Culture`             | `lab:CSF:culture`       | string     |       |             |

## Ascites Profile
* Fill-in standard key: `lab:ascites`

| subitem    | full name                | Fill-in subitem style | Fill-in flatten style    | value type | unit         | description |
| ---------- | ------------------------ | --------------------- | ------------------------ | ---------- | ------------ | ----------- |
| Color      | Ascites Color            | `Color`               | `lab:ascites:color`      | string     |              |             |
| Appearance | Ascites Appearance       | `Appearance`          | `lab:ascites:appearance` | string     |              |             |
| RBC        | Ascites Red Blood Cell   | `RBC`                 | `lab:ascites:RBC`        | decimal    | cells/cu.mm. |             |
| WBC        | Ascites White Blood Cell | `WBC`                 | `lab:ascites:WBC`        | decimal    | cells/cu.mm. |             |
| Neutrophil | Ascites Neutrophil       | `Neutrophil`          | `lab:ascites:N`          | decimal    | %            |             |
| Lymphocyte | Ascites Lymphocyte       | `Lymphocyte`          | `lab:ascites:L`          | decimal    | %            |             |
| Protein    | Ascites Protein          | `Protein`             | `lab:ascites:protein`    | decimal    | g/dl         |             |
| Albumin    | Ascites Albumin          | `Albumin`             | `lab:ascites:albumin`    | decimal    | g/dl         |             |
| Gram Stain | Ascites Gram Stain       | `Gram Stain`          | `lab:ascites:Gram`       | string     |              |             |
| Culture    | Ascites Culture          | `Culture`             | `lab:ascites:culture`    | string     |              |             |

## Pleural Fluid Profile
* Fill-in standard key: `lab:pleuralFluid`

| subitem    | full name                      | Fill-in subitem style | Fill-in flatten style         | value type | unit         | description |
| ---------- | ------------------------------ | --------------------- | ----------------------------- | ---------- | ------------ | ----------- |
| Color      | Pleural Fluid Color            | `Color`               | `lab:pleuralFluid:color`      | string     |              |             |
| Appearance | Pleural Fluid Appearance       | `Appearance`          | `lab:pleuralFluid:appearance` | string     |              |             |
| pH         | Pleural Fluid pH               | `pH`                  | `lab:pleuralFluid:pH`         | decimal    |              |             |
| RBC        | Pleural Fluid Red Blood Cell   | `RBC`                 | `lab:pleuralFluid:RBC`        | decimal    | cells/cu.mm. |             |
| WBC        | Pleural Fluid White Blood Cell | `WBC`                 | `lab:pleuralFluid:WBC`        | decimal    | cells/cu.mm. |             |
| Neutrophil | Pleural Fluid Neutrophil       | `Neutrophil`          | `lab:pleuralFluid:N`          | decimal    | %            |             |
| Lymphocyte | Pleural Fluid Lymphocyte       | `Lymphocyte`          | `lab:pleuralFluid:L`          | decimal    | %            |             |
| Glucose    | Pleural Fluid Glucose          | `Glucose`             | `lab:pleuralFluid:Glucose`    | decimal    | mg/dl        |             |
| LDH        | Pleural Fluid LDH              | `LDH`                 | `lab:pleuralFluid:LDH`        | decimal    | U/L          |             |
| Gram Stain | Pleural Fluid Gram Stain       | `Gram Stain`          | `lab:pleuralFluid:Gram`       | string     |              |             |
| Culture    | Pleural Fluid Culture          | `Culture`             | `lab:pleuralFluid:culture`    | string     |              |             |

## Synovial Fluid Profile
* Fill-in standard key: `lab:synovialFluid`

| subitem    | full name                       | Fill-in subitem style | Fill-in flatten style                 | value type | unit         | description |
| ---------- | ------------------------------- | --------------------- | ------------------------------------- | ---------- | ------------ | ----------- |
| Color      | Synovial Fluid Color            | `Color`               | `lab:synovialFluid:color`             | string     |              |             |
| Appearance | Synovial Fluid Appearance       | `Appearance`          | `lab:synovialFluid:appearance`        | string     |              |             |
| Viscosity  | Synovial Fluid Viscosity        | `Viscosity`           | `lab:synovialFluid:viscosity`         | string     |              |             |
| RBC        | Synovial Fluid Red Blood Cell   | `RBC`                 | `lab:synovialFluid:RBC`               | decimal    | cells/cu.mm. |             |
| WBC        | Synovial Fluid White Blood Cell | `WBC`                 | `lab:synovialFluid:WBC`               | decimal    | cells/cu.mm. |             |
| Neutrophil | Synovial Fluid Neutrophil       | `Neutrophil`          | `lab:synovialFluid:N`                 | decimal    | %            |             |
| Lymphocyte | Synovial Fluid Lymphocyte       | `Lymphocyte`          | `lab:synovialFluid:L`                 | decimal    | %            |             |
| Gram Stain | Synovial Fluid Gram Stain       | `Gram Stain`          | `lab: Synovial Fluid Profile:Gram`    | string     |              |             |
| Culture    | Synovial Fluid Culture          | `Culture`             | `lab: Synovial Fluid Profile:culture` | string     |              |             |
| Crystal    | Synovial Fluid Crystal          | `Crystal`             | `lab: Synovial Fluid Profile:crystal` | string     |              |             |
