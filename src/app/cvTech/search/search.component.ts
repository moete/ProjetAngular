import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {CvService} from '../../shared/cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  chaine = '';
  serachResult: Personne[];
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.serachResult = [];
  }
  search() {
    const name = this.chaine.trim();
    if (name.length) {
      this.cvService.findByName(name).subscribe(
        (personnes) => {
          console.log(personnes);
          this.serachResult = personnes;
        }
      );
    } else {
      this.serachResult = [];
    }
  }
  selectPeronne(personne: Personne) {
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.serachResult = [];
    this.chaine = '';
  }

}
