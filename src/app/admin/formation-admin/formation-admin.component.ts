import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/models/formation';
import { FormationService } from 'src/service/formation.service';

@Component({
  selector: 'app-formation-admin',
  templateUrl: './formation-admin.component.html',
  styleUrls: ['./formation-admin.component.css']
})
export class FormationAdminComponent {
  formations: Formation[] = [];

  constructor(private formationService: FormationService,private router: Router) { }
  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.formationService.getFormations().subscribe(formations => {
      this.formations = formations;
    });
  }

  navigateToAddPage(): void {
    this.router.navigate(['/add-formation']); // Replace 'add-formation' with the actual route of your add page
  }
}
