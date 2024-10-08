import { Component, Inject } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  ngOnInit() {}

  closeMenu(navTab: string) {
    this.menu.close();
    this.router.navigateByUrl(navTab);
  }
}
