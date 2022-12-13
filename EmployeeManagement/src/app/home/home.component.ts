import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  logedinUserName: string = '';
  activeMenu: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('username');
    if (user != null) {
      this.logedinUserName = user;
    }
  }

  openNav() {
    const nav = document.getElementById('mySidenav');
    if (nav != null) {
      nav.style.width = '250px';
    }
    const navMain = document.getElementById('main');
    if (navMain != null) {
      navMain.style.marginLeft = '250px';
    }
  }

  closeNav() {
    const nav = document.getElementById('mySidenav');
    const navMain = document.getElementById('main');
    if (nav != null && navMain != null) {
      nav.style.width = '0';
      navMain.style.marginLeft = '0';
    }
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigateByUrl('/login');
  }

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
  }
}
