import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact : FormGroup ; 
  constructor( private formBuilder : FormBuilder) {
    this.contact = formBuilder.group({
      EmailAddr : new FormControl(),
      description : new FormControl() ,
    });
    
   }

  ngOnInit(): void {
  }
  contacter() {
    console.log(this.contact)
  }

}
