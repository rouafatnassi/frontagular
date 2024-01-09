// formation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Formation } from 'src/models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  formationArrayEdited = new Subject<Formation[]>();
  private formation:Formation[]=[];

  private apiUrl = 'http://localhost:3000/formations';

  options={headers:new HttpHeaders({'content-type':'application/json'})}
  

  constructor(private http: HttpClient) {}

  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.apiUrl);
  }

  getFormationById=(id: number): Formation|undefined=> {
    return this.formation.find(formation=>formation.id===id)
    
  }

  getlastid=()=>{
    return this.formation[this.formation.length - 1].id;
  }

  createFormation = (formation: Partial<Formation>): void => {
    console.log("Requesting to save formation:", formation);
  
    this.http.post<Formation>(this.apiUrl, formation, this.options).subscribe({
      next: (savedFormation) => {
        console.log("Formation saved successfully:", savedFormation);
  
        this.formation = [...this.formation, savedFormation];
        this.formationArrayEdited.next([...this.formation]);
      },
      error: (err) => {
        console.error("Error saving formation:", err);
  
        // Check the server response (if available)
        if (err.error) {
          console.error("Server response:", err.error);
        }
      },
      complete: () => {
        console.log("Request completed");
      }
    });
  }

  
  
  updateFormation(formation: Formation): void{
    this.http.put<Formation>(`${this.apiUrl}/${formation.id}`,
    {
      Titre: formation.Titre,
      Description: formation.Description,
      ChargeHoraires: formation.ChargeHoraires,
      Programme: formation.Programme,
      NiveauDifficulte: formation.NiveauDifficulte,
      categories: formation.categories,
      IDAdmin: formation.IDAdmin,
    },
    this.options).subscribe(
      formation=>{
        this.formation=this.formation.map(fm=>fm.id===formation.id?formation:fm)
        this.formationArrayEdited.next([...this.formation])
      }
    )
  }

  deleteFormation=(id: number): void=>{
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(()=>
    {this.formation=this.formation.filter(
     cd=>cd.id!==id
     )
    this.formationArrayEdited.next([...this.formation])})
   }







   /////////////
   

  getFormateurs(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/formateurs`);
  }

  getCandidats(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/candidats`);
  }

  getSessionsFormations(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/sessionsFormations`);
  }
}
