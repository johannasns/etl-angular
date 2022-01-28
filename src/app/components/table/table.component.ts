import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy, OnInit {

private _users$!: Subscription // dollaro per subscription o stream
public users: User[] = [
  //   new User(1, 'fiorellino@umbertosmaila.it', 'Umberto Smaila'),
  //   new User(2, 'libidine@jerrycala.it', 'Jerry Calà'),
  //   new User(3, 'bagaglino@pippofranco.it', 'Pippo Franco')
   ];

  constructor(private _userService: UserService) { }

public handleDelete(user: User): void {
    this.users.splice(this.users.indexOf(user),1);
  }

  public ngOnDestroy(): void {
      this._users$.unsubscribe();
  }

  public ngOnInit(): void {
    this._users$ = this._userService.list().subscribe(users => this.users = users);
      
    setTimeout(() => this.users.forEach(u => u.name = 'Pippo Franco'), 5000); 
  }
}
