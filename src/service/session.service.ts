// session-formation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SessionFormation } from 'src/models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionFormationService {
 sessionArrayEdited=new Subject<SessionFormation[]>();
 private sessionFormation:SessionFormation[]=[];
  private apiUrl = 'http://localhost:3000/sessionsFormations';
  options={headers:new HttpHeaders({'content-type':'application/json'})};

  constructor(private http: HttpClient) {}

  getSessionsFormations(): Observable<SessionFormation[]> {
    return this.http.get<SessionFormation[]>(this.apiUrl);
  }

  getSessionFormationById=(id: number):SessionFormation| undefined=> {
    return this.sessionFormation.find(sessionFormation=>sessionFormation.IDSession==id)
  
  }
  getlastid=()=>{
    return this.sessionFormation[this.sessionFormation.length - 1].IDSession;
  }

  createSessionFormation=(sessionFormation: SessionFormation): void=>{
    this.http.post<SessionFormation>(this.apiUrl,this.sessionFormation,this.options).subscribe({next:(session)=>{this.sessionFormation=[...this.sessionFormation,session];
      this.sessionArrayEdited.next([...this.sessionFormation])},error:(err)=>console.error(err),complete:()=>console.log("request completed")})
      }

  updateSessionFormation(sessionFormation: SessionFormation): void {
    this.http.put<SessionFormation>(`${this.apiUrl}/${sessionFormation.IDSession}`,
    {
      IDFormation:sessionFormation.IDFormation,
      DateDebut: sessionFormation.DateDebut,
      DateFin: sessionFormation.DateFin,
      formateurs:sessionFormation.formateurs,
      candidats: sessionFormation.candidats,
    },
    this.options).subscribe(
      sessionFormation=>{
        this.sessionFormation=this.sessionFormation.map(sf=>sf.IDSession===sessionFormation.IDSession?sessionFormation:sf)
        this.sessionArrayEdited.next([...this.sessionFormation])
      }
    )
  }

  deleteSessionFormation=(id: number):void=> {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(()=>
    {this.sessionFormation=this.sessionFormation.filter(
     cd=>cd.IDSession!==id
     )
    this.sessionArrayEdited.next([...this.sessionFormation])})
  }


  
}
