import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
  providers: [PostService]
})
export class TravelComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) {}

  postsToDisplay: Post[] = [];
  ngOnInit() {
    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      for(var i = 0; i < dataLastEmittedFromObserver.length ;i++) {
        this.postsToDisplay.push(dataLastEmittedFromObserver[i]);
      }
    })
    this.getTravelPosts();
  }

  posts: FirebaseListObservable<any[]>;
  travelPosts: Post[] = [];

  getTravelPosts() {
    for (var i = 0; i < this.postsToDisplay.length; i++) {
      if (this.postsToDisplay[i].category === 'travel') {
        this.travelPosts.push(this.postsToDisplay[i]);
      }
    }
    return this.travelPosts;
  }

  goToPost(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

  }
