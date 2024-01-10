import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Condidat } from 'src/models/condidat';
import { CandidatService } from 'src/service/condidat.service';

@Component({
  selector: 'app-create-sign',
  templateUrl: './create-sign.component.html',
  styleUrls: ['./create-sign.component.css']
})
export class CreateSignComponent {
  candidats:Condidat[]=[]
  newCandidat:Condidat={
    id: 0,
    Nom: "",
    Prenom: "",
    Email:"",
    NumeroCarteIdentite:"",
    MotDePasse:"",

  };
  constructor(private candidatService:CandidatService, private router: Router){}

  createCandidat(form:NgForm):void{
    if(form.invalid){
      return;
    }
    const newCandidat:Omit<Condidat,'id'>={
      Nom: form.value.Nom,
      Prenom: form.value.Prenom,
      Email: form.value.Email,
      NumeroCarteIdentite:form.value.cin,
      MotDePasse:form.value.mtp,
  

    };

    this.candidatService.createCandidat(newCandidat);
    window.alert('Formation ajoutée avec succès');
    this.router.navigate(['/logincondidat']);
  }
}
