import { Component, OnInit } from '@angular/core';
import { LoginService, User } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user: User = {
    name:'',
    email:'',
    password:'',
  };

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.LoginService.addUser(this.user).subscribe();
    this.router.navigate(['/index']);
  }
}
