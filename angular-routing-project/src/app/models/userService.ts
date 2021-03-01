import { User } from './user';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor(private _httpClient: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this._httpClient.get<User[]>('http://jsonplaceholder.typicode.com/users');
    }

    getUserById(id: number): Observable<User> {
        return this._httpClient.get<User>('http://jsonplaceholder.typicode.com/users/' + id);
    }

    deleteUser(id: number) {
        return this._httpClient.delete<User>('http://jsonplaceholder.typicode.com/users/' + id);
    }

}