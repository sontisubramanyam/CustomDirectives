import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective implements OnInit {
  @Input() foreColor: any;
  @Input() bgColor: any;
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.foreColor;
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  } 
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = null;
    this.el.nativeElement.style.backgroundColor = null;
  }
  constructor(private el: ElementRef) { 

  }
  ngOnInit() {
    this.el.nativeElement.style.color = this.foreColor;
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }
}
