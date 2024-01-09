import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/models/formateur';
import { SessionFormation } from 'src/models/session';
import { FormateurService } from 'src/service/formateur.service';
import { SessionFormationService } from 'src/service/session.service';

@Component({
  selector: 'app-session-formation',
  templateUrl: './session-formation.component.html',
  styleUrls: ['./session-formation.component.css']
})
export class SessionFormationComponent implements OnInit {
  formateur:Formateur |any
  lesSessions:SessionFormation |any

  constructor(private formateurService: FormateurService,private sessionservice:SessionFormationService){}
  ngOnInit(): void {
    const formateurId = Number(localStorage.getItem('idFormateur'));

    this.formateur=this.formateurService.getFormateurById(formateurId)
      
  
      this.sessionservice.getSessionsFormations().subscribe((data) => {
        // Filter sessions based on the formateur's id in the collection
        this.lesSessions = data.filter(session => session.formateurs.includes(formateurId));
        console.log(this.lesSessions);
      });
    };
      
  }



 



