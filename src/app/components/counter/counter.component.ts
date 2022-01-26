import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() public num = 0;
  @Output() public  limitReached: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  public handleSum(a: boolean) {
      if (a == true) {
      this.num++;
    } else {
      this.num--;
    }
  }
}
  
