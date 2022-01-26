import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  public hero1: Hero = new Hero('Umbero Smaila', 100, 15, 'https://upload.wikimedia.org/wikipedia/commons/9/92/Umberto_Smaila.jpg');
  public hero2: Hero = new Hero('Marco Columbro', 100, 15, 'https://www.blogdicultura.it/wp-content/uploads/2017/12/marco-columbro-e-i-contatti-con-gli-alieni.jpg');

  constructor() { }

  public handleAttack(hero: Hero): void {
    if (this.hero1 === hero) {
      this.hero2.hp -= this.hero1.dmg;
    } else {
      this.hero1.hp -= this.hero2.dmg;
    }
  }

  ngOnInit(): void {
  }

}
