import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {EmbaucheService} from '../../shared/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  personnes: Personne[];
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit() {
    this.personnes = this.embaucheService.getEmbauchees();
  }

}
