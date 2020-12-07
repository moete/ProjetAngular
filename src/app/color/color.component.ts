import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  color = 'red';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.color = params.default;
      }
    );
  }
  processReq(message: any) {
    alert(message);
  }
  loggerMesData () {
    
  }
 
  goToCv() {
    const link = ['cv'];
    this.router.navigate(link);
  }
}
