import { Component, OnInit } from '@angular/core';
import { Condidat } from 'src/models/condidat';
import { Formation } from 'src/models/formation';
import { SessionFormation } from 'src/models/session';
import { CandidatService } from 'src/service/condidat.service';
import { FormationService } from 'src/service/formation.service';
import { SessionFormationService } from 'src/service/session.service';

@Component({
  selector: 'app-sessioncondidat',
  templateUrl: './sessioncondidat.component.html',
  styleUrls: ['./sessioncondidat.component.css']
})
export class SessioncondidatComponent implements OnInit {
  candidat: Condidat|any
  lesSeesions:SessionFormation|any
lesformations:Formation|any
  constructor(private candidatService: CandidatService,private sessionservice:SessionFormationService,private formationservice:FormationService){}
  ngOnInit(): void {
    const candidatId = Number(localStorage.getItem('idCandidat'));
    this.candidat = this.candidatService.getCandidatById(candidatId);
  
    this.sessionservice.getSessionsFormations().subscribe((data) => {
      this.lesSeesions = data.filter((session) => session.candidats.includes(candidatId));
      console.log(this.lesSeesions)
  
      // Retrieve formation information for each session
      this.lesSeesions.forEach((session:SessionFormation) => {
        // Assuming getFormationById returns a Formation directly, not an Observable
        const formation = this.formationservice.getFormationById(session.id);
  
        // Log or process the formation information
        console.log('Formation for session with ID', session.id, ':', formation);
  
        // Assign the formation information to the session if needed
        
      });
    });
  }
}
