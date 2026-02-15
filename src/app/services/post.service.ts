import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private API_URL = 'http://localhost:3000';
  private http = inject(HttpClient);

  createPost(formData: FormData){
    return this.http.post(`${this.API_URL}/post`, formData);
  }
  
}
