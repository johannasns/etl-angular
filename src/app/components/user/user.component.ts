import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  public user!: User;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      map(p => p.get('id') as string),
      switchMap(id => this._userService.get(+id))
    ).subscribe(user => this.user = user)
  }
  // quando il risultato della funzione è avvolto in un Observable non uso map
  // ma switch map
  // mi deregistra (unsubscribe) dallo stream precedente e mi risparmia spazio
}
