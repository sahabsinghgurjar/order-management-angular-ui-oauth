import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { OktaAuthService } from '@okta/okta-angular';
import { UserClaims } from '@okta/okta-angular';

interface Claim {
  claim: string;
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  value:any;
  public isLoggedIn = false;
  isAuthenticated: boolean = false;
  loggedInUser:string;

  constructor(public oktaAuth: OktaAuthService) {
  }

 
    async   ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if( this.isAuthenticated ){
    this.loggedInUser=( await this.oktaAuth.getUser()).name;
    console.log(this.oktaAuth.getUser());
    }
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );

    this.items = [
        {
            label: 'User',
            items: [{
                    label: 'Search', 
                    routerLink: ['feature/userSearch']
                },
                {label: 'Register', routerLink: ['feature/userRegisteration']},
            ]
        },
        {
            label: 'Items',
            items: [
                {label: 'Search', routerLink: ['feature/productSearch']},
                {label: 'Add', routerLink: ['feature/productAdd']}
            ]
        },{
          label: 'Order',
          items: [
              {label: 'New', routerLink: ['feature/orderForm']}
          ]
      }
    ];
}


}
