import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBoardChange]'
})
export class BackgroudChangeDirective {
  @Input('appBoardChange')
  newColor: string | undefined;

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.highLight('#000');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.highLight(null);
  }

  private highLight(color: string | null): void{
    this.render.setStyle(this.elementRef.nativeElement,'background' ,color);

  }
}
