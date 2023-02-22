import { Element } from '@angular/compiler';
import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit{

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

   ngAfterViewInit(): void {
    }
}
