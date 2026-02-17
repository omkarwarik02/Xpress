import { Component, OnInit, ChangeDetectorRef,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, Button } from 'primeng/button';
import { SocketServices } from '../../services/socket.services';
import { Socket } from 'socket.io-client';
import { PostsService } from '../../services/posts.service';
import { ProgressSpinnerModule, ProgressSpinner } from 'primeng/progressspinner';
import { BadgeModule } from 'primeng/badge';
import { MessageModule } from 'primeng/message';

import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-posts-component',
  standalone: true,
  imports: [CommonModule, Button, ProgressSpinner,BadgeModule,MessageModule,ToastModule, RippleModule],
  templateUrl: './posts-component.html',
  styleUrls: ['./posts-component.scss'],
  providers:[MessageService]
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  loading = true;
  private API_URL = 'http://localhost:3000';
  private postsService = inject(PostsService);
private  socketService =inject(SocketServices); 
private messageService=inject(MessageService) ;


    private cdr = inject (ChangeDetectorRef);
  

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next:(posts) =>{
        this.posts = posts;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.error(err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });

    this.socketService.onNewPost((post)=>{
      this.posts.unshift({
        ...post,
        imageUrl:`http://localhost:3000/uploads/${post.image}`,
        likesCount:post.likes?.length || 0
      });
      this.cdr.detectChanges();
    });
    this.socketService.onLikePost((data)=>{
      const post = this.posts.find(p => p._id === data.postId);
      if(post){
        post.likesCount = data.likesCount;
        this.cdr.detectChanges();
      }
    });
  }


showToastSuccess(){
  this.messageService.add({severity:'success',detail:'Liked Post'});
}
showToastWarn(){
    this.messageService.add({severity:'warn',detail:'UnLiked Post'});
}
//like function
likePost(post:any):void{
    console.log('POST OBJECT:', post);
  console.log('POST ID:', post._id);


  this.postsService.toggleLike(post._id).subscribe({
    next:(res)=>{
      post.likesCount = res.likesCount;
      post.likedByUser = res.likedByUser;
      this.cdr.detectChanges();
      
        if (res.likedByUser) {
        this.showToastSuccess();
      } else {
        this.showToastWarn();
      }
    },
    error:(err)=>{
      console.error(err);
    }
  })
}

}
