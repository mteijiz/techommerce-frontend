import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/app/Service/Keycloak/keycloak-security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(
    private securityService:KeycloakSecurityService
  ) { }
  
  ngOnInit(){
    
  }

  onLogin(){
    this.securityService.keycloak.login();
  }

  onLogout(){
    this.securityService.keycloak.logout();
  }

  onRegister(){
    this.securityService.keycloak.register();
  }

  

}
