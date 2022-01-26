import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { hero1 } from 'src/app/models/hero';
import { hero2 } from 'src/app/models/hero';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
 
  public hero1 = new hero1;
  public hero2 = new hero2;

  @Output() public handleDamage: EventEmitter <hero1> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

}
