import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.loadToken();
    if (this.authService.getToken() == null ||
        this.authService.isTokenExpired())
      this.router.navigate(['/login']);
  }

  onLogout() {
    this.authService.logout();
  }
}
