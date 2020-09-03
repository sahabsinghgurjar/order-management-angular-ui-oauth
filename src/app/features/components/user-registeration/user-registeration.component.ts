import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AppUser } from '../../models/app-user.model';
import { AppMessageService } from 'src/app/AppCommon/services/app-message.service';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.scss']
})
export class UserRegisterationComponent implements OnInit {
 userRegisterFormGroup :FormGroup;
 msgKey;


 constructor(private fb: FormBuilder,private userService: UserService,private appMessageService:AppMessageService) { }

  ngOnInit(): void {
    this.userRegisterFormGroup =this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: [''],
      phone: ['', Validators.maxLength(10)],
      userId: ['', Validators.required],
      address: [''],
     
    });
    this.msgKey=this.appMessageService.USER_REGISTERATION;
  }

  onSubmit() {
    const appUser=new AppUser();
    appUser.userId=this.userRegisterFormGroup.get("userId").value;
    appUser.firstName=this.userRegisterFormGroup.get("firstName").value;
    appUser.lastName=this.userRegisterFormGroup.get("lastName").value;
    appUser.address=this.userRegisterFormGroup.get("address").value;
    appUser.email=this.userRegisterFormGroup.get("email").value;
    appUser.phone=this.userRegisterFormGroup.get("phone").value;
    this.userService.registerUser(appUser).subscribe(data=>{
      this.appMessageService.addUserReisterSucessMsg(data);
      console.debug(data);
    });
    console.warn(this.userRegisterFormGroup.value);
  }

}
