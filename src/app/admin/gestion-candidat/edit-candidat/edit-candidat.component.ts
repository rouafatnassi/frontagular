import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Condidat } from 'src/models/condidat';
import { CandidatService } from 'src/service/condidat.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.css']
})
export class EditCandidatComponent implements OnInit {

  candidat:Condidat|any
  idc:number|any
  formupdate:any
  editCandidatForm!:FormGroup

  constructor(private FormBuilder:FormBuilder,private activetedRoute:ActivatedRoute,private service: CandidatService, private router:Router){}
  
  ngOnInit(): void {
   this.editCandidatForm=this.FormBuilder.group({
    Nom:['',[Validators.required]],
    Prenom:['',[Validators.required]],
    Email:['',[Validators.required]],
    MotDePasse:['',[Validators.required]],
   })
   this.activetedRoute.paramMap.subscribe((params)=>{
    this.idc=Number(params.get('id'));
    this.service.getCandidatById(this.idc).subscribe((candidat) => {
      console.log(candidat);
      if(candidat){
        this.editCandidatForm.patchValue(candidat);
      }
    })
   })
  }

editCandidat(){
  const values=this.editCandidatForm.value;
  this.service.editCandidat({
    id:this.idc,
    Nom: values.Nom,
    Prenom: values.Prenom,
    Email: values.Email,
    NumeroCarteIdentite: values.NumeroCarteIdentite,
    MotDePasse: values.MotDePasse,

  });
  this.router.navigate(['admincandidat'])
}

}