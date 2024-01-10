import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
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
import { FormsModule } from '@angular/forms';
import { FormationDetailsAdminComponent } from './admin/formation-admin/formation-details-admin/formation-details-admin.component';
import { EditFormateurComponent } from './admin/gestion-formateur/edit-formateur/edit-formateur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCandidatComponent } from './admin/gestion-candidat/edit-candidat/edit-candidat.component';
import { SessioncondidatComponent } from './condidat/sessioncondidat/sessioncondidat.component';
import { CreateSignComponent } from './condidat/create-sign/create-sign.component';
@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    FormationComponent,
    LoginComponent,
    LoginformateurComponent,
    LoginadminComponent,
    SessionFormationComponent,
    AdminHomeComponent,
    GestionFormateurComponent,
    GestionCandidatComponent,
    FormationAdminComponent,
    AddFormationComponent,
    FormationDetailsAdminComponent,
    EditFormateurComponent,
    EditCandidatComponent,
    SessioncondidatComponent,
    CreateSignComponent
    
    
  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
