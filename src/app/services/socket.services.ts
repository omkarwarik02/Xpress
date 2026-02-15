import { inject, Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketServices {
  private socket: Socket;

  constructor(){
    this.socket = io('http://localhost:3000');
  }
  onNewPost(callback:(post:any) =>void){
    this.socket.on('new-post',callback);
  }
  onLikePost(callback:(data:any)=>void){
    this.socket.on('post-like-count',callback);
  }

}
