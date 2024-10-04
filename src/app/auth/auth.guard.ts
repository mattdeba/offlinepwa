import {inject} from "@angular/core";
import {OKTA_AUTH} from "@okta/okta-angular";
import OktaAuth from "@okta/okta-auth-js";
import {Router} from "@angular/router";

export const authGuard = async () => {
  const router = inject(Router);
  const oktaAuth: OktaAuth = inject(OKTA_AUTH);

  const authenticated = await oktaAuth.isAuthenticated();

  if (authenticated) {
    return true;
  }

  return router.navigateByUrl('');
};
