import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './public/formation/formation.component';
import { LoginComponent } from './condidat/login/login.component';
import { LoginformateurComponent } from './formateur/loginformateur/loginformateur.component';
import { LoginadminComponent } from './admin/loginadmin/loginadmin.component';
import { SessionFormationComponent } from './formateur/session-formation/session-formation.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { GestionFormateurComponent } from './admin/gestion-formateur/gestion-formateur.component';
import { GestionCandidatComponent } from './admin/gestion-candidat/gestion-candidat.component';
import { FormationAdminComponent } from './admin/formation-admin/formation-admin.component';
import { AddFormationComponent } from './admin/formation-admin/add-formation/add-formation.component';
import { FormationDetailsAdminComponent } from './admin/formation-admin/formation-details-admin/formation-details-admin.component';

const routes: Routes = [
  {path:'lesformation',component:FormationComponent},
  {path:'logincondidat',component:LoginComponent},
{path:'loginformateur', component:LoginformateurComponent},
{path:'loginadmin', component:LoginadminComponent},
{path:'messession', component:SessionFormationComponent},
{path:'adminhome', component:AdminHomeComponent},
{path:'adminformateur', component:GestionFormateurComponent},
{path:'admincandidat', component:GestionCandidatComponent},
{path:'adminformation', component:FormationAdminComponent},
{path:'add-formation', component:AddFormationComponent},
{path:'formation-details', component:FormationDetailsAdminComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
