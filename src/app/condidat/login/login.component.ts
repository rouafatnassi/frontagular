import { Component } from '@angular/core';
import { CandidatService } from 'src/service/condidat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private condidatService:CandidatService){}
  login (email:string,password:string){
    if(email!=null && password!=null){
      this.condidatService.login(email,password).subscribe((response)=>alert("login succefull"))
    }else alert("please fill all the inputs")
  }

}

