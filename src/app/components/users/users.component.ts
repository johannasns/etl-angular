import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: '[app-users]', // parentesi quadre per farlo diventare attributo
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

@Input() users !: User; 
@Output() public delete: EventEmitter<User> = new EventEmitter();

public HandleDelete():void {
  this.delete.emit(this.users)
}

  constructor() { }

  ngOnInit(): void {
  }

}
