import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../shared/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public authetificationService: AuthentificationService
  ) { }
  visibility = false;
  ngOnInit() {
  }

  logout() {
    this.authetificationService.logout();
  }

  show() {
    this.visibility = !this.visibility;
  }
}
