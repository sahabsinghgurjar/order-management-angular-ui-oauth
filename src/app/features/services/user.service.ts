import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static readonly    USER_SEARCH_URL:string=environment.appBaseUrl+"/orderApp/user/";

  constructor(private http: HttpClient) { }
  getAllUsers():Observable<AppUser[]>{
     return this.http.get<AppUser[]>(UserService.USER_SEARCH_URL+'all');
  }

  getUser(userId:string):Observable<AppUser>{
    return this.http.get<AppUser>(UserService.USER_SEARCH_URL+'myUser/'+userId);
 }

  deleteUser(appUser:AppUser){
    return this.http.put(UserService.USER_SEARCH_URL+"delete", appUser,{responseType: 'text'});


  }
  updateUser(appUser:AppUser){
    return this.http.put(UserService.USER_SEARCH_URL+'update',appUser, {responseType: 'text'});


  }
  registerUser(appUser:AppUser){
    return this.http.post(UserService.USER_SEARCH_URL+'register',appUser, {responseType: 'text'});


  }
}
