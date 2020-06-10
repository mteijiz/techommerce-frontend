import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public keycloak:KeycloakInstance;

  constructor() { }

  async init(){
    console.log('INIT : Service keycloak security ');
    this.keycloak = new Keycloak({
      url: 'http://localhost:8180/auth',
      realm: 'techommerce',
      clientId: 'angular-app'
    });
    await this.keycloak.init({
      //onLoad:'login-required'
      onLoad:'check-sso'
    })
    console.log(this.keycloak.token);
  }
}
