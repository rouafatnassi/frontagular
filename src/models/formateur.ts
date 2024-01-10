// models/formateur.model.ts
export interface Formateur {
    id: number;
    Nom: string;
    Prenom: string;
    Email: string;
    Telephone: string;
    NumeroCarteIdentite: string;
    MotDePasse: string;
    specialites: string[];
  }
  