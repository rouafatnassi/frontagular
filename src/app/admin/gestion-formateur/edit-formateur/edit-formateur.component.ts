import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from 'src/service/formateur.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Formateur } from 'src/models/formateur';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.css']
})
export class EditFormateurComponent implements OnInit {
  formateur:Formateur | any
  idf:number|any
  formupdate:any

  
  editFormateurForm!:FormGroup
  constructor(private FormBuilder:FormBuilder,private activetedRoute:ActivatedRoute,private service: FormateurService, private router:Router){}
  ngOnInit(): void {
    this.editFormateurForm=this.FormBuilder.group({
      Nom:['',[Validators.required]],
      Prenom:['',[Validators.required]],
      Email:['',[Validators.required]],
      Telephone:['',[Validators.required]],
   
      MotDePasse:['',[Validators.required]],
      
    })
    this.activetedRoute.paramMap.subscribe((params) => {
      this.idf = Number(params.get('id'));

      this.service.getFormateurById(this.idf).subscribe((formateura) => {
        console.log(formateura);

        // Check if formateura is defined before patching the form
        if (formateura) {
          this.editFormateurForm.patchValue(formateura);
          
        }
      });
    });
    
  
  }
  editFormateur() {
    const values = this.editFormateurForm.value;

    this.service.editFormateur({
      id: this.idf,
      Nom: values.Nom,
      Prenom: values.Prenom,
      Email: values.Email,
      Telephone: values.Telephone,
      NumeroCarteIdentite: values.NumeroCarteIdentite,
      MotDePasse: values.MotDePasse,
      specialites: values.specialites,
    });
    this.router.navigate(['adminformateur'])
  }
  
}



