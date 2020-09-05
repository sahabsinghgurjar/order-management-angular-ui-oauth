import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AppUser } from '../../models/app-user.model';
import { AppMessageService } from 'src/app/AppCommon/services/app-message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.scss']
})
export class UserRegisterationComponent implements OnInit {
 userRegisterFormGroup :FormGroup;
 msgKey;
 userId:string;


 constructor( private route: ActivatedRoute,private fb: FormBuilder,private userService: UserService,private appMessageService:AppMessageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
  });

    this.userRegisterFormGroup =this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: [''],
      phone: ['', Validators.maxLength(10)],
      userId: ['', Validators.required],
      address: [''],
     
    });
    this.msgKey=this.appMessageService.USER_REGISTERATION;
    if(this.userId){
      this.userService.getUser(this.userId).subscribe(userData=>{
        this.userRegisterFormGroup.get("userId").setValue(userData.userId);
        this.userRegisterFormGroup.get("firstName").setValue(userData.firstName);
         this.userRegisterFormGroup.get("lastName").setValue(userData.lastName);
        this.userRegisterFormGroup.get("address").setValue(userData.address);
         this.userRegisterFormGroup.get("email").setValue(userData.email);
         this.userRegisterFormGroup.get("phone").setValue(userData.phone);
      })
   
    }
  }

  onSubmit() {
    const appUser=new AppUser();
    appUser.userId=this.userRegisterFormGroup.get("userId").value;
    appUser.firstName=this.userRegisterFormGroup.get("firstName").value;
    appUser.lastName=this.userRegisterFormGroup.get("lastName").value;
    appUser.address=this.userRegisterFormGroup.get("address").value;
    appUser.email=this.userRegisterFormGroup.get("email").value;
    appUser.phone=this.userRegisterFormGroup.get("phone").value;
    if(this.userId){
      this.userService.updateUser(appUser).subscribe(data=>{
        this.appMessageService.addUserReisterSucessMsg(data);
        console.debug(data);
      }, err =>   this.appMessageService.addUserReisterFailedMsg(err.error));
    }else{
    this.userService.registerUser(appUser).subscribe(data=>{
      this.appMessageService.addUserReisterSucessMsg(data);
      console.debug(data);
    }, err =>   this.appMessageService.addUserReisterFailedMsg(err.error));
  }
  }
  updateUser(event:any,user:AppUser){
    this.userService.deleteUser(user).subscribe(data=>{
      this.appMessageService.addUserReisterSucessMsg(data);
      console.debug(data);
    }, err =>   this.appMessageService.addUserReisterFailedMsg(err.error));

  }
}
