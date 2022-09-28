import { Encounter, Patient } from "fhir/r4";
import { fillinFhirPatient } from "./fill-in-fhir";

type NonConflictMerge<T, U> = Omit<T, keyof U> & U

export interface inputFillinFhirPatient extends NonConflictMerge<fillinFhirPatient, Patient> { }
export interface inputFillinFhirEncounter extends NonConflictMerge<Encounter,Encounter> {}