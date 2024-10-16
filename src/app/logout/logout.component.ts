import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
    private router: Router,
  ) {}

  async logout() {
    await this.oktaAuth.signOut().then(() => this.router.navigateByUrl(''));
  }
  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }
}
