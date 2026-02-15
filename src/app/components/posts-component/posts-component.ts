import { Component, OnInit, ChangeDetectorRef,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SocketServices } from '../../services/socket.services';
import { Socket } from 'socket.io-client';

@Component({
  selector: 'app-posts-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './posts-component.html',
  styleUrls: ['./posts-component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  loading = true;
  private API_URL = 'http://localhost:3000';
private  socketService =inject(SocketServices);  

private http = inject (HttpClient);
    private cdr = inject (ChangeDetectorRef);
  

  ngOnInit(): void {
    this.http.get<any>(`${this.API_URL}/post`).subscribe({
      next: (res) => {
        this.posts = res.data.map((post: any) => ({
          ...post,
          imageUrl: `${this.API_URL}/uploads/${post.image}`,
        
        }));
          this.socketService.onNewPost((post)=>{
            this.posts.unshift(post)
          })
        this.loading = false;

        // FORCE UI UPDATE
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
