import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

public user1: User = new User("Tizio", "Caio", "tiziocaio@gmail.com")
public user2: User = new User("Tizio", "Caio", "tiziocaio@gmail.com")
public user3: User = new User("Tizio", "Caio", "tiziocaio@gmail.com")

public users = [this.user1, this.user2, this.user3]

public handleDelete():void {

   this.users.splice(0, 1);
}

  constructor() { }

  ngOnInit(): void {
  }

}
