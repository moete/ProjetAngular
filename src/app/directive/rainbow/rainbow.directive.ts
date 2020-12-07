import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
 tab = [
   'lightblue',
   'pink',
   'coral',
   'lightyellow',
   'lightgreen',
   'gold',
   'gray'


 ];
 @HostBinding ('style.borderColor') bc ;
 @HostBinding('style.color') color ;
  constructor() { }
 
  @HostListener('keypress') changeColor() {
    const index = Math.floor(Math.random() * (this.tab.length -1))
    this.bc = this.tab[index];
    this.color = this.tab[index];
  }

}
