import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  BASE_URL = "http://localhost:3000/users/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  showAll(): Observable<User[]> {
      return this.httpClient.get<User[]>(this.BASE_URL, this.httpOptions);
  }

  searchById(id: number): Observable<User>{
      return this.httpClient.get<User>(this.BASE_URL + id, this.httpOptions);
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.BASE_URL, JSON.stringify(user), this.httpOptions);
  }

  remove(id: number): Observable<User> {
    return this.httpClient.delete<User>(this.BASE_URL + id, this.httpOptions);
  }

  change(user: User): Observable<User>{
    return this.httpClient.put<User>(this.BASE_URL + user.id, JSON.stringify(user), this.httpOptions);
  }
}
