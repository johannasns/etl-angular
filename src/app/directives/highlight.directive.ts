import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private prev!: string;
  @Input() public color!: string; // unica proprietà rilevante per determinare lo stato della direttiva

  constructor(private _el: ElementRef<HTMLElement>) { 
     console.log("Ok");
    }
  
    
  @HostListener('mouseover') 
  public handleMouseOver(){
      console.log("Mouse over")
      this.prev = this._el.nativeElement.style.backgroundColor;
      this._el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  public handleMouseLeave() {
    this._el.nativeElement.style.backgroundColor = this.prev;
  }
}

