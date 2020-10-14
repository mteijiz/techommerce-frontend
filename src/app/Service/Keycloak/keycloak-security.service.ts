import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public keycloak: KeycloakInstance;

  constructor() { }

  async init() {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8180/auth',
      realm: 'techommerce',
      clientId: 'angular-app'
    });
    await this.keycloak.init({
      onLoad: 'check-sso'
    }).then((auth) => {      
      localStorage.setItem("token", this.keycloak.token);
      localStorage.setItem("refresh-token", this.keycloak.refreshToken);
      setTimeout(() => {
        this.keycloak.updateToken(60).then((refreshed) => {
          if (refreshed) {
            console.debug('Token refreshed' + refreshed);
          } else {
          }
        }).catch(() => {
          console.error('Failed to refresh token');
        });
      }, 40000)
    }).catch(() => {
    });
  }

}
