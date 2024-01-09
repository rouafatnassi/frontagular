import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurService } from 'src/service/formateur.service';
import { SessionFormationComponent } from '../session-formation/session-formation.component';

@Component({
  selector: 'app-loginformateur',
  templateUrl: './loginformateur.component.html',
  styleUrls: ['./loginformateur.component.css']
})
export class LoginformateurComponent {
  constructor(private formateurService: FormateurService,private router:Router){}
  
  login (email:string,password:string){
    if(email!=null && password!=null){
      this.formateurService.login(email,password).subscribe((response)=>{alert("login succefull"),this.router.navigate(['messession'])})
    }else alert("please fill all the inputs")
  }

}
