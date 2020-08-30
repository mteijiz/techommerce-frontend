import { Injectable } from '@angular/core';
import { Route, Router, CanActivate } from '@angular/router';
import { KeycloakSecurityService } from '../Keycloak/keycloak-security.service';

@Injectable({
    providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate {
    constructor(private keycloakSecurityService: KeycloakSecurityService, private router: Router) {
    }

    canActivate(): boolean {
        if (this.keycloakSecurityService.keycloak.hasRealmRole("app-user"))
            return true;
        else
            return false;
    }
} 