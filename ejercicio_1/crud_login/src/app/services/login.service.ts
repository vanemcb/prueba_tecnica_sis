import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url + 'users');
  }

  getSingleUser(id:number) {
    return this.http.get(this.url + 'users/' + id);
  }

  addUser(user:User) {
    return this.http.post(this.url + 'add', user);
  }

  deleteUser(id:number) {
    return this.http.delete(this.url + 'delete/' + id);
  }

  editUser(id:number, user:User) {
    return this.http.put(this.url + 'update/' + id, user);
  }

}

export interface User{
  id?:number;
  name:string;
  email:string;
  password:string;
}
