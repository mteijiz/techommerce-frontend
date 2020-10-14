import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { KeycloakSecurityService } from '../Keycloak/keycloak-security.service';

@Injectable({
    providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate {
    constructor(private keycloakSecurityService: KeycloakSecurityService) {
    }

    canActivate(): boolean {
        if (this.keycloakSecurityService.keycloak.hasRealmRole("app-user"))
            return true;
        else
            return false;
    }
} 