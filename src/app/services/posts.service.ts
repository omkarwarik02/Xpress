import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any>('http://localhost:3000/post').pipe(
      map(res =>
        res.data.map((post: any) => ({
          ...post,
          imageUrl: `http://localhost:3000/uploads/${post.image}`
        }))
      )
    );
  }
}
