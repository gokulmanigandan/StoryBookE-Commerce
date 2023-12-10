import { Directive ,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor( private el2: ElementRef) { }

  @HostListener('click')
  prevFunc(){
    var elm = this.el2.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName("item")
    elm.prepend(item[item.length-1]);  
  }
}
