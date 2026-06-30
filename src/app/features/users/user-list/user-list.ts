import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpUsers } from '../../../core/services/http-users';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink, JsonPipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  users: any = {} ;

  //Inyectar una dependencia
  private httpUsers = inject(HttpUsers )

  //Hook del ciclo de vida de un componente en Angular (cuando se inicializa el componente)
  ngOnInit(){
    this.httpUsers.getUsers().subscribe({
      next: (data) => {
        console.log( 'componente', this.users );
        // this.users = data;            //Asigando los datos del servicio al atributo del servicio al atributo publico para mostrarlo
      },
      error:(err) =>{
        console.error(err);
      }
    });
  }
}
