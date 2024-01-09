// candidat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, catchError, map, of } from 'rxjs';
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
    return this.http.get<Condidat[]>(this.apiUrl);
  }

  getCandidatById=(id: number): Condidat | undefined=> {
    return this.condidat.find(condidats=>condidats.IDCandidat===id)
    
    
  }

  getlastid=()=>{
    return this.condidat[this.condidat.length - 1].IDCandidat;
  }
  
  createCandidat=(candidat: Condidat): void =>{
    this.http.post<Condidat>(this.apiUrl,candidat,this.options).subscribe({next:(candidat)=>{this.condidat=[...this.condidat,candidat];
    this.condidatArrayEdited.next([...this.condidat])},error:(err)=>console.error(err),complete:()=>console.log("request completed")})
  }



  deleteCandidat=(id: number): void=>{
   this.http.delete(`${this.apiUrl}/${id}`).subscribe(()=>
   {this.condidat=this.condidat.filter(
    cd=>cd.IDCandidat!==id
    )
   this.condidatArrayEdited.next([...this.condidat])})
  }

  login(email: string, password: string): Observable<any> {
    // Assuming you have a 'users' array in your JSON file
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.Email === email && u.MotDePasse === password);

        if (user) {
          // Successful login
          // You can perform additional actions or store user information as needed
          console.log('Login successful:', user);
          return { success: true, user };
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

