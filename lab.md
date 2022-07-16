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
| Neutrophil      | Neutrophil       | `N`                  | `lab:CBC:N`          | float      | %              |                               |                    |
| Eosinophil      | Eosinophil       | `E`                  | `lab:CBC:E`          | float      | %              |                               |                    |
| Basophil      | Basophil       | `B`                  | `lab:CBC:B`          | float      | %              |                               |                    |
| Lymphocyte      | Lymphocyte       | `L`                  | `lab:CBC:L`          | float      | %              |                               |                    |
| Monocyte      | Monocyte       | `M`                  | `lab:CBC:M`          | float      | %              |                               |                    |
| Platelet      | Platelet       | `Plt`                  | `lab:CBC:Plt`          | float      | cells/cu.mm.              |                               |   
| RBC      | RBC count       | `RBC`                  | `lab:CBC:RBC`          | float      | x1000000 cells/cu.mm |    |                    |                 |
| MCV      | Mean Corpuscular Volume    | `MCV`                  | `lab:CBC:MCV`          | float      | fl.              |                               |                    |
| MCH      | Mean Corpuscular Hemoglobin  | `MCH`                  | `lab:CBC:MCH`          | float      | pq.              |                               |                    |
| MCHC      | Mean Corpuscular Hemoglobin Concentration       | `MCHC`    | `lab:CBC:MCHC`    | float      | g/dl              |                               |                    |
| MPV      | Mean Platelet Volume      | `MPV`                  | `lab:CBC:MPV`          | float      | fL.              |                               |                    |
| PDW      | Platelet Distribution Width  | `PDW`                  | `lab:CBC:PDW`          | float      | fL.              |                               |                    |
| ANC      | Absolute Neutrophil Count       | `ANC`                  | `lab:CBC:ANC`          | float      | cells/cu.mm.              |                               |                    |
| ALC      | Absolute Lymphocyte Count       | `ALC`                  | `lab:CBC:ALC`          | float      | cells/cu.mm.              |                               |                    |
| NRBC      | Nucleated Red Blood Cell       | `NRBC`                  | `lab:CBC:NRBC`          | float      | /100 WBC              |                               |                    |
| RDW      | Red Cell Distribution Width       | `RDW`                  | `lab:CBC:RDW`          | float      | %              |                               |                    |
| P-LCR      | Platelet Large Cell Ratio       | `P-LCR`                  | `lab:CBC:P-LCR`          | float      | %              |                               |                    |
| RC      | Reticulocyte Count       | `RC`                  | `lab:CBC:RC`          | float      | %              |                               |                    |

## Urine Protein per Creatinine Ratio  
* Fill-in standard key: `lab:UPCr`
* Value type: float
* Unit: mg/g
* Description:

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Urine Protein      | Urine Protein       | `UP`                  | `lab:UPCr:UP`          | float      | mg/dl              |                               |                    |
| Creatinine      | Urine Creatinine       | `Cr`                  | `lab:UPCr:Cr`          | float      | mg/dl              |                               |                    |
| eGFR      | Estimated Glomerular Filtration Rate       | `eGFR`                  | `lab:UPCr:eGFR`          | float      | ml/min              |                               |                    |

## Serum Electrolytes  
* Fill-in standard key: `lab:serumElectrolyte`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Na      | Serum Sodium      | `Na`                  | `lab:serumElectrolyte:Na`          | float      | mmol/L             |                               |                    |
| K      | Serum Potassium      | `K`                  | `lab:serumElectrolyte:K`          | float      | mmol/L             |                               |                    |
|Cl      | Serum Chloride      | `Cl`                  | `lab:serumElectrolyte:Cl`          | float      | mmol/L             |                               |                    |
| Total Co2      | Serum Bicarbonate     | `Total Co2`                  | `lab:serumElectrolyte:HCO3`          | float      | mmol/L             |                               |                    |
| Ca      | Serum Calcium      | `Ca`                  | `lab:serumElectrolyte:Ca`          | float      | mg/dl             |                               |                    |
| Mg      | Serum Magnesium      | `Mg`                  | `lab:serumElectrolyte:Mg`          | float      | mEq/L             |                               |                    |
| P      | Serum Phophorus      | `P`                  | `lab:serumElectrolyte:P`          | float      | mg/dl             |                               |                    |

## Urine Analysis 
* Fill-in standard key: `lab:UA`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Color      | Urine Color     | `Color`                  | `lab:UA:color`          | string      |              |                               |                    |
| Appearance      | Urine Appearance     | `Appearance`                  | `lab:UA:appearance`    | string      |              |                               |                    |
| pH      | Urine pH     | `pH`                  | `lab:UA:pH`          | float      |              |                               |                    |
| Specific Gravity      | Urine Specific Gravity     | `Color`                  | `lab:UA:spGr`          | float      |              |                               |                    |
| Albumin      | Urine Albumin     | `Albumin`                  | `lab:UA:albumin`          | string      |              |                               |                    |
| Sugar      | Urine Sugar     | `Sugar`                  | `lab:UA:sugar`          | string      |              |                               |                    |
| Blood      | Urine Blood     | `Blood`                  | `lab:UA:blood`          | string      |              |                               |                    |
| Ketone      | Urine Ketone     | `Ketone`                  | `lab:UA:ketone`          | string      |              |                               |                    |
| Bilirubin      | Urine Bilirubin     | `Bilirubin`                  | `lab:UA:bilirubin`          | string      |              |                               |                    |
| Urobilinogen      | Urine Urobilinogen     | `Urobilinogen`                  | `lab:UA:urobilinogen`          | string      |              |                               |                    |
| Nitrite     | Urine Nitrite     | `Nitrite`                  | `lab:UA:nitrite`          | string      |              |                               |                    |
| Leukocyte Esterase      | Urine Leukocyute Esterase     | `Leukocyte Esterase` | `lab:UA:leukocyteEsterase`          | string      |              |              |                    |
| RBC      | Urine Red Blood Cell    | `RBC`                  | `lab:UA:RBC`          | float      | HPF             |                               |                    |
| WBC      | Urine White Blood Cell     | `WBC`                  | `lab:UA:WBC`          | float      | HPF             |                               |                    |
| Squamous Epithelium      | Urine Squamous Epithelium     | `Squamous Epithelium` | `lab:UA:epi`          | float      | HPF             |        |                    |

## Liver Function Test 
* Fill-in standard key: `lab:LFT`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Total Protein      | Total Protein     | `Total Protein`                  | `lab:LFT:TP`     | float      | g/dl             |                               |                    |
| Albumin      | Serum Albumin     | `Albumin`                  | `lab:LFT:albumin`     | float      | g/dl             |                               |                    |
| Globulin      | Serum Globulin     | `Globulin`                  | `lab:LFT:Globulin`     | float      | g/dl             |                               |                    |
| Alkaline Phosphatase      | Alkaline Phosphatase     | `ALP`                  | `lab:LFT:ALP`     | float      | U/L             |                               |                    |
| AST      | Aspartate Aminotransferase     | `AST`                  | `lab:LFT:AST`     | float      | U/L             |                               |                    |
| ALT      | Alanine Transaminase     | `ALT`                  | `lab:LFT:ALT`     | float      | U/L             |                               |                    |
| Total Bilirubin      | Total Bilirubin     | `TB`                  | `lab:LFT:TB`     | float      | mg/dl             |                               |                    |
| Direct Bilirubin      | Direct Bilirubine     | `DB`                  | `lab:LFT:DB`     | float      | mg/dl             |                               |           |

## Hepatitis Profile 
* Fill-in standard key: `lab:HepatitisProfile`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| HBsAg      | Hepatitis B Surface Antigen     | `HBsAg`                  | `lab:HepatitisProfile:HBsAg`     | string      |             |                               |                    |
| Anti-HBs      | Hepatitis B Surface Antibody     | `Anti-HBs`                  | `lab:HepatitisProfile:AntiHBs`     | string      |             |                               |                    |
| HBcAg      | Hepatitis B Core Antigen     | `HBcAg`                  | `lab:HepatitisProfile:HBcAg`     | string      |             |                               |                    |
| Anti-HBc      | Hepatitis B Core Antibody     | `Anti-HBc`                  | `lab:HepatitisProfile:AntiHBsc`     | string      |             |                               |       
| HBeAg      | Hepatitis B e-Antigen     | `HBeAg`                  | `lab:HepatitisProfile:HBeAg`     | string      |             |                               |                    |
| Anti HCV      | Hepatitis C Antibody     | `Anti HCV`                  | `lab:HepatitisProfile:AntiHCV`     | string      |             |                               |                    |

## Blood Sugar Profile 
* Fill-in standard key: `lab:bloodSugar`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| FBS      | Fasting Blood Sugar     | `FBS`                  | `lab:bloodSugar:FBS`     | float      | mg/dl            |                               |                    |
| RBS      | Random Blood Sugar     | `RBS`                  | `lab:bloodSugar:RBS`     | float      | mg/dl            |                               |                    |
| 75g-OGTT      | 75-g Oral Glucose Tolerance Test     | `75g-OGTT`                  | `lab:bloodSugar:75g-OGTT`     | float      | mg/dl            |                               |                    |
| HbA1c      | Hemoglobin A1c     | `HbA1c`                  | `lab:bloodSugar:HbA1c`     | float      | %            |                               |                    |

## Lipid Profile 
* Fill-in standard key: `lab:lipid`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Triglyceride      | Serum Triglyceride     | `TG`                  | `lab:lipid:TG`     | float      | mg/dl            |                               |                    |
| Cholesterol      | Serum Cholesterol     | `Chol`                  | `lab:lipid:Chol`     | float      | mg/dl            |                               |                    |
| HDL-Chol      | High Density Lipoprotein Cholesterol | `HDL-Chol`   | `lab:lipid:HDL`     | float      | mg/dl            |                               |                    |
| LDL-Chol      | Low Density Lipoprotein Cholesterol | `LDL-Chol`   | `lab:lipid:LDL`     | float      | mg/dl            |                               |                    |
| VLDL-Chol      | Very Low Density Lipoprotein Cholesterol | `VLDL-Chol`   | `lab:lipid:VLDL` | float      | mg/dl   |                               |                    |
| Chylomicron      | Chylomicron | `Chylomicron`   | `lab:lipid:chylomicron`     | string      |            |                               |                    |

## Coagulogram 
* Fill-in standard key: `lab:coagulogram`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| PT     | Prothrombin Time     | `PT`                  | `lab:coagulogram:PT`     | float      | sec            |                               |                    |
| PTT     | Partial Thromboplastin Time     | `PTT`                  | `lab:coagulogram:PTT`     | float      | sec            |                               |                    |
| PTT Ratio     | Partial Thromboplastin Time Ratio    | `PTT-Ratio`  | `lab:coagulogram:PTT-Ratio`     | float      |            |                               |                    |
| INR     | International Normalized Ratio     | `INR`                  | `lab:coagulogram:INR`     | float      |            |                               |                    |

## Thyroid Function Test
* Fill-in standard key: `lab:TFT`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| TSH     | Thyroid Stimulating Hormone     | `TSH`                  | `lab:TFT:TSH`     | float      | uIU/ml           |                               |                    |
| Free T4     | Free Thyroxine     | `Free T4`                  | `lab:TFT:FT4`     | float      | ng/dl           |                               |                    |
| Free T3     | Free Triiodothyronine    | `Free T3`                  | `lab:TFT:FT3`     | float      | pg/dl           |                               |                    |

## HIV Viral Profile
* Fill-in standard key: `lab:HIV-ViralProfile`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Viral Load     | HIV Viral Load     | `Viral Load`                  | `lab:HIV-ViralProfile:viralLoad`     | float      | copies/ml           |                               |                    |
| Anti-HIV     | HIV Antibody     | `Anti-HIV`                  | `lab:HIV-ViralProfile:Anti-HIV`     | string      |       |                               |                    |
| CD4+     | Cluster of Differentiation 4     | `CD4+`                  | `lab:HIV-ViralProfile:CD4+`     | float      | cells/uL           |                               |                    |

## Autoimmune Antibody
* Fill-in standard key: `lab:autoimmuneAb`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| AChR-Ab     | Acetylcholine Receptor Antibody  | `AChR-Ab`                  | `lab:autoimmuneAb:AChR-Ab`     | float      |             | nmol/ml                              |                    |
| Anti ds-DNA    | Anti-double-stranded DNA Antibody  | `Anti ds-DNA`   | `lab:autoimmuneAb:Anti-ds-DNA`     | float      |             | IU/ml                              |                    |
| Anti-SM    | Anti-Smith Antibody  | `Anti-SM`                  | `lab:autoimmuneAb:Anti-SM`     | float      | U/ml        |                               |                    |
| APS    | Antiphospholipid Antibody  | `APS`                  | `lab:autoimmuneAb:APS`     | float      | MPL Units/ml            |                               |                    |
| ANA    | Antinuclear antibody  | `ANA`                  | `lab:autoimmuneAb:ANA`     | float     |             |                               |                    |

## Osmolarity
* Fill-in standard key: `lab:Osmolarity`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Serum Osm    | Serum Osmolarity  | `Serum Osm`                  | `lab:Osmolarity:serumOsm`     | float     | mOsm/kg            |                               |                    |
| Urine Osm    | Urine Osmolarity  | `Urine Osm`                  | `lab:Osmolarity:urineOsm`     | float     | mOsm/kg            |                               |                    |

## Coagulation Factor
* Fill-in standard key: `lab:coagulationFactor`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Factor VIII    | Factor VIII  | `Factor VIII`                  | `lab:coagulationFactor:factorVIII`     | float     | %            |                               |                    |
| Factor IX    | Factor IX  | `Factor IX`                  | `lab:coagulationFactor:factorIX`     | float     | %            |                               |                    |
| Factor VIII Inhibitor   | Factor VIII Inhibitor | `Factor VIII Inhibitor` | `lab:coagulationFactor:factorVIII-Inhibitor`     | float     | Bu            |            |     
| Factor IX Inhibitor   | Factor IX Inhibitor | `Factor IX Inhibitor` | `lab:coagulationFactor:factorVIX-Inhibitor`     | float     | Bu            |            |       

## Tropical Infection Viral Profile
* Fill-in standard key: `lab:tropicalInfection`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| NS1 Antigen    | Nonstructural Protein 1 Antigen Test  | `NS1 Antigen` | `lab:tropicalInfection:NS1-Antigen`     | string     |             |       |                    |
| Dengue IgM    | Dengue Immunoglobulin M  | `Dengue IgM` | `lab:tropicalInfection:DengueIgM`     | string     |             |       |                    |
| Dengue IgG    | Dengue Immunoglobulin G  | `Dengue IgG` | `lab:tropicalInfection:DengueIgG`     | string     |             |       |                    |
| Scrub Typhus IgM    | Scrub Typhus Immunoglobulin M  | `Scrub Typhus IgM` | `lab:tropicalInfection:ScrubTyphusIgM`     | string     |             |       |                    |
| Scrub Typhus IgG    | Scrub Typhus Immunoglobulin G  | `Scrub Typhus IgG` | `lab:tropicalInfection:ScrubTyphusIgG`     | string     |             |       |                    |
| Leptospirosis IgM    | Leptospirosis Immunoglobulin M  | `Leptospirosis IgM` | `lab:tropicalInfection:LeptospirosisIgM`      | string     |                 |     |                    |
| Leptospirosis IgG    | Leptospirosis Immunoglobulin G  | `Leptospirosis IgG` | `lab:tropicalInfection:LeptospirosisIgG`      | string     |                 |     |                    |

## Cardiac Marker
* Fill-in standard key: `lab:cardiacMarker`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| LDH    | Lactate Dehydrogenase  | `LDH` | `lab:cardiacMarker:LDH` | float     | U/L    |       |           |
| Troponin-T hs    | Troponin T High Sensitivity  | `Troponin-T hs` | `lab:cardiacMarker:hs-cTnT` | float     | pg/ml    |       |           |
| hs-Troponin I    | High Sensitivity hs-Troponin I  | `hs-Troponin I` | `lab:cardiacMarker:hs-cTnI` | float     | ng/L    |       |           |
| Total CK    | Total Creatine Kinase  | `Total CK` | `lab:cardiacMarker:totalCK` | float     | U/L    |       |           |
| CK-MB Activity   | Creatine Kinase Myoglobin Binding Activity | `CK-MB-Activity` | `lab:cardiacMarker:CK-MB-Activity` | float     | U/L    |       |           |
| CK-MB Mass  | Creatine Kinase Myoglobin Binding Mass | `CK-MB-Mass` | `lab:cardiacMarker:CK-MB-Mass` | float     | ng/ml    |       |           |
| Pro-BNP  | Pro-hormone B-type Natriuretic Peptide | `Pro-BNP` | `lab:cardiacMarker:Pro-BNP` | float     | pg/ml    |       |           |

## Blood Degradation Product
* Fill-in standard key: `lab:bloodDegradation`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| D-dimer    | D-dimer  | `D-dimer` | `lab:bloodDegradation:D-dimer` | float     | ng/ml    |       |           |
| Fibrinogen    | Fibrinogen  | `Fibrinogen` | `lab:bloodDegradation:fibrinogen` | float     | mg/dl    |       |           |

## Blood Lactate
* Fill-in standard key: `lab:bloodLactate`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Blood Lactate    | Blood Lactate  | `Blood Lactate` | `lab:bloodLacate:bloodLactate` | float     | mmol/dl    |       |           |

## Inflammatory Marker
* Fill-in standard key: `lab:inflammatoryMarker`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| ESR    | Erythrocyte Sedimentation Rate  | `ESR` | `lab:inflammatoryMarker:ESR` | float     | mm/hr    |       |           |
| CRP    | C-reactive Protein  | `CRP` | `lab:inflammatoryMarker:CRP` | float     | mg/L    |       |           |
| PCT    | Procalcitonin  | `PCT` | `lab:inflammatoryMarker:PCT` | float     | ng/ml    |       |           |

## Serum Cortisol
* Fill-in standard key: `lab:serumCortisol`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Serum Morning Cortisol    | Serum Morning Cortisol  | `Serum Morning Cortisol` | `lab:serumCortisol:serumMorningCortisol` | float     | mcg/dl    |       |           |
| Serum Random Cortisol    | Serum Random Cortisol  | `Serum Random Cortisol` | `lab:serumCortisol:serumRandomCortisol` | float     | mcg/dl    |       |           |

## Respiratory Tract Infection Viral Profile
* Fill-in standard key: `lab:respiratoryTractInfectionViralProfile`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Influenza A    | Influenza A  | `Influenza A` | `lab:respiratoryTractInfectionViralProfile:InfluenzaA` | string     |     |       |           |
| Influenza B    | Influenza B  | `Influenza B` | `lab:respiratoryTractInfectionViralProfile:InfluenzaB` | string     |     |       |           |
| RSV Antigen   | Respiratory Syncytial Virus Antigen  | `RSV Antigen` | `lab:respiratoryTractInfectionViralProfile:RSV-Ag` | string     |     |       |           |
| COVID-19 Antigen   | Coronavirus Disease 2019 Antigen  | `COVID-19 Antigen` | `lab:respiratoryTractInfectionViralProfile:COVID-19 Antigen` | string     |     |       |           |
| COVID-19 IgM   | Coronavirus Disease 2019 Immunoglobulin M  | `COVID-19 IgM` | `lab:respiratoryTractInfectionViralProfile:COVID-19IgM` | string     |     |       |           |
| COVID-19 IgG   | Coronavirus Disease 2019 Immunoglobulin G  | `COVID-19 IgG` | `lab:respiratoryTractInfectionViralProfile:COVID-19IgG` | string     |     |       |           |
| Mycoplasma IgM   | Mycoplasma Immunoglobulin M  | `Mycoplasma IgM` | `lab:respiratoryTractInfectionViralProfile:MycoplasmaIgM` | string     |     |       |           |
| Mycoplasma IgG   | Mycoplasma Immunoglobulin G  | `Mycoplasma IgG` | `lab:respiratoryTractInfectionViralProfile:MycoplasmaIgG` | string     |     |       |           |

## Iron Study
* Fill-in standard key: `lab:ironStudy`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Serum Iron   | Serum Iron  | `SI` | `lab:ironStudy:SI` | float     | mcg/dl    |       |           |
| TIBC   | Total Iron Binding Capacity  | `TIBC` | `lab:ironStudy:TIBC` | float     | mcg/dl    |       |           |
| Ferritin   | Ferritin  | `Ferritin` | `lab:ironStudy:ferritin` | float     | mcg/L    |       |           |

## Antiglobulin Test
* Fill-in standard key: `lab:antiglobulinTest`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Direct Antiglobulin Test   | Direct Antiglobulin Test  | `Direct Antiglobulin Test` | `lab:antiglobulinTest:DAT` | string     |     |       |           |
| Indirect Antiglobulin Test   | Indirect Antiglobulin Test  | `Indirect Antiglobulin Test` | `lab:antiglobulinTest:IAT` | string     |     |       |           |

## Complement Level
* Fill-in standard key: `lab:complementLevel`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| C3c Level   | Complement C3c Level  | `C3c Level` | `lab:complementLevel:C3c` | float     | mcg/ml     |      |           |
| C4 Level   | Complement C4 Level  | `C4 Level` | `lab:complementLevel:C4` | float     | mcg/ml     |      |           |

## Parathyroid Hormone
* Fill-in standard key: `lab:parathyroidHormone`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| PTH   | Parathyroid Hormone  | `PTH` | `lab:parathyroidHormone:PTH` | float     | pg/ml     |      |           |
| Vitamin D   | Vitamin D Level  | `Vitamin D` | `lab:parathyroidHormone:vitaminD` | float     | ng/ml     |      |           |
| Calcitonin   | Calcitonin  | `Calcitonin` | `lab:parathyroidHormone:calcitonin` | float     | pg/ml     |      |           |

## CSF Profile
* Fill-in standard key: `lab:CSF`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Color      | CSF Color     | `Color`                  | `lab:CSF:color`          | string      |              |                               |                    |
| Appearance      | CSF Appearance     | `Appearance`                  | `lab:CSF:appearance`    | string      |              |                               |                    |
| Open Pressure      | Open Pressure     | `Open Pressure`                  | `lab:CSF:openPressure`    | float      | cmH2O             |                               |                    |
| Close Pressure      | Close Pressure     | `Close Pressure`                  | `lab:CSF:closePressure`    | float      | cmH2O             |                               |                    |
| RBC      | CSF Red Blood Cell | `RBC`  | `lab:CSF:RBC`    | float      |             |          |                    |
| WBC      | CSF White Blood Cell | `WBC`  | `lab:CSF:WBC`    | float      |             |          |                    |
| Neutrophil      | CSF Neutrophil | `Neutrophil`  | `lab:CSF:N`    | float      | %            |          |                    |
| Lymphocyte      | CSF Lymphocyte | `Lymphocyte`  | `lab:CSF:L`    | float      | %            |          |                    |
| Protein      | CSF Protein | `Protein`  | `lab:CSF:protein`    | float      |   mg/dl         |          |                    |
| Glucose      | CSF Glucose | `Glucose`  | `lab:CSF:glucose`    | float      |   mg/dl         |          |                    |
| Gram Stain      | CSF Gram Stain | `Gram Stain`  | `lab:CSF:Gram`    | string      |            |          |                    |
| Culture      | CSF Culture | `Culture`  | `lab:CSF:culture`    | string      |            |          |                    |

## Ascites Profile
* Fill-in standard key: `lab:ascites`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Color      | Ascites Color     | `Color`                  | `lab:ascites:color`          | string      |              |                               |                    |
| Appearance      | Ascites Appearance     | `Appearance`                  | `lab:ascites:appearance`    | string      |              |                               |                    |
| RBC      | Ascites Red Blood Cell | `RBC`  | `lab:ascites:RBC`    | float      | cells/cu.mm.            |          |                    |
| WBC      | Ascites White Blood Cell | `WBC`  | `lab:ascites:WBC`    | float      | cells/cu.mm.            |          |                    |
| Neutrophil      | Ascites Neutrophil | `Neutrophil`  | `lab:ascites:N`    | float      | %            |          |                    |
| Lymphocyte      | Ascites Lymphocyte | `Lymphocyte`  | `lab:ascites:L`    | float      | %            |          |                    |
| Protein      | Ascites Protein | `Protein`  | `lab:ascites:protein`    | float      |   g/dl         |          |                    |
| Albumin      | Ascites Albumin | `Albumin`  | `lab:ascites:albumin`    | float      |   g/dl         |          |                    |
| Gram Stain      | Ascites Gram Stain | `Gram Stain`  | `lab:ascites:Gram`    | string      |            |          |                    |
| Culture      | Ascites Culture | `Culture`  | `lab:ascites:culture`    | string      |            |          |                    |

## Pleural Fluid Profile
* Fill-in standard key: `lab:pleuralFluid`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Color      | Pleural Fluid Color     | `Color`                  | `lab:pleuralFluid:color`          | string      |              |                               |                    |
| Appearance      | Pleural Fluid Appearance     | `Appearance`                  | `lab:pleuralFluid:appearance`    | string      |              |                               |                    |
| pH      | Pleural Fluid pH     | `pH`                  | `lab:pleuralFluid:pH`    | float      |              |                               |                    |
| RBC      | Pleural Fluid Red Blood Cell | `RBC`  | `lab:pleuralFluid:RBC`    | float      | cells/cu.mm.            |          |                    |
| WBC      | Pleural Fluid White Blood Cell | `WBC`  | `lab:pleuralFluid:WBC`    | float      | cells/cu.mm.            |          |                    |
| Neutrophil      | Pleural Fluid Neutrophil | `Neutrophil`  | `lab:pleuralFluid:N`    | float      | %            |          |                    |
| Lymphocyte      | Pleural Fluid Lymphocyte | `Lymphocyte`  | `lab:pleuralFluid:L`    | float      | %            |          |                    |
| Glucose      | Pleural Fluid Glucose | `Glucose`  | `lab:pleuralFluid:Glucose`    | float      |   mg/dl         |          |                    |
| LDH      | Pleural Fluid LDH | `LDH`  | `lab:pleuralFluid:LDH`    | float      |   U/L         |          |                    |
| Gram Stain      | Pleural Fluid Gram Stain | `Gram Stain`  | `lab:pleuralFluid:Gram`    | string      |            |          |                    |
| Culture      | Pleural Fluid Culture | `Culture`  | `lab:pleuralFluid:culture`    | string      |            |          |                    |

## Synovial Fluid Profile
* Fill-in standard key: `lab:synovialFluid`

| subitem | full name        | Fill-in subitem style | Fill-in flatten style | value type | unit                | description                   |
| ------- | ---------------- | --------------------- | --------------------- | ---------- | ------------------- | ----------------------------- |
| Color      | Synovial Fluid Color     | `Color`                  | `lab:synovialFluid:color`          | string      |              |                               |                    |
| Appearance      | Synovial Fluid Appearance     | `Appearance`                  | `lab:synovialFluid:appearance`    | string      |              |                               |                    |
| Viscosity      | Synovial Fluid Viscosity     | `Viscosity`                  | `lab:synovialFluid:viscosity`          | string      |              |                               |                    |
| RBC      | Synovial Fluid Red Blood Cell | `RBC`  | `lab:synovialFluid:RBC`    | float      | cells/cu.mm.            |          |                    |
| WBC      | Synovial Fluid White Blood Cell | `WBC`  | `lab:synovialFluid:WBC`    | float      | cells/cu.mm.            |          |                    |
| Neutrophil      | Synovial Fluid Neutrophil | `Neutrophil`  | `lab:synovialFluid:N`    | float      | %            |          |                    |
| Lymphocyte      | Synovial Fluid Lymphocyte | `Lymphocyte`  | `lab:synovialFluid:L`    | float      | %            |          |                    |
| Gram Stain      | Synovial Fluid Gram Stain | `Gram Stain`  | `lab: Synovial Fluid Profile:Gram`    | string      |            |          |                    |
| Culture      |  Synovial Fluid Culture | `Culture`  | `lab: Synovial Fluid Profile:culture`    | string      |            |          |                    |
| Crystal      |  Synovial Fluid Crystal | `Crystal`  | `lab: Synovial Fluid Profile:crystal`    | string      |            |          |                    |
