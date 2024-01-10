// candidat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { Condidat } from 'src/models/condidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
   condidatArrayEdited=new Subject<Condidat[]>();
  private condidat:Condidat[]=[];
  private apiUrl = 'http://localhost:3000/candidats';
  options={headers:new HttpHeaders({'content-type':'application/json'})}
  constructor(private http: HttpClient) {}

  getCandidats(): Observable<Condidat[]> {
    console.log('Fetching candidat...');
    return this.http.get<Condidat[]>(this.apiUrl).pipe(
      tap((condidat)=>console.log('Received candidat:', this.condidat))
    );
  }

  getCandidatById(id: number): Observable<Condidat | undefined> {
    return this.http.get<Condidat[]>(this.apiUrl).pipe(
      map((condidats)=>condidats.find((condidat)=>condidat.id===id))
    );
    
  }

  getlastid=()=>{
    return this.condidat[this.condidat.length - 1].id;
  }
  
  createCandidat=(candidat:Partial<Condidat>): void =>{
    console.log("Requesting to save candidat:", candidat);
    this.http.post<Condidat>(this.apiUrl, candidat, this.options).subscribe({
      next: (savedFormation) => {
        console.log("candidat saved successfully:", savedFormation);
        this.condidat = [...this.condidat, savedFormation];
        this.condidatArrayEdited.next([...this.condidat]);
      },
      error: (err) => {
        console.error("Error saving candidat:", err);
  
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





  deleteCandidat=(id: number): void=>{
   this.http.delete(`${this.apiUrl}/${id}`).subscribe(()=>
   {this.condidat=this.condidat.filter(
    cd=>cd.id!==id
    )
   this.condidatArrayEdited.next([...this.condidat])})
  }

  editCandidat(candidat : Condidat):void{
    this.http.put<Condidat>(`${this.apiUrl}/${candidat.id}`,
    {

    Nom: candidat.Nom,
    Prenom: candidat.Prenom,
    Email: candidat.Email,
    NumeroCarteIdentite: candidat.NumeroCarteIdentite,
    MotDePasse: candidat.MotDePasse,
    },
    this.options ).subscribe(
      candidat => {
        this.condidat = this.condidat.map(
              cn=>cn.id===candidat.id?candidat:cn
            )
        this.condidatArrayEdited.next([...this.condidat])
      }
    )
  }

  login(email: string, password: string): Observable<any> {
    // Assuming you have a 'users' array in your JSON file
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(candidats => {
        const user = candidats.find(u => u.Email == email && u.MotDePasse == password);
        console.log(user);
        if (candidats) {
          // Successful login
          // You can perform additional actions or store user information as needed
          console.log('Login successful:', user);
          return { success: true, candidats };
        } else {
          // Failed login
          console.error('Login failed: Invalid credentials');
          return { success: false, message: 'Invalid credentials' };
        }
      }),
      catchError(error => {
        console.error('Error during login:', error);
        return of({ success: false, message: 'An error occurred during login' });
      })
    );
  }
}

