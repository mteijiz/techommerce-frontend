import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from './Service/Keycloak/keycloak-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){
    
  }

  ngOnInit(){
    
  }

  title = 'techommerce-frontend';
}
