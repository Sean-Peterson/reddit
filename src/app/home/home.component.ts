import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  posts: FirebaseListObservable<any[]>;

  upVote(post) {

    post.vote += 1;
  }

  downVote(post) {
    post.vote -= 1;
  }

  voteColor(post) {
    if (post.vote <= -10) {
      return "lighter";
    } else if (post.vote >= 10) {
      return "oranger";
    }
  }

  // posts: Post[];

  goToPost(clickedPost: Post, key) {
    console.log(clickedPost);
    this.router.navigate(['posts', key]);
  }

  constructor(private router: Router, private postService: PostService) {}

  postsToDisplay: Post[] = [];
  ngOnInit() {
    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      for(var i = 0; i < dataLastEmittedFromObserver.length ;i++) {
        this.postsToDisplay.push(dataLastEmittedFromObserver[i]);
      }
    })
  }
}
