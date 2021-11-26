import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  geturl() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  loginUser(auth: any) {
    return this.http.post<any>('http://3.6.36.70:5000/api/v1/adminLogin', auth);
  }
}
