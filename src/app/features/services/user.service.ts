import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static readonly    USER_SEARCH_URL:string="/orderApp/user/";

  constructor(private http: HttpClient) { }
  getAllUsers():Observable<AppUser[]>{
     return this.http.get<AppUser[]>(UserService.USER_SEARCH_URL+'all').pipe(
       catchError(this.handleError)
     );
    /*
const appuser=new AppUser();
appuser.name='sahab';
appuser.email="testemail@ymail.com";
appuser.phone=66988988;
appuser.userId="estUserId";
    return of([].concat(appuser));
    */
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
