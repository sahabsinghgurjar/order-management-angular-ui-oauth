import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AppUser } from '../../models/app-user.model';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  users: AppUser[];

  cols: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getAllUsers().subscribe(data => this.users = data);

      this.cols = [
          { field: 'userId', header: 'User Id' },
          { field: 'firstName', header: 'First Name' },
          { field: 'lastName', header: 'Last Name' },
          { field: 'address', header: 'Address' },
          { field: 'email', header: 'Email' },
          { field: 'phone', header: 'Phone' }
      ];
  }
}
