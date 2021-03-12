// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { of, Observable } from 'rxjs';
// import { catchError, mapTo, tap } from 'rxjs/operators';
// import { baseUrl } from '../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private readonly JWT_TOKEN = 'JWT_TOKEN';
//   private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
//   private loggedUser: string;

//   constructor(private http: HttpClient) {}

//   login(user):Observable<any>{
//     return this.http.post(`${baseUrl}login`, user)
//     .pipe(
//         tap(tokens => this.doLoginUser(user.email, tokens)),
//         mapTo(true),
//         catchError(error => {
//           alert(error.error);
//           return of(false);
//         }));
//   }

//   logout() {
//     return this.http.post<any>(`${baseUrl}logout`, null).pipe(
//       tap(() => this.doLogoutUser()),
//       mapTo(true),
//       catchError(error => {
//         alert(error.error);
//         return of(false);
//       }));
//   }

//   register(user):Observable<any>{
//     return this.http.post(`${baseUrl}register`, user)
//     .pipe(
//         mapTo(true),
//         catchError(error => {
//           alert(error.error);
//           return of(false);
//         }));
//   }

//   isLoggedIn() {
//     return !!this.getJwtToken();
//   }

//   getJwtToken() {
//     return localStorage.getItem(this.JWT_TOKEN);
//   }

//   refreshToken() {
//     return this.http.post(`${baseUrl}refresh`, null)
//     .pipe(tap(tokens => {
//       this.storeToken(tokens);
//     }));
//   }

//   private doLogoutUser() {
//     this.loggedUser = null;
//     this.removeTokens();
//   }

//   private doLoginUser(email, tokens){
//     this.loggedUser = email
//     this.storeToken(tokens);
//   }

//   private storeToken(tokens) {
//     localStorage.setItem(this.JWT_TOKEN, tokens.token);
//   }
  
//   private removeTokens() {
//     localStorage.removeItem(this.JWT_TOKEN);
//   }
// }