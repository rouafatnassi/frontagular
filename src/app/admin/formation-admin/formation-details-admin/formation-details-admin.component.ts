import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/service/formation.service';

@Component({
  selector: 'app-formation-details-admin',
  templateUrl: './formation-details-admin.component.html',
  styleUrls: ['./formation-details-admin.component.css']
})
export class FormationDetailsAdminComponent implements OnInit {

  allFormations: any[] = [];
  allFormateurs: any[] = [];
  allCandidats: any[] = [];
  allSessionsFormations: any[] = [];

  constructor(private formationDataService: FormationService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.formationDataService.getFormations().subscribe(formations => this.allFormations = formations);
    this.formationDataService.getFormateurs().subscribe(formateurs => this.allFormateurs = formateurs);
    this.formationDataService.getCandidats().subscribe(candidats => this.allCandidats = candidats);
    this.formationDataService.getSessionsFormations().subscribe(sessions => this.allSessionsFormations = sessions);
  }
  getFormateurName(formateurId: number): string {
    const formateur = this.allFormateurs.find(f => f.IDFormateur === formateurId);
    return formateur ? formateur.Nom : 'Unknown Formateur';
  }

  getCandidatName(candidatId: number): string {
    const candidat = this.allCandidats.find(c => c.IDCandidat === candidatId);
    return candidat ? candidat.Nom : 'Unknown Candidat';
  }

    getFormateursAndCandidats(formationId: number): any {
    return this.allSessionsFormations
      .filter((s) => s.IDFormation === formationId)
      // .filter((s) => s.id === formationId)
      .map((s) => {
        return {
          formateurs: s?.formateurs.map((formateurId: number) =>
            this.getFormateurName(formateurId)
          ),
          candidats: s?.candidats.map((candidatId: number) =>
            this.getCandidatName(candidatId)
          ),
        };
      })[0];
  }
}