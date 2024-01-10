import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Formateur } from 'src/models/formateur';
import { FormateurService } from 'src/service/formateur.service';

@Component({
  selector: 'app-gestion-formateur',
  templateUrl: './gestion-formateur.component.html',
  styleUrls: ['./gestion-formateur.component.css']
})
export class GestionFormateurComponent implements OnInit , OnDestroy{
  formateurs: Formateur[] = [];
  subscription!:Subscription;

  constructor(private formateurService: FormateurService,private router: Router) {}

  ngOnInit(): void {
    
 
    this.formateurService.getFormateurs().subscribe((data) => {
      this.formateurs = data;

    });
  }

  
  ngOnDestroy(): void {
  }

  deleteFormateur=(index:number)=>{
    if(window.confirm("Etes-vous sure de vouloir supprimer le formatuer")){
    this.formateurService.deleteFormateur(index);}
  this.ngOnInit;
  }
}
