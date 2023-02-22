import { Element } from '@angular/compiler';
import { Directive, ElementRef, HostListener,} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{

 parentTag: ElementRef;


  @HostListener('click') toggleOpen(){
    this.parentTag.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
  }
  // @HostListener('document:click',['$event']) closeDropdown(event: Event){
  //   if ((this.parentTag.nativeElement.querySelector('.dropdown-menu').classList.contains('show'))&& (this.elem.nativeElement.contains(event.target))){
  //     this.parentTag.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
  //   } else{
  //     return;
  //   };
  // }

  constructor(private elem: ElementRef) {
    this.parentTag = elem;
   }

}
