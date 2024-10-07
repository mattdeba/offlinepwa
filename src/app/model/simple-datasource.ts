import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { Observable } from 'rxjs';

@Injectable()
export class SimpleDataSource {
  public questions: any[] = [];
  public answers: any[] = [];

  constructor(
    private http: HttpClient,
    @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth,
  ) {}

  getQuestionSet(): Observable<any> {
    return this.http.get('http://localhost:3000/question-set', {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this._oktaAuth.getAccessToken()}`,
      }),
    });
  }
}
