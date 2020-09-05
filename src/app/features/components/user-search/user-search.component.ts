import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AppUser } from '../../models/app-user.model';
import { AppMessageService } from 'src/app/AppCommon/services/app-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  users: AppUser[];

  cols: any[];

  constructor(private userService: UserService,private appMessageService:AppMessageService,private router:Router) { }

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
  deleteUser(event:any,user:AppUser){
    this.userService.deleteUser(user).subscribe(data=>{
      this.appMessageService.addUserReisterSucessMsg(data);
      this.userService.getAllUsers().subscribe(data => this.users = data);
    }, err =>   this.appMessageService.addUserReisterFailedMsg(err.error));

  }

  updateUser(event:any,user:AppUser){
    this.router.navigate(['/orderManagement/home/feature/userRegisteration'], { queryParams: {userId: user.userId}});
  }
}
