import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from 'src/service/condidat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private condidatService:CandidatService,private router:Router){}
  login (email:string,password:string){
    if(email!=null && password!=null){
      this.condidatService.login(email,password).subscribe((response)=>{localStorage.setItem('idCandidat',response.candidats[0].IDCandidat),console.log(response.candidats[0].IDCandidat)})
    }else alert("please fill all the inputs")
    this.router.navigate(['formationCandidat',localStorage.getItem('idCandidat')])
  }

}

