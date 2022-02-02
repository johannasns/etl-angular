import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Fn esterna
//   - Raccoglie dati utili ai fini della validazione
//   - Restituisce la funzione di validazione interna,
//     quella utilizzata di fatto per validare il campo del form
export const forbiddenValidator = (...values: string[]): ValidatorFn => {
    // La funzione interna che viene restituita da quella esterna
    // Questa verrà usata da Angular per eseguire la validazione
    // sul campo in input / gruppo
    //
    // Quando viene invocata da Angular, le viene passato il Control
    // istanziato sull'elemento del Form
    return (c: AbstractControl): ValidationErrors | null => {
        for (const value of values) {
            // Se quanto digitato dall'utente (c.value) coincide
            // con uno degli elementi nell'array (una delle parole non ammesse)
            // restituisco un errore
            if (value === c.value) {
                return {
                    // La chiave da usare nell'oggetto di errore
                    // dovrebbe chiamarsi come la funzione di validazione
                    //
                    // Questa chiave è l'elemento che viene cercato
                    // con il metodo "hasError"
                    forbidden: true
                };
            }
        }

        // Nel caso in cui non si debba restituire un errore,
        // Angular impone la restituzione del valore null
        return null;
    };
};