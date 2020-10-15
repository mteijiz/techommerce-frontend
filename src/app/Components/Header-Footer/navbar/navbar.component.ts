import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakSecurityService } from 'src/app/Service/Keycloak/keycloak-security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public securityService: KeycloakSecurityService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.securityService.keycloak.tokenParsed['email']);
  }

  onLogin() {
    this.securityService.keycloak.login();
  }

  onLogout() {
    this.securityService.keycloak.logout();
  }

  onRegister() {
    this.securityService.keycloak.register();
  }

}
