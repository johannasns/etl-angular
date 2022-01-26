import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

public users: User[] = [
    new User(1, 'fiorellino@umbertosmaila.it', 'Umberto Smaila'),
    new User(2, 'libidine@jerrycala.it', 'Jerry Calà'),
    new User(3, 'bagaglino@pippofranco.it', 'Pippo Franco')
  ];

  constructor() { }

public handleDelete(user: User): void {
    this.users.splice(
      this.users.indexOf(user),
      1
    );
  }

  ngOnInit(): void {
  }

}
