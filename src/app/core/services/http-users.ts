import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, tap } from 'rxjs';
import { ResponseUsers } from '../models/users';

@Service()
export class HttpUsers {
    //inyectar una dependencia
    private http = inject( HttpClient);
    
    //Meotodo para realizar a mi API donde tengo lista de usuario
    getUsers() {
        return this.http.get<ResponseUsers> ('http://localhost:3000/api/users').pipe(
            tap((res) => { console.log('tap', res); }), 
            map((res) => {
                console.log('map',res.data);
                return res.data;
            })
        );
    }       
}
