import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;
  username: string = "";
  password: string = "";

  @Output() loggedStatus = new EventEmitter<Boolean>();
  constructor
  (
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login()
  {
    this.authService.validate(this.username, this.password);
    this.router.navigate([""]);

  };
}
