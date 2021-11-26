import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginForm!: FormGroup;
  details = {};
  constructor(private router: Router, private user: UserService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl(''),
    });
  }
  loginUser() {
    this.user.loginUser(this.details).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.router.navigate(['/details']);
  }
}
