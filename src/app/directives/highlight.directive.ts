import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private _prev!: string;
  
  // Tra parentesi tonde, l'alias della proprietà in Input
  // La proprietà "color" si chiamerà, all'esterno di questa classe,
  // come la stringa indicata tra le parentesi tonde del decorator
  //
  // <h1 appHighlight="orange">
  //   invece di
  // <h1 appHighlight color="orange">

  @Input('appHighlight') public color!: string;

  constructor(private _el: ElementRef<HTMLElement>) {
    console.log('highlight directive');
  }

  @HostListener('mouseover')
  public handleMouseOver(): void {
    console.log('mouse over!!');
    this._prev = this._el.nativeElement.style.backgroundColor;
    this._el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  public handleMouseOut(): void {
    this._el.nativeElement.style.backgroundColor = this._prev;
  }

}
