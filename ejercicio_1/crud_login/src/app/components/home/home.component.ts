import { Component, OnInit } from '@angular/core';
import { LoginService, User } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListUsers: User[] = [];

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers() {
    this.LoginService.getUsers().subscribe({
      next: (res) => this.ListUsers = <any>res,
      error: (err) => console.log(err)
    });
  }

  delete(id:number) {
    this.LoginService.deleteUser(id).subscribe({
      next: (res) => {
        console.log('Usuario eliminado')
        this.listUsers();
      },
      error: (err) => console.log(err)
    });
  }

  edit(id:number) {
    this.router.navigate(['/edit/' + id])
  }

}
