import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {CvService} from '../../shared/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne [];
  selectedPersonne: Personne;
  constructor(
    private cvService: CvService
  ) { }
  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (error) => {
        alert('Problème d\'accès à l api les données affichées sont fake');
        console.log(error);
        this.personnes = this.cvService.getFakePersonnes();
      }
    );
  }
  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}
