import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() public hero!: Hero;

  @Output() public attack: EventEmitter<Hero> = new EventEmitter();

  constructor() { }

  public handleClick(): void {
    this.attack.emit(this.hero);
  }

  ngOnInit(): void {
  }

}
