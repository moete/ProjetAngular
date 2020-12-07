import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding ('style.backgroundColor') bg;

  constructor() { }
@HostListener ('mouseenter') mouseenter() {
  this.bg = 'red' ; 
}
@HostListener ('mouseleave') mouseleave() {
  this.bg = 'yellow' ;
}
}
