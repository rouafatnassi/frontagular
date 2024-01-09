// admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { Admin } from 'src/models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminArrayEdited=new Subject<Admin[]>();
  private admin:Admin[]=[];
  private apiUrl = 'http://localhost:3000/administrateurs';
  options={headers:new HttpHeaders({'content-type':'application/json'})}
  

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }

  getAdminById=(id: number): Admin| undefined =>{
    return  this.admin.find(admin=>admin.IDAdmin===id)
    
  }

  getlastid=()=>{
    return this.admin[this.admin.length - 1].IDAdmin;
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
