import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {

  private readonly API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getPosts():Observable<any[]> {
    return this.http.get<any>(`${this.API_URL}/post`).pipe(
      map(res =>
        res.data.map((post:any)=>({
          ...post,
          ImageUrl:`${this.API_URL}/uploads/${post.image}`,
          likesCount:post.likes?.length || 0,
          likedByUser:post.likes?post.likes.includes(this.getCurrentUserId()):false
        }))
      )
    )
   
  }

  toggleLike(postId: string):Observable<{
    likesCount:number;
    likedByUser:boolean;
  }>{
    return this.http.post<any>(
      `${this.API_URL}/post/${postId}/like`,
      {}
    );
  }
  private getCurrentUserId():string{
    return localStorage.getItem('userId') || '';
  }
}
