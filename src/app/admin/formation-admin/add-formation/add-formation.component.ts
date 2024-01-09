import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/models/formation';
import { FormationService } from 'src/service/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent  {
  
  formations: Formation[] = [];
  newFormation: Formation = {
    id: 0,
    Titre: '',
    Description: '',
    Image:'',
    ChargeHoraires: 0,
    Programme: '',
    NiveauDifficulte: '',
    categories: [],
    IDAdmin: 1
  };
  constructor(private formationService: FormationService,private router: Router) { 
    
  }
 // TypeScript function in your component
// TypeScript function in your component
createFormation(form: NgForm): void {
  if (form.invalid) {
    // Handle invalid form data (if needed)
    return;
  }

  const newFormation: Omit<Formation, 'id'> = {
    Titre: form.value.titre,
    Description: form.value.description,
    Image: form.value.image,
    ChargeHoraires: form.value.chargeHoraires,
    Programme: form.value.programme,
    NiveauDifficulte: form.value.niveauDifficulte,
    categories: form.value.categories.split(',').map((category: string) => category.trim()),
    IDAdmin: 1,
  };

console.log("aaaaaaa",newFormation);

  // Call the service method
  this.formationService.createFormation(newFormation);

  // Update local state
  

  // Show success alert
  window.alert('Formation ajoutée avec succès');

  // Assuming you want to navigate back to the list after creation
  this.router.navigate(['/adminformation']); // replace with the actual route of your list page
}


}
