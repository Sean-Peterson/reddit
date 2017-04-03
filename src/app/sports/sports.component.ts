import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  providers: [PostService]
})
export class SportsComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) {}

  postsToDisplay: Post[] = [];
  ngOnInit() {
    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      for(var i = 0; i < dataLastEmittedFromObserver.length ;i++) {
        this.postsToDisplay.push(dataLastEmittedFromObserver[i]);
      }
    })
    this.getSportsPosts();
  }

  posts: FirebaseListObservable<any[]>;
  sportsPosts: Post[] = [];

  getSportsPosts() {
    for (var i = 0; i < this.postsToDisplay.length; i++) {
      if (this.postsToDisplay[i].category === 'sports') {
        this.sportsPosts.push(this.postsToDisplay[i]);
      }
    }
    return this.sportsPosts;
  }

  goToPost(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

  }
