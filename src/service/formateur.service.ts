// formateur.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { Formateur } from 'src/models/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  formateurArrayEdited=new Subject<Formateur[]>();
  private formateur:Formateur[]=[];
  private apiUrl = 'http://localhost:3000/formateurs';
  options={headers:new HttpHeaders({'content-type':'application/json'})};
  


  constructor(private http: HttpClient) {}

  getFormateurs(): Observable<Formateur[]> {
    console.log('Fetching formateurs...');
    return this.http.get<Formateur[]>(this.apiUrl).pipe(
      tap((formateur) => console.log('Received formateurs:', formateur))
    );
  }
  getFormateurById=(id: number): Formateur| undefined=>{
    return this.formateur.find(formateur=>formateur.IDFormateur==id)
  }

  getlastid=()=>{
    return this.formateur[this.formateur.length - 1].IDFormateur;
  }

  createFormateur=(formateur: Formateur): void=> {
  this.http.post<Formateur>(this.apiUrl,formateur,this.options).subscribe({next:(formateur)=>{this.formateur=[...this.formateur,formateur];
  this.formateurArrayEdited.next([...this.formateur])},error:(err)=>console.error(err),complete:()=>console.log("request completed")})
  }


  deleteFormateur=(id: number): void=> {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(()=>
    {this.formateur=this.formateur.filter(
     cd=>cd.IDFormateur!==id
     )
    this.formateurArrayEdited.next([...this.formateur])})
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
          localStorage.setItem('idFormateur',user.IDFormateur)
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
