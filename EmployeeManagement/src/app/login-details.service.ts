import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {
  username : string;
  password  : string;
  constructor() {
    this.username = 'Deepali';
    this.password = 'Deep@123';
  }
}
