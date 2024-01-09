import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Condidat } from 'src/models/condidat';
import { CandidatService } from 'src/service/condidat.service';

@Component({
  selector: 'app-gestion-candidat',
  templateUrl: './gestion-candidat.component.html',
  styleUrls: ['./gestion-candidat.component.css']
})
export class GestionCandidatComponent implements OnInit , OnDestroy {
  candidats: Condidat[] = [];
  subscription!:Subscription;

  constructor(private candidatService: CandidatService,private router: Router) {}


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    
 
    this.candidatService.getCandidats().subscribe((data) => {
      this.candidats = data;

    });
  }

  deleteCandidat=(index:number)=>{
    if(window.confirm("Etes-vous sure de vouloir supprimer le Candidat")){
    this.candidatService.deleteCandidat(index);}
    this.router.navigate(['/admincandidat']);
  }
  

}
