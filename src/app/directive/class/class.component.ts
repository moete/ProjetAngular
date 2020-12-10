import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  show = true;
  teams = [
    'est',
    'om',
    'barca',
    'milan'
  ]
  est = false;
  milan = true;
  barca = false;
  constructor() { }

  ngOnInit() {
  }
  changeTeam() {
    this.est = true;
    this.barca = false;
    this.milan = false;
  }
}
