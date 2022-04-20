import { Component, OnInit } from '@angular/core';
import { LoginService, User } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    user: User = {
      name: '',
      email: '',
      password: '',
    };
    constructor(private LoginService: LoginService,
                private router: Router,
                private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_input = this.activeRoute.snapshot.params['id'];
    console.log(id_input);
    if (id_input) {
      this.LoginService.getSingleUser(id_input).subscribe({
          next: (res) => this.user = <any>res,
          error: (err) => console.log(err)
      });
    }
  }

  edit() {
    this.LoginService.editUser(this.user.id!, this.user).subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err)
    });
    this.router.navigate(['/index'])
  }

}
