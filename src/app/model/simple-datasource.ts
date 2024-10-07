import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class SimpleDataSource {
  public questions: any[] = [];
  public answers: any[] = [];
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth,
  ) {}

  getQuestionSet(): Observable<any> {
    return this.http.get(`${this.baseUrl}/question-set`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this._oktaAuth.getAccessToken()}`,
      }),
    });
  }
}
