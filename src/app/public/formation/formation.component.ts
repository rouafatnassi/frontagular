import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/service/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  lesFormations:any
  constructor(private formationservice :FormationService ){}
  ngOnInit(): void {
    this.getAllFormation();
  }
  getAllFormation(){
    this.formationservice.getFormations().subscribe((data)=>{this.lesFormations=data,console.log(this.lesFormations)})
  }

}
