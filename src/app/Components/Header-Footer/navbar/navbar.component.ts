import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakSecurityService } from 'src/app/Service/Keycloak/keycloak-security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(
    private securityService:KeycloakSecurityService,
    private router : Router
  ) { }
  
  ngOnInit(){
    
  }

  onLogin(){
    this.securityService.keycloak.login();
  }

  onLogout(){
    this.securityService.keycloak.logout().then(
      data => {
        this.router.navigateByUrl('/home');
        console.log("Success de navbar con logout");
      },
      error => {
        console.log("Success de navbar con logout");
      });
  }

  onRegister(){
    this.securityService.keycloak.register();
  }

  

}
