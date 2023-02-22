
import { Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHiglight]'
})
export class BetterHiglightDirective implements OnInit{

  @Input('appBetterHiglight') defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'orangered';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orangered');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orangered');
    this.backgroundColor = this.highlightColor;
  }  
  @HostListener('mouseleave') mouseLeave(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  
  }

}
