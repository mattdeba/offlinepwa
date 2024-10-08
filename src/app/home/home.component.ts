import { Component, Inject, OnInit } from '@angular/core';
import OktaAuth from '@okta/okta-auth-js';
import { OKTA_AUTH } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
    private router: Router,
  ) {}

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  async login() {
    await this.oktaAuth.signInWithRedirect();
  }

  async navigateTo(url: string) {
    return this.router.navigateByUrl(url);
  }
}
