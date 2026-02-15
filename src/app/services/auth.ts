import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthStore } from '../stores/auth.store';

@Injectable({ providedIn: 'root' })
export class Auth {

  private API_URL = 'http://localhost:3000';
  private http = inject(HttpClient);
  private authStore = inject(AuthStore);

  login(email: string, password: string) {
    return this.http.post<any>(
      `${this.API_URL}/auth/login`,
      { email, password },
      { withCredentials: true }
    ).pipe(
      tap(res => {
        localStorage.setItem('accessToken', res.accessToken);
        this.authStore.setUser(res.user);
      })
    );
  }

  register(email: string, password: string) {
    return this.http.post<any>(
      `${this.API_URL}/auth/register`,
      { email, password },
      { withCredentials: true }
    ).pipe(
      tap(res => {
        localStorage.setItem('accessToken', res.accessToken);
        this.authStore.setUser(res.user);
      })
    );
  }

  getMe() {
    return this.http.get<any>(
      `${this.API_URL}/auth/me`,
      { withCredentials: true }
    ).pipe(
      tap(user => this.authStore.setUser(user))
    );
  }

  refreshToken() {
    return this.http.post<any>(
      `${this.API_URL}/refresh`,
      {},
      { withCredentials: true }
    );
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.authStore.clearUser();
  }

  isLoggedIn() {
    return this.authStore.isLoggedIn();
  }
}
