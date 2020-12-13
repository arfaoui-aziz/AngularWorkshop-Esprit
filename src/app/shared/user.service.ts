import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { userUrl } from 'src/environments/environment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User>{
    return this.http.post<User>(userUrl,user);
  }
  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
}

}
