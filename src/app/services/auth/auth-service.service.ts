import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private user:User =  new User();
  constructor(private http: HttpClient) { }
