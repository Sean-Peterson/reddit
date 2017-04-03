import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';




@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})

export class PostDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  postsToDisplay;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    });

    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      for(var i = 0; i < dataLastEmittedFromObserver.length; i++) {
        this.postsToDisplay.push(dataLastEmittedFromObserver[i]);
      }
    })

    for (var i = 0; i < this.postsToDisplay.length; i++) {
      if (this.postsToDisplay[i].keys === this.postId){
        this.postDetail = this.postsToDisplay[i];
      }
    }
  }

  posts: FirebaseListObservable<any[]>;
  postDetail: Post;
  postId: number = null;

  // getPostDetail() {
  //   for (var i = 0; i < this.postsToDisplay.length; i++) {
  //     if (this.postsToDisplay[i].$key === this.postId){
  //       this.postDetail = this.postsToDisplay[i];
  //     }
  //   }
  // }

}
