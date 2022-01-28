import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: '[app-users]', // parentesi quadre per farlo diventare attributo
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnChanges, OnInit {

@Input() public user!: User;

  @Output() public delete: EventEmitter<User> = new EventEmitter();

  constructor() {
    setTimeout(() => this.user.name = "Pippo Franco", 5000)
  }

  public handleDeleteClick(): void {
    this.delete.emit(this.user);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['user']);
  }

  ngOnInit(): void {
  }

}
