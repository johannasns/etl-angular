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

  constructor(private _route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit(): void {
    this._route.paramMap.pipe( // pipe serve per applicare gli operatori di rxjs in cascata
      map(p => p.get('id') as string),
      switchMap(id => this._userService.get(+id))
    ).subscribe(user => this.user = user);
  }

}

    // prelevo l'id + chiamata al backend
    // param e query params sono DEPRECATE perchè delle vecchie versioni di "ANGULAR"
    // bisogna usare quelli con "Map" finale
    // questa notazione è un Observable che emetterà degli oggetti , quindi ci tocca fare un subscribe.
    // e' un observable , perchè essendo Angular sviluppato con rxjs, ci costringe a fare tutto in asincrono
    // anche se questo Observable fa una sola chiamata e non servirebbe una funziona asincrona.
    // dentro le () ci prendiamo l'elemento che "emette" con un parametro p
    // l'elemento param map ha 3 metodi
    // get --> parametro di una stringa che voglio recuperare.
    // getAll --> mi da un array con tutti i dati
    // has --> vuole una stringa, però ci dice solo se quell'elemtno esiste o no (restituisce un booleano)
    // keys --> un array di stringhe con solo chiavi e non valori
    // il console.log mi restituisce una stringa, perchè ci riferiamo al percorso nell'url
    // this._route.paramMap.subscribe( p => console.log(p.get('id'))); 
    //mi aggancio con ".pipe" al paramMap, che collega i due "stream" (le due linee temporali)
