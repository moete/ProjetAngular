import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {CvService} from '../../shared/cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne: Personne;
  @Output() selectedPersonne = new EventEmitter();
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  selectPeronne() {
    // Todo emmetre un evenement et y injecter la personne
    this.selectedPersonne.emit(
      this.personne
    );
  }
}
