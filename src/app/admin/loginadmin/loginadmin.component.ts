import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/service/administrateur.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent {
  constructor(private adminService:AdminService, private router:Router){}

  login(email:string,password:string){
    if(email!=null && password !=null){
      this.adminService.login(email,password).subscribe((response)=>{alert("login succefully"),this.router.navigate(['adminhome'])})
    }else alert("please fill all the inputs")
  
    
  }

}
