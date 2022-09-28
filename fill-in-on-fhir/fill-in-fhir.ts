import { CodeableConcept, Encounter, Identifier, Period, Reference } from "fhir/r4";

export type AtLeastOne<T, U> = [T, ...(T | U)[]]

export interface encryptedPatientCodableConcept extends CodeableConcept {
    code: "FEPI",
    text?: "Fill-in encrypted patient identifier"
}

export interface encryptedPatientIdentifier extends Identifier {
    type: encryptedPatientCodableConcept
    system?: "https://fillin.sati.co.th/Patient/"
}

export interface fillinFhirPatient {
    /** Resource Type Name (for serialization) */
    readonly resourceType: 'Patient';
    id: string
    /**
     * Date of Birth in ISO-8601 format
     * At least an estimated year should be provided as a guess if the real DOB is unknown  There is a standard extension "patient-birthTime" available that should be used where Time is required (such as in maternity/infant care systems).
     */
    birthDate: string
    /**
     * The gender might not match the biological sex as determined by genetics or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than male and female, though the vast majority of systems and contexts only support male and female.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific sex or gender aspect of interest (anatomical, chromosomal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosomal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overridable error, not a "hard" error.  See the Patient Gender and Sex section for additional information about communicating patient gender and sex.
     */
    gender: ('male' | 'female' | 'other' | 'unknown')
    /**
     * An identifier for this patient.
     */
    identifier: AtLeastOne<encryptedPatientIdentifier, Identifier>;
}

export interface encryptedEncounterCodableConcept extends CodeableConcept {
    code: "FEEI",
    text?: "Fill-in encrypted encounter identifier"
}

export interface encryptedEncounterIdentifier extends Identifier {
    type: encryptedEncounterCodableConcept
    system?: "https://fillin.sati.co.th/Encounter/"
}

export interface fillinFhirEncounter extends Encounter {
    id: string
    subject: Reference
    period: Period
    identifier: AtLeastOne<encryptedEncounterIdentifier, Identifier>
}
