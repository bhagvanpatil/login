import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  userData: any = [];
  constructor(
    private service: UserService,
    private user: UserService,
    private router: Router
  ) {
    this.user.geturl().subscribe((data) => {
      console.log(data);
      this.userData = data;
    });
  }

  ngOnInit(): void {}

  backToLogin() {
    this.router.navigate(['/']);
  }
}
