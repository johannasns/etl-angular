import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title = 'etl-angular';

 
  public handleClick() {
    alert('Hai fatto click');
  }

}
