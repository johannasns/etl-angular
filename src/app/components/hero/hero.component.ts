import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() public hero1 !: any ;
  @Input() public hero2 !: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
