import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  public color= '';

  public handleButtons(a: string) {
    if (a == 'red') {
      this.color = 'codice rosso';
      alert(this.color);
    }

    if (a == 'green') {
      this.color = 'codice verde';
      alert(this.color);
    }

    if (a == 'yellow') {
      this.color = 'codice giallo';
      alert(this.color);
    }

    if (a == 'orange') {
      this.color = 'codice arancione';
      alert(this.color);
    }

  }

  ngOnInit(): void {
  }

}
